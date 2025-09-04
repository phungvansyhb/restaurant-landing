const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '../app/assets/raw_photo';
const outputDir = '../app/assets/optimized_photo';

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
				// Tạo các kích thước khác nhau AVIF
				const sizes = [24, 48];

				for (const size of sizes) {
					// AVIF với chất lượng cao cho ảnh nhỏ
					await sharp(inputPath)
						.resize(size, size, {
							kernel: sharp.kernel.lanczos3,
							fit: 'cover',
							position: 'center',
						})
						.avif({
							quality: size <= 72 ? 75 : 65,
							effort: 6,
						})
						.toFile(path.join(outputDir, `${baseName}-${size}x${size}.avif`));
				}

				// Tạo ảnh gốc AVIF (giữ kích thước gốc)
				await sharp(inputPath)
					.avif({ quality: 70, effort: 6 })
					.toFile(path.join(outputDir, `${baseName}-original.avif`));

				console.log(`✅ Optimized: ${file}`);
			} catch (error) {
				console.error(`❌ Error processing ${file}:`, error.message);
			}
		}
	}
}

optimizeImages().then(() => {
	console.log('🎉 All images optimized!');
});
