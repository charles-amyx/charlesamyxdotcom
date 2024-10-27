// src/lib/images.ts
import type { ImageMetadata } from 'astro';

console.log("Starting image import...");
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{png,jpg,jpeg,gif,webp}', { eager: true });
console.log("Imported images:", Object.keys(images));

export const imageMap: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const filename = path.split('/').pop() || '';
    console.log("Processing image:", filename);
    return [filename, module.default];
  })
);

console.log("Final image map keys:", Object.keys(imageMap));
