import { defineCollection, z } from 'astro:content';

// Define schemas for your collections
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    date: z.string().optional(),
    description: z.string().optional(),
    slug: z.string().optional(),
    image: z.string().optional(),
    type: z.string().optional(),
    duration: z.string().optional(),
    skills: z.array(z.string()).optional(),
    url: z.object({
      label: z.string(),
      link: z.string().url()
    }).optional(),
    featured: z.boolean().optional(),
    featuredImg: z.string().optional(),
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

// Export the collections
export const collections = {
  'projects': projectsCollection,
  'resume': resumeCollection,
}; 