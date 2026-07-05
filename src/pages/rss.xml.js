import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET(context) {
  const posts = (await getCollection("writing", (e) => !e.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Yuankun Huang — Writing",
    description: "Notes on Unity client engineering, native interop, and real-time systems.",
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
  });
}
