/**
 * Site-wide content. Everything here is plain data — edit this file to
 * update the Hero, Status, About, and Contact sections without touching
 * any component.
 */

export const site = {
  name: "Yuankun Huang",
  title: "Yuankun Huang — Game Systems & Simulation",
  description:
    "Unity engineer with 5+ years shipping game systems in production, including Mythic Heroes (10M+ downloads). Currently working on the Unity native boundary and on determinism, replay, and verification. Direction: Physical AI simulation infrastructure — making simulation trustworthy.",
  url: "https://yuankunhuang.com",
  ogImage: "/social-image.png",
  resumeHref: "/YuankunHuang-Resume.pdf",
  resumeDownloadName: "YuankunHuang-Resume.pdf",
};

export const hero = {
  name: "Yuankun Huang",
  headline:
    "Five years shipping Unity games in production. Building evidence that simulation can be reproduced and verified.",
  subline:
    "Vancouver, BC · Unity / C# in production · direction: simulation verification · Canadian citizen, TN eligible",
  intro:
    "I build game systems for a living: Mythic Heroes (10M+ downloads) from early development through global launch and live ops, a shipped survival title, and the live-event client framework on an unannounced strategy title. I am currently working on the Unity native boundary — C++ interop, plugin architecture, diagnostics — and on systems a CI gate can hold to account: deterministic record and replay, multi-agent simulation, zero-allocation hot paths. That native-boundary work is after hours, a bridge I am building, not my day job. The direction is Physical AI simulation infrastructure: making simulation trustworthy, meaning reproducible, verifiable, and auditable. Not a claim of expertise yet; a direction with evidence attached.",
  stats: ["10M+ downloads shipped", "5+ years in production", "C# · C++ · Python"],
  cta: { label: "Selected work ↓", href: "#work" },
  socialLinks: [
    { label: "GitHub", url: "https://github.com/YuankunHuang" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yuankun-huang/" },
  ],
};

export const now = {
  updated: "Q3 2026",
  items: [
    {
      label: "At work",
      value:
        "owning the live-event client framework on an unannounced strategy title at IGG Canada — the module other client engineers build on",
    },
    {
      label: "Building",
      value:
        "rhythm-fruit-shop-cpp — a native C++20 core with deterministic record and replay, an independent CI oracle, and a zero-allocation hot path",
    },
    {
      label: "Also",
      value:
        "currently working on Unity Native Boundary Lab — C++ interop, plugin architecture, cross-boundary diagnostics; a bridge, not the day job",
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
    "Games were how my mother and I first shared a language — puzzles solved together at one keyboard — and that mix of connection and learning still orients the work. I joined IGG Canada in 2020 as a Unity engineer and shipped Mythic Heroes from early development through global launch and years of live operations at 10M+ download scale, contributed to Dawn of Survival, and now own the live-event client framework on an unannounced strategy title.",
    "Games were the right first language, making something people come back to, where timing and feel have to hold together after the thing ships. I still love that problem, and I think the medium has a long future.",
    "As AI raises what a small team can finish, people will have more willingness to pay for attention and play, and games will take more of that. The same force is making simulation a factor of production for anything that has to act in the physical world. If the simulated world is wrong, everything trained on it inherits the lie. Looking real will get cheaper. What stays scarce is trust: a result you can reproduce, verify, and show your work for.",
    "I know the kind of work I stay for. Tools and platforms other people actually rely on. Depth over width. A quality compulsion I will not talk myself out of. Those habits were formed in games. They are also what a trustworthy simulation stack needs. So the years I want to spend next are on that verification layer — infrastructure that makes a run trustworthy. A working conclusion. The map is not finished.",
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
    "Open to conversations about real-time systems and making simulation trustworthy — reproducible, verifiable, auditable.",
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
