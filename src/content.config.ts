import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const severity = z.object({
  critical: z.number().int().min(0).default(0),
  high: z.number().int().min(0).default(0),
  medium: z.number().int().min(0).default(0),
  low: z.number().int().min(0).default(0),
  info: z.number().int().min(0).default(0),
});

const security = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/security' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['contest', 'report', 'writeup', 'oss']),
    label: z.string().optional(),
    platform: z.string(),
    role: z.string(),
    status: z.enum(['complete', 'pending']).default('complete'),
    severity: severity.optional(),
    scope: z.string().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const companies = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    period: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/work' }),
  schema: z.object({
    company: z.string(),
    name: z.string(),
    role: z.string().optional(),
    stack: z.string(),
    order: z.number().default(0),
    diagrams: z.array(z.object({ file: z.string(), title: z.string() })),
  }),
});

export const collections = { security, companies, work };
