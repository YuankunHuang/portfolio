// Dev-only accessibility scan (not part of the site build).
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = "http://localhost:4321";
const browser = await chromium.launch();

let failed = false;
for (const [path, theme] of [
  ["/", "light"],
  ["/", "dark"],
  ["/work/trait/", "light"],
  ["/work/rhythm-fruit-shop-cpp/", "dark"],
]) {
  const ctx = await browser.newContext({ colorScheme: theme });
  const page = await ctx.newPage();
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  await page.evaluate(() =>
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible")),
  );
  const results = await new AxeBuilder({ page }).analyze();
  console.log(`${path} [${theme}]: ${results.violations.length} violations`);
  for (const v of results.violations) {
    failed = true;
    console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
    for (const n of v.nodes.slice(0, 3))
      console.log(`    -> ${n.target.join(" ")} :: ${n.any[0]?.message ?? ""}`);
  }
  await ctx.close();
}

await browser.close();
process.exit(failed ? 1 : 0);
