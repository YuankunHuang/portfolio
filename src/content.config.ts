import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * All projects live in src/content/work/, one MDX file each.
 *
 * Two tiers share the collection:
 *   - Full case studies: `featured: true`, carry context/decision/outcome
 *     and a cover image, get a /work/<slug>/ page, and appear in the home
 *     page Selected Work index.
 *   - Light entries: `featured: false`, only need title/year/summary/stack,
 *     and appear only on the /work/ index page.
 */
const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Featured projects appear on the home page and get a case-study page. */
      featured: z.boolean().default(false),
      /** Sort order among featured projects (ascending). */
      order: z.number().default(99),
      /** Start year, used for grouping on the /work/ index. */
      year: z.string(),
      period: z.string().optional(),
      role: z.string().optional(),
      team: z.string().optional(),
      stack: z.array(z.string()),
      /** One-sentence summary used in indexes and meta descriptions. */
      summary: z.string(),
      context: z.string().optional(),
      decision: z.string().optional(),
      outcome: z.string().optional(),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          /** CSS object-position for the cover crop. */
          position: z.string().default("center center"),
        })
        .optional(),
      links: z
        .array(z.object({ label: z.string(), url: z.url() }))
        .default([]),
      /** Self-hosted demo video (path under public/). */
      video: z
        .object({
          src: z.string(),
          poster: image().optional(),
          caption: z.string().optional(),
        })
        .optional(),
      /** Embedded live demo, e.g. a Unity WebGL build (path under public/). */
      webgl: z
        .object({
          src: z.string(),
          title: z.string(),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            title: z.string(),
            caption: z.string(),
          }),
        )
        .default([]),
    }),
});

/**
 * Blog posts. One MDX file per post under src/content/writing/.
 * Posts with `draft: true` are excluded from builds.
 */
const writing = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
