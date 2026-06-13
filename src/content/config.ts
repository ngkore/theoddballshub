import { defineCollection, z } from 'astro:content';

// The two axes that organise everything on the site.
// Add a value here (e.g. a new destination) and it works everywhere.
export const TOPICS = ['Visa', 'Finance', 'Tools', 'Living', 'Life Tips', 'Podcast'] as const;
export const DESTINATIONS = ['Prague', 'France', 'General'] as const;

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // One-line summary shown on cards and at the top of the post.
    description: z.string(),
    // Who wrote it — shows on the post. Defaults to the group.
    author: z.string().default('The Oddballs'),
    pubDate: z.coerce.date(),
    topic: z.enum(TOPICS),
    destination: z.enum(DESTINATIONS),
    // Optional: pin to the homepage "featured" row.
    featured: z.boolean().default(false),
    // Optional cover image path under /public, e.g. '/images/prague.jpg'
    cover: z.string().optional(),
  }),
});

export const collections = { posts };
