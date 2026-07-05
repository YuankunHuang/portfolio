// Dev-only visual verification script (not part of the site build).
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:4321";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

async function shot(name, path, { width = 1440, height = 900, theme = "light", full = false } = {}) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    colorScheme: theme === "dark" ? "dark" : "light",
  });
  const page = await ctx.newPage();
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full });
  await ctx.close();
  console.log("saved", name);
}

await shot("home-light-full", "/", { full: true });
await shot("home-dark", "/", { theme: "dark" });
await shot("case-rhythm-light", "/work/rhythm-fruit-shop-cpp/", { full: true });
await shot("case-trait-dark", "/work/trait/", { theme: "dark", full: true });
await shot("home-mobile", "/", { width: 375, height: 720, full: true });
await shot("home-tiny", "/", { width: 320, height: 640 });

await browser.close();
