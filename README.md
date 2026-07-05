# yuankunhuang.com — Portfolio

Personal portfolio of Yuankun Huang, built with [Astro](https://astro.build). Content-first,
near-zero client JavaScript, fully static output — portable across GitHub Pages, Cloudflare
Pages/Workers, Vercel, or any static host.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |
| `npm run check`   | Type-check `.astro` files and content schema |

`npm run build` is the CI build command; the output in `dist/` is plain static files.

## Project structure

```
src/
  content.config.ts       Content collection schemas (zod-validated)
  content/
    work/*.mdx            Case studies (one file per project)
    other-work.yaml       Smaller/older projects (compact list)
  data/site.ts            Hero / Now / About / Contact / navigation content
  assets/                 Images processed by Astro's image pipeline
  components/             Astro components (no UI framework)
  layouts/                Base HTML layout (SEO, fonts, theme)
  pages/                  Routes: / and /work/[slug]
  styles/                 Design tokens + global styles
public/
  projects/               Demo videos (served as-is)
  webgl-demos/            Unity WebGL builds (served as-is)
```

## Adding a new project

1. **Full case study**: add `src/content/work/<slug>.mdx`. Frontmatter is schema-validated
   (see `src/content.config.ts`): title, order, period, role, team, stack, cover image,
   optional demo video / WebGL embed, optional gallery. The MDX body is the long-form
   case study and supports code blocks, pull quotes, and images.
2. **Smaller project**: add an entry to `src/content/other-work.yaml`.

Put cover/gallery images under `src/assets/work/<slug>/` so they go through the optimized
image pipeline. Put videos and WebGL builds under `public/projects/<slug>/`.

## Verification scripts (dev-only)

With `npm run preview` running in another terminal:

```
node scripts/screenshot.mjs        # visual snapshots (light/dark/mobile) into screenshots/
node scripts/interaction-test.mjs  # smoke-tests theme toggle, demo dialogs, lightbox, anchors
node scripts/a11y-test.mjs         # axe-core accessibility scan (light + dark)
```

These use Playwright (`npx playwright install chromium` once) and are not part of the site build.

## Content conventions

- The "Now" section (`src/data/site.ts`) is updated quarterly.
- The resume PDF lives at `public/YuankunHuang-Resume.pdf`.
- `public/_headers` carries Brotli content-encoding rules for Unity WebGL builds
  (used by Cloudflare/Netlify-style hosts; ignored elsewhere).
