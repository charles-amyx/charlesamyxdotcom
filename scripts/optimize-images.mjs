import sharp from 'sharp';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

async function optimizeImage() {
  const inputPath = join(projectRoot, 'src/assets/images/featured--poverty.jpg');
  const outputPath = join(projectRoot, 'src/assets/images/featured--poverty.webp');
  
  try {
    await sharp(inputPath)
      .webp({
        quality: 80,
        effort: 6,
      })
      .toFile(outputPath);
    
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 