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
    work/*.mdx            All projects (featured case studies + light index entries)
    writing/*.mdx         Blog posts (draft: true excludes from builds)
  data/site.ts            Hero / Status / About / Contact / navigation content
  assets/                 Images processed by Astro's image pipeline
  components/             Astro components (no UI framework)
  layouts/                Base HTML layout (SEO, fonts, theme)
  pages/                  Routes: /, /work/, /work/[slug], /writing/, /writing/[slug], /rss.xml
  styles/                 Design tokens + global styles
public/
  projects/               Demo videos (served as-is)
  webgl-demos/            Unity WebGL builds (served as-is)
```

## Adding a new project

All projects live in `src/content/work/`, one MDX file each (schema in
`src/content.config.ts`):

1. **Featured case study**: set `featured: true` and provide `order`, `period`, `role`,
   `team`, `context`/`decision`/`outcome`, and a cover image. It appears in the home page
   Selected Work index and gets a `/work/<slug>/` page. The MDX body is the optional
   long-form deep dive (code blocks, pull quotes, images).
2. **Light entry**: only `title`, `year`, `summary`, `stack` (plus optional links/demo).
   It appears only on the `/work/` index, grouped by year.

Put cover/gallery images under `src/assets/work/<slug>/` so they go through the optimized
image pipeline. Put videos and WebGL builds under `public/projects/<slug>/`.

## Publishing a blog post

Copy `src/content/writing/hello-template.mdx` to `src/content/writing/<slug>.mdx`, fill in
the frontmatter, and set `draft: false`. The post automatically appears on `/writing/`, in
the home page Recent Writing section, in `/rss.xml`, and in the sitemap. Flip `showWriting`
in `src/data/site.ts` to add Writing to the navbar (kept off until a few posts exist).

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

- The "Status" panel (`now` in `src/data/site.ts`) is updated quarterly.
- The resume PDF lives at `public/YuankunHuang-Resume.pdf`.
- `public/_headers` carries Brotli content-encoding rules for Unity WebGL builds
  (used by Cloudflare/Netlify-style hosts; ignored elsewhere).
