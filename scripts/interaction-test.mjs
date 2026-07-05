// Dev-only interaction smoke test (not part of the site build).
import { chromium } from "playwright";

const BASE = "http://localhost:4321";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const results = [];
const check = (name, ok) => results.push(`${ok ? "PASS" : "FAIL"} ${name}`);

await page.goto(BASE + "/", { waitUntil: "networkidle" });

// Theme toggle persists and flips data-theme
const before = await page.evaluate(() => document.documentElement.dataset.theme);
await page.click("#theme-toggle");
const after = await page.evaluate(() => document.documentElement.dataset.theme);
const stored = await page.evaluate(() => localStorage.getItem("theme"));
check("theme toggle flips", before !== after && stored === after);

// Demo dialog opens with a <video> and closes on Escape
await page.click('button[data-demo-type="video"]');
await page.waitForSelector("#demo-dialog video", { state: "visible", timeout: 3000 });
check("video dialog opens", await page.isVisible("#demo-dialog video"));
await page.keyboard.press("Escape");
await page.waitForTimeout(200);
check(
  "dialog closes on Escape, video removed",
  !(await page.isVisible("#demo-dialog")) &&
    (await page.locator("#demo-dialog video").count()) === 0,
);

// WebGL dialog opens an iframe (lives on the /work/ index)
await page.goto(BASE + "/work/", { waitUntil: "networkidle" });
await page.click('button[data-demo-type="webgl"]');
await page.waitForTimeout(300);
check("webgl dialog opens iframe", await page.isVisible("#demo-dialog iframe"));
await page.keyboard.press("Escape");

// Case-study lightbox
await page.goto(BASE + "/work/trait/", { waitUntil: "networkidle" });
await page.click("button[data-lightbox-src]");
await page.waitForSelector("#lightbox img[src]", { state: "visible", timeout: 3000 });
check("lightbox opens", await page.isVisible("#lightbox img[src]"));
const alt = await page.getAttribute("#lightbox-img", "alt");
check("lightbox has alt text", !!alt && alt.length > 5);
await page.keyboard.press("Escape");
await page.waitForTimeout(200);
check("lightbox closes on Escape", !(await page.isVisible("#lightbox")));

// Anchor nav from case study back to home section
await page.click('a[href="/#work"]:not([aria-label])');
await page.waitForTimeout(1000);
const y = await page.evaluate(() => window.scrollY);
check("back link lands on #work section", page.url().endsWith("/#work") && y > 100);

// No console errors on either page
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.goto(BASE + "/work/kodama/", { waitUntil: "networkidle" });
check("no page errors", errors.length === 0);

console.log(results.join("\n"));
await browser.close();
process.exit(results.some((r) => r.startsWith("FAIL")) ? 1 : 0);
