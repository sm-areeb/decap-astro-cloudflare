import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.enum(['Starters', 'Mains', 'Desserts', 'Drinks']),
    price: z.string(),
    featured: z.boolean().default(false),
    image: image().optional(),
    tags: z.array(z.string()).default([])
  })
});

const pageCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    hero: z
      .object({
        eyebrow: z.string().optional(),
        heading: z.string(),
        subheading: z.string(),
        primaryCta: z
          .object({
            label: z.string(),
            href: z.string()
          })
          .optional(),
        secondaryCta: z
          .object({
            label: z.string(),
            href: z.string()
          })
          .optional(),
        backgroundImage: image().optional()
      })
      .optional(),
    featuredMenuItems: z.array(z.string()).default([]),
    seo: z
      .object({
        description: z.string().max(160).optional(),
        image: image().optional()
      })
      .optional()
  })
});

const testimonialCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    quote: z.string(),
    rating: z.number().min(1).max(5).default(5)
  })
});

const eventCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
    image: image().optional(),
    featured: z.boolean().default(false),
    capacity: z.number().optional(),
    price: z.string().optional(),
    seo: z
      .object({
        description: z.string().max(160).optional(),
        image: image().optional()
      })
      .optional()
  })
});

export const collections = {
  menu: menuCollection,
  pages: pageCollection,
  testimonials: testimonialCollection,
  events: eventCollection
};