import DarkVibrant from 'node-vibrant';

export async function getDominantColor(imageUrl: string): Promise<string> {
  try {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const palette = await DarkVibrant.from(buffer).getPalette();
    return palette.DarkVibrant?.hex || '#f3f4f6';
  } catch (error) {
    console.error('Error getting dominant color:', error);
    return '#f3f4f6';
  }
}
