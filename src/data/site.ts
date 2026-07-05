/**
 * Site-wide content. Everything here is plain data — edit this file to
 * update the Hero, Status, About, and Contact sections without touching
 * any component.
 */

export const site = {
  name: "Yuankun Huang",
  title: "Yuankun Huang — Game Engineer",
  description:
    "Unity engineer with 5+ years shipping mobile games in production — including Mythic Heroes (10M+ downloads) from early development through global launch and live ops. Currently working at the native boundary: C++ interop, plugin architecture, runtime diagnostics — toward deterministic real-time simulation.",
  url: "https://yuankunhuang.com",
  ogImage: "/social-image.png",
  resumeHref: "/YuankunHuang-Resume.pdf",
  resumeDownloadName: "YuankunHuang-Resume.pdf",
};

export const hero = {
  name: "Yuankun Huang",
  headline:
    "Five years shipping Unity games in production. Now engineering the layer where C# meets native code.",
  subline: "Vancouver, BC · Game engineer — Unity & native interop · Canadian citizen, TN eligible",
  intro:
    "I build game clients for a living: Mythic Heroes (10M+ downloads) from early development through global launch and live ops, a shipped survival title, and client frameworks for an unannounced strategy game. My current work runs along the Unity native boundary — C++ interop, plugin architecture, and cross-boundary diagnostics — a deliberate bridge from client engineering toward deterministic, replayable simulation systems. Not a claim of expertise yet; a direction with evidence attached.",
  stats: ["10M+ downloads shipped", "5+ years in production", "C# · C++ · Python"],
  cta: { label: "Selected work ↓", href: "#work" },
  socialLinks: [
    { label: "GitHub", url: "https://github.com/YuankunHuang" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yuankun-huang/" },
  ],
};

export const now = {
  updated: "Q2 2026",
  items: [
    {
      label: "At work",
      value:
        "building live-event and minigame client frameworks for an unannounced strategy title at IGG Canada",
    },
    {
      label: "Building",
      value:
        "Unity Native Boundary Lab — design doc complete, implementation in progress: C++ interop, native plugin architecture, cross-boundary diagnostics",
    },
    {
      label: "Just shipped",
      value:
        "rhythm-fruit-shop-cpp — a native C++20 rhythm core where timing, determinism, and zero-allocation are CI-enforced contracts",
    },
    {
      label: "Learning",
      value: "starting OMSCS (Computing Systems) at Georgia Tech, Fall 2026",
    },
    {
      label: "Listening to",
      value: "Hans Zimmer, Interstellar OST — volume too high, always",
    },
  ],
};

export const about = {
  heading: "Yuankun Huang",
  paragraphs: [
    "Games were how my mother and I first shared a language — puzzles solved together at one keyboard — and that mix of connection and learning still orients the work. I joined IGG Canada in 2020 as a Unity engineer and shipped Mythic Heroes from early development through global launch and years of live operations at 10M+ download scale, contributed to Dawn of Survival, and now build live-event and minigame client frameworks for an unannounced strategy title.",
    "The past year has been a deliberate move toward the native boundary: the layer where managed Unity code meets C++ runtimes, platform APIs, and SDKs. Rhythm Fruit Shop's CI-enforced determinism, Kodama's data-oriented server loop, and the in-progress Unity Native Boundary Lab are that transition made concrete — verifiable artifacts, not a rebranding. The long-term target is deterministic real-time simulation: systems that are reproducible, replayable, and headless-capable, with simulation logic cleanly separated from presentation.",
    "My working style is front-loaded: a design doc before code, the tradeoff named before the commitment, a profiler before a guess. I prefer systems that are boring and correct to systems that are clever and fragile. Outside work I listen to Hans Zimmer scores loud enough that my neighbors have opinions, teach my mother math over video call, ski BC's slopes when there is snow, and play badminton when there is not.",
  ],
  skills: "C# · Unity · C++20 · .NET 8 · Python · CMake · SignalR · Profiling · CI",
  education: "OMSCS (Computing Systems), Georgia Tech — starting Fall 2026",
  archive: {
    label: "View early creative portfolio",
    url: "https://yuankunhuang.myportfolio.com/",
  },
};

export const contact = {
  message:
    "Open to conversations about Unity client engineering, native interop, and real-time systems work.",
  eligibility: "Canadian citizen — TN visa eligible for US roles.",
  methods: [
    { label: "Email", value: "me@yuankunhuang.com", href: "mailto:me@yuankunhuang.com" },
    {
      label: "LinkedIn",
      value: "/in/yuankun-huang",
      href: "https://www.linkedin.com/in/yuankun-huang/",
    },
    { label: "GitHub", value: "YuankunHuang", href: "https://github.com/YuankunHuang" },
  ],
};

/** Show the Writing entry in the navbar once there are enough posts. */
export const showWriting = false;

export const navigation = {
  brand: "YH",
  links: [
    { label: "Work", href: "/work/" },
    ...(showWriting ? [{ label: "Writing", href: "/writing/" }] : []),
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};
