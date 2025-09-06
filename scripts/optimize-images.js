const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '../app/assets/raw_photo';
const outputDir = '../public/optimized_photo';

// Tạo thư mục output nếu chưa có
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
	const files = fs.readdirSync(inputDir);

	for (const file of files) {
		if (file.match(/\.(jpg|jpeg|png)$/i)) {
			const inputPath = path.join(inputDir, file);
			const baseName = path.parse(file).name;

			console.log(`Processing: ${file}`);

			try {
				// Lấy thông tin kích thước gốc
				const metadata = await sharp(inputPath).metadata();
				const { width, height } = metadata;

				console.log(`Original size: ${width}x${height}`);

				await sharp(inputPath)
					.resize({
						width: 400,
						height: 400,
						fit: 'cover',
					})
					.avif({
						quality: 75,
						effort: 9,
						lossless: false,
					})
					.toFile(path.join(outputDir, `${baseName}.avif`));

				console.log(`✅ Optimized: ${file}.avif`);
			} catch (error) {
				console.error(`❌ Error processing ${file}:`, error.message);
			}
		}
	}
}

optimizeImages().then(() => {
	console.log('🎉 All images optimized!');
	console.log('📁 Output directory:', outputDir);
});
