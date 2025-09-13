const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
	// Input logo paths (priority order)
	inputPaths: [
		path.join(__dirname, '../app/assets/logo.jpg'),
		path.join(__dirname, '../public/logo.avif'),
	],

	// Output directory
	outputDir: path.join(__dirname, '../public/icons'),

	// Icon sizes to generate
	sizes: [
		// Favicon sizes
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },

		// Apple Touch Icons
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'apple-touch-icon-152x152.png', size: 152 },
		{ name: 'apple-touch-icon-144x144.png', size: 144 },
		{ name: 'apple-touch-icon-120x120.png', size: 120 },
		{ name: 'apple-touch-icon-114x114.png', size: 114 },
		{ name: 'apple-touch-icon-76x76.png', size: 76 },
		{ name: 'apple-touch-icon-72x72.png', size: 72 },
		{ name: 'apple-touch-icon-60x60.png', size: 60 },
		{ name: 'apple-touch-icon-57x57.png', size: 57 },

		// Android/Chrome Icons
		{ name: 'android-chrome-192x192.png', size: 192 },
		{ name: 'android-chrome-512x512.png', size: 512 },

		// Microsoft Tiles
		{ name: 'mstile-150x150.png', size: 150 },
		{ name: 'mstile-310x310.png', size: 310 },

		// PWA Icons
		{ name: 'icon-48x48.png', size: 48 },
		{ name: 'icon-72x72.png', size: 72 },
		{ name: 'icon-96x96.png', size: 96 },
		{ name: 'icon-144x144.png', size: 144 },
		{ name: 'icon-192x192.png', size: 192 },
		{ name: 'icon-256x256.png', size: 256 },
		{ name: 'icon-384x384.png', size: 384 },
		{ name: 'icon-512x512.png', size: 512 },
	],
};

/**
 * Find the best available logo file
 */
function findLogoFile() {
	for (const logoPath of CONFIG.inputPaths) {
		if (fs.existsSync(logoPath)) {
			console.log(`✅ Found logo: ${logoPath}`);
			return logoPath;
		}
	}
	throw new Error('❌ No logo file found! Please ensure logo.jpg or logo.avif exists.');
}

/**
 * Ensure output directory exists
 */
function ensureOutputDirectory() {
	if (!fs.existsSync(CONFIG.outputDir)) {
		fs.mkdirSync(CONFIG.outputDir, { recursive: true });
		console.log(`📁 Created output directory: ${CONFIG.outputDir}`);
	}
}

/**
 * Generate a single icon
 */
async function generateIcon(inputPath, outputPath, size) {
	try {
		await sharp(inputPath)
			.resize(size, size, {
				fit: 'cover',
				position: 'center',
				background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
			})
			.png({
				quality: 90,
				compressionLevel: 9,
			})
			.toFile(outputPath);

		console.log(`✅ Generated: ${path.basename(outputPath)} (${size}x${size})`);
	} catch (error) {
		console.error(`❌ Failed to generate ${path.basename(outputPath)}:`, error.message);
	}
}

/**
 * Generate ICO favicon from PNG
 */
async function generateFavicon(inputPath) {
	try {
		const faviconPath = path.join(CONFIG.outputDir, 'favicon.ico');

		// Create multiple sizes for ICO file
		const sizes = [16, 32, 48];
		const buffers = [];

		for (const size of sizes) {
			const buffer = await sharp(inputPath)
				.resize(size, size, {
					fit: 'cover',
					position: 'center',
				})
				.png()
				.toBuffer();
			buffers.push(buffer);
		}

		// For now, just use the 32x32 version as favicon.ico
		// (Full ICO generation would require additional library)
		await sharp(inputPath)
			.resize(32, 32, {
				fit: 'cover',
				position: 'center',
			})
			.png()
			.toFile(faviconPath);

		console.log(`✅ Generated: favicon.ico`);
	} catch (error) {
		console.error(`❌ Failed to generate favicon.ico:`, error.message);
	}
}

/**
 * Generate web app manifest file
 */
function generateManifest() {
	const manifest = {
		name: 'Restaurant Landing',
		short_name: 'Restaurant',
		description: 'Restaurant booking and menu application',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/icons/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icons/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/icons/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icons/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};

	const manifestPath = path.join(__dirname, '../public/manifest.json');
	fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
	console.log(`✅ Generated: manifest.json`);
}

/**
 * Generate HTML meta tags for icons
 */
function generateHtmlMeta() {
	const metaTags = `
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/icons/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">

<!-- Android/Chrome Icons -->
<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png">

<!-- Microsoft Tiles -->
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/icons/mstile-150x150.png">

<!-- PWA Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme Colors -->
<meta name="theme-color" content="#000000">
<meta name="msapplication-navbutton-color" content="#000000">
<meta name="apple-mobile-web-app-status-bar-style" content="#000000">
`.trim();

	const metaPath = path.join(__dirname, '../public/icon-meta.html');
	fs.writeFileSync(metaPath, metaTags);
	console.log(`✅ Generated: icon-meta.html (copy to <head> section)`);
}

/**
 * Main function
 */
async function main() {
	console.log('🚀 Starting icon generation...\n');

	try {
		// Find logo file
		const logoPath = findLogoFile();

		// Ensure output directory exists
		ensureOutputDirectory();

		console.log(`\n📸 Generating ${CONFIG.sizes.length} icon sizes...\n`);

		// Generate all icon sizes
		const promises = CONFIG.sizes.map(({ name, size }) => {
			const outputPath = path.join(CONFIG.outputDir, name);
			return generateIcon(logoPath, outputPath, size);
		});

		await Promise.all(promises);

		// Generate favicon.ico
		console.log('\n🎯 Generating favicon.ico...');
		await generateFavicon(logoPath);

		// Generate manifest.json
		console.log('\n📱 Generating PWA manifest...');
		generateManifest();

		// Generate HTML meta tags
		console.log('\n🏷️ Generating HTML meta tags...');
		generateHtmlMeta();

		console.log('\n✨ Icon generation completed successfully!');
		console.log(`\n📁 Icons saved to: ${CONFIG.outputDir}`);
		console.log('📄 Copy contents of icon-meta.html to your <head> section');
	} catch (error) {
		console.error('\n❌ Icon generation failed:', error.message);
		process.exit(1);
	}
}

// Run the script
if (require.main === module) {
	main();
}

module.exports = { main, generateIcon, CONFIG };
