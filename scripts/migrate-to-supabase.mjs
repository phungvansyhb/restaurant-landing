import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mime from 'mime-types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY // Need service role for initial setup

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.")
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function uploadImage(imagePath) {
    if (!imagePath) return null;

    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const localFilePath = path.join(__dirname, '../public', cleanPath);

    if (!fs.existsSync(localFilePath)) {
        console.warn(`File not found: ${localFilePath}`);
        return null;
    }

    const fileName = path.basename(cleanPath);
    // Use timestamp to avoid collisions
    const storagePath = `migrated/${Date.now()}_${fileName}`;

    const fileBuffer = fs.readFileSync(localFilePath);
    const contentType = mime.lookup(localFilePath) || 'application/octet-stream';

    const { data, error } = await supabase.storage
        .from('images')
        .upload(storagePath, fileBuffer, {
            contentType: contentType,
            upsert: true
        });

    if (error) {
        console.error(`Failed to upload ${fileName}:`, error);
        return null;
    }

    const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(storagePath);

    return publicUrlData.publicUrl;
}

async function processImages(item) {
    const newItem = { ...item };

    if (newItem.image) {
        console.log(`Uploading main image for ${newItem.name || newItem.id}...`);
        const url = await uploadImage(newItem.image);
        if (url) newItem.image = url;
    }

    if (newItem.gallery && Array.isArray(newItem.gallery)) {
        console.log(`Uploading gallery for ${newItem.name || newItem.id}...`);
        const newGallery = [];
        for (const galleryImg of newItem.gallery) {
            const url = await uploadImage(galleryImg);
            if (url) newGallery.push(url);
        }
        newItem.gallery = newGallery;
    }

    // Handle specific mapping adjustments
    if(newItem.priceSpecial !== undefined) {
        newItem.price_special = newItem.priceSpecial;
        delete newItem.priceSpecial;
    }

    return newItem;
}

async function migrate() {
    console.log("Starting migration...");

    // Create admin user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: 'admin@admin.com',
        password: 'password123',
        email_confirm: true
    });

    if (authError && authError.message !== 'User already registered') {
        console.error("Error creating admin user:", authError);
    } else {
        console.log("Admin user created/verified: admin@admin.com / password123");
    }

    // Read JSON
    const dataPath = path.join(__dirname, '../app/database.json');
    const dbData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    // Restaurant Info
    if (dbData.restaurant) {
        console.log("Processing restaurant info...");
        const { error } = await supabase.from('restaurant').upsert(dbData.restaurant);
        if (error) console.error("Error inserting restaurant:", error);
    }

    // Combos
    if (dbData.combos) {
        console.log("Processing combos...");
        for (const item of dbData.combos) {
            const processedItem = await processImages(item);
            const { error } = await supabase.from('combos').upsert(processedItem);
            if (error) console.error(`Error inserting combo ${item.name}:`, error);
        }
    }

    // Hotpots
    if (dbData.hotpots) {
        console.log("Processing hotpots...");
        for (const item of dbData.hotpots) {
            const processedItem = await processImages(item);
            const { error } = await supabase.from('hotpots').upsert(processedItem);
            if (error) console.error(`Error inserting hotpot ${item.name}:`, error);
        }
    }

    // Dishes
    if (dbData.dishes) {
        console.log("Processing dishes...");
        for (const item of dbData.dishes) {
            const processedItem = await processImages(item);
            const { error } = await supabase.from('dishes').upsert(processedItem);
            if (error) console.error(`Error inserting dish ${item.name}:`, error);
        }
    }

    // Drinks
    if (dbData.drinks) {
        console.log("Processing drinks...");
        for (const item of dbData.drinks) {
            const processedItem = await processImages(item);
            const { error } = await supabase.from('drinks').upsert(processedItem);
            if (error) console.error(`Error inserting drink ${item.name}:`, error);
        }
    }

    console.log("Migration complete!");
}

migrate();
