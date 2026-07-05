# yuankunhuang.com — Portfolio

Personal portfolio of Yuankun Huang, built with [Astro](https://astro.build). Content-first,
near-zero client JavaScript, fully static output.

**Live at [yuankunhuang.com](https://yuankunhuang.com)**, deployed via GitHub Pages
(`YuankunHuang/portfolio` — a clean, standalone repo unrelated to the old
`yuankunhuang.github.io` codebase). Every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Astro and
publishes through GitHub's official Pages Actions (no `gh-pages` branch, no manual artifact
pushes). The output is plain static files, so moving to Cloudflare Pages/Workers or Vercel later
is a config change, not a rewrite — with one caveat: some current media files (Unity WebGL
build, a couple of demo videos) exceed Cloudflare's 25 MiB per-file limit and would need to move
to R2 or another CDN first.

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
2. **Smaller project**: add an entry to `src/content/other-work.json`.

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

## Local scripts (Windows)

| Script            | Action                                                                          |
| ------------------ | -------------------------------------------------------------------------------- |
| `test-local.bat`   | Installs deps if needed, type-checks, starts the dev server at `localhost:4321` |
| `deploy.bat`       | Type-checks + builds locally to catch errors, then commits and pushes to `main` — GitHub Actions takes over from there and publishes to yuankunhuang.com within ~1-2 minutes |

`deploy.bat` never pushes a broken site: if type-check or build fails locally, nothing is
committed or pushed.

## Content conventions

- The "Now" section (`src/data/site.ts`) is updated quarterly.
- The resume PDF lives at `public/YuankunHuang-Resume.pdf`.
- `public/_headers` carries Brotli content-encoding rules for Unity WebGL builds
  (used by Cloudflare/Netlify-style hosts; ignored elsewhere).
