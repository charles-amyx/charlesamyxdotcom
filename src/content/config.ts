import { defineCollection, z } from 'astro:content';

// Define schemas for your collections
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    client: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    cardImage: z.string().optional(),
    type: z.string().optional(),
    duration: z.string().optional(),
    skills: z.array(z.string()).optional(),
    url: z.object({
      label: z.string(),
      link: z.string().url()
    }).optional(),
    featured: z.boolean().optional(),
    featuredImg: image().optional(),
    featuredDesc: z.string().optional(),
    hasProcessContent: z.boolean().optional()
  })
});

const resumeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    position: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().optional(),
    order: z.number(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
    date: z.union([z.string(), z.date()]).transform(val => 
      val instanceof Date ? val.toISOString() : val
    )
  })
});

const sideProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    type: z.string(),
    href: z.string().url(),
    date: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional().default(false),
  })
});

// Export the collections
export const collections = {
  'projects': projectsCollection,
  'resume': resumeCollection,
  'side-projects': sideProjectsCollection,
}; 