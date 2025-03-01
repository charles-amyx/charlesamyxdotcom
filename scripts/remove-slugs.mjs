import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectsDir = path.join(__dirname, '..', 'src/content/projects');

// Read all MDX files in the projects directory
const files = fs.readdirSync(projectsDir).filter(file => file.endsWith('.mdx'));

files.forEach(file => {
  const filePath = path.join(projectsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: mdxContent } = matter(content);

  // Remove the slug field
  delete data.slug;

  // Write the file back without the slug
  const newContent = matter.stringify(mdxContent, data);
  fs.writeFileSync(filePath, newContent);

  console.log(`Removed slug from ${file}`);
}); 