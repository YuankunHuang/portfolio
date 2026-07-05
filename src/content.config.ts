import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

/**
 * Full case studies. One MDX file per project under src/content/work/.
 * Frontmatter carries everything the home page and case-study page need;
 * the MDX body is an optional long-form deep dive (code blocks, pull
 * quotes, extra figures) rendered after the Context/Decision/Outcome
 * summary on the case-study page.
 */
const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Sort order on the home page (ascending). */
      order: z.number(),
      period: z.string(),
      role: z.string(),
      team: z.string(),
      stack: z.array(z.string()),
      /** One-sentence summary used for meta descriptions. */
      summary: z.string(),
      context: z.string(),
      decision: z.string(),
      outcome: z.string(),
      cover: z.object({
        src: image(),
        alt: z.string(),
        /** CSS object-position for the cover crop. */
        position: z.string().default("center center"),
      }),
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
 * Smaller / older projects rendered as a compact list — no case-study page.
 */
const otherWork = defineCollection({
  loader: file("./src/content/other-work.json"),
  schema: z.object({
    year: z.string(),
    project: z.string(),
    description: z.string(),
    stack: z.string(),
    link: z.object({ label: z.string(), url: z.url() }).nullable(),
    demo: z
      .discriminatedUnion("type", [
        z.object({ type: z.literal("video"), src: z.string() }),
        z.object({ type: z.literal("webgl"), src: z.string(), title: z.string() }),
      ])
      .optional(),
  }),
});

export const collections = { work, otherWork };
