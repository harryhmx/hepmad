import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'zh']).default('en'),
    category: z.enum(['life-story', 'global-travel', 'solo-dev']),
  }),
});

export const collections = { blog };
