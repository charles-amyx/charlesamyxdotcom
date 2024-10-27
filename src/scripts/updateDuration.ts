import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { calculateMonthsBetween } from '../lib/dateUtils.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '..', '..', 'content', 'projects');

function updateDuration(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  if (data.duration) {
    const [startDate, endDate] = data.duration.split(' - ');
    const months = calculateMonthsBetween(startDate, endDate);
    data.duration = `${months} months`;

    const updatedContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated duration for ${path.basename(filePath)}`);
  }
}

fs.readdirSync(projectsDir).forEach(file => {
  if (file.endsWith('.mdx')) {
    updateDuration(path.join(projectsDir, file));
  }
});

console.log('Duration update complete!');
