import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './src/assets';
const MAX_WIDTH = 1920;
const QUALITY = 80;

const files = await readdir(ASSETS_DIR);
const jpgs = files.filter(f => ['.jpg', '.jpeg'].includes(extname(f).toLowerCase()));

console.log(`Found ${jpgs.length} images to compress...\n`);

let totalBefore = 0;
let totalAfter = 0;

for (const file of jpgs) {
  const filePath = join(ASSETS_DIR, file);
  const statBefore = await stat(filePath);
  const sizeBefore = statBefore.size;
  totalBefore += sizeBefore;

  try {
    const tempPath = filePath + '.tmp';
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(tempPath);

    const statAfter = await stat(tempPath);
    const sizeAfter = statAfter.size;
    totalAfter += sizeAfter;

    // Only replace if smaller
    if (sizeAfter < sizeBefore) {
      const { rename, unlink } = await import('fs/promises');
      await rename(tempPath, filePath);
      const saving = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
      console.log(`✓ ${file}: ${(sizeBefore/1024/1024).toFixed(2)}MB → ${(sizeAfter/1024/1024).toFixed(2)}MB (${saving}% saved)`);
    } else {
      const { unlink } = await import('fs/promises');
      await unlink(tempPath);
      console.log(`- ${file}: already optimized, skipped`);
    }
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
console.log(`Saved: ${((totalBefore - totalAfter)/1024/1024).toFixed(2)}MB`);