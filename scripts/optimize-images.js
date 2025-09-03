const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './app/assets/imgs';
const outputDir = './app/assets/imgs/optimized';

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
				// Tạo các kích thước khác nhau với chất lượng cao
				const sizes = [56, 72, 144, 288, 512];

				for (const size of sizes) {
					// JPEG với chất lượng cao và resize algorithm tốt
					await sharp(inputPath)
						.resize(size, size, {
							kernel: sharp.kernel.lanczos3, // Algorithm resize tốt nhất
							fit: 'cover',
							position: 'center',
						})
						.jpeg({
							quality: 90, // Chất lượng cao hơn cho ảnh nhỏ
							progressive: true,
							mozjpeg: true, // Sử dụng mozjpeg encoder nếu có
						})
						.toFile(path.join(outputDir, `${baseName}-${size}x${size}.jpg`));

					// WebP với chất lượng cao
					await sharp(inputPath)
						.resize(size, size, {
							kernel: sharp.kernel.lanczos3,
							fit: 'cover',
							position: 'center',
						})
						.webp({
							quality: 85,
							effort: 6, // Effort cao nhất cho chất lượng tốt
						})
						.toFile(path.join(outputDir, `${baseName}-${size}x${size}.webp`));

					// AVIF với chất lượng cao cho ảnh nhỏ
					await sharp(inputPath)
						.resize(size, size, {
							kernel: sharp.kernel.lanczos3,
							fit: 'cover',
							position: 'center',
						})
						.avif({
							quality: size <= 72 ? 75 : 65, // Chất lượng cao hơn cho ảnh nhỏ
							effort: 6,
						})
						.toFile(path.join(outputDir, `${baseName}-${size}x${size}.avif`));
				}

				// Tạo ảnh gốc với các format khác (giữ kích thước 1080x1080)
				await sharp(inputPath)
					.webp({ quality: 85, effort: 6 })
					.toFile(path.join(outputDir, `${baseName}-original.webp`));

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
