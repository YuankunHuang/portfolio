/**
 * Site-wide content. Everything here is plain data — edit this file to
 * update the Hero, Status, About, and Contact sections without touching
 * any component.
 */

export const site = {
  name: "Yuankun Huang",
  title: "Yuankun Huang — Game Systems & Real-Time Simulation",
  description:
    "Unity engineer with 5+ years shipping game systems in production, including Mythic Heroes (10M+ downloads). After hours: native C++20 and real-time physics simulation — stable, fast and reproducible.",
  url: "https://yuankunhuang.com",
  ogImage: "/social-image.png",
  resumeHref: "/YuankunHuang-Resume.pdf",
  resumeDownloadName: "YuankunHuang-Resume.pdf",
};

export const hero = {
  name: "Yuankun Huang",
  headline:
    "Five years shipping Unity games in production. Now going deep on real-time physics simulation.",
  subline:
    "Vancouver, BC · Unity / C# in production · C++20 after hours · Canadian citizen",
  intro:
    "I build game systems for a living: Mythic Heroes (10M+ downloads) from early development through global launch and live ops, a second shipped title, and now the live-event client framework on an unannounced strategy title. After hours I work further down the stack in native C++20. Right now that is Tether, a small physics game I am building from first principles: a fixed-step simulation, a damped spring tether, contact handling and deterministic replay. The direction is real-time physics simulation — how contact and constraint solvers stay stable and fast, and how to show a run is right, not just repeatable. Not a claim of expertise yet; a direction with evidence attached.",
  stats: ["10M+ downloads shipped", "5+ years in production", "C# · C++20"],
  cta: { label: "Selected work ↓", href: "#work" },
  socialLinks: [
    { label: "GitHub", url: "https://github.com/YuankunHuang" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yuankun-huang/" },
  ],
};

export const now = {
  updated: "Q4 2026",
  items: [
    {
      label: "At work",
      value:
        "an unannounced strategy title at IGG Canada — I own the live-event client framework six other engineers ship 30+ event types on, and the hero Showcase scenes",
    },
    {
      label: "Building",
      value:
        "Tether — a native C++20 physics game: a vulnerable core swings a ball on a damped spring tether. Fixed-step simulation, contacts and deterministic replay, built by hand. Early, and private for now",
    },
    {
      label: "Next",
      value:
        "Constantum — the replay and first-divergence harness that grows out of Tether's replay work. The public repo holds the kernel only so far",
    },
    {
      label: "Archived",
      value:
        "rhythm-fruit-shop-cpp — a native C++20 practice game whose CI replays a recorded run that must reproduce the recorded result exactly, with an allocation-free gameplay path checked by headless tests",
    },
    {
      label: "Learning",
      value:
        "OMSCS (Computing Systems) at Georgia Tech — first semester underway, taking Computer Animation",
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
    "I know the kind of work I stay for. Systems other people actually rely on. Depth over width. A quality compulsion I will not talk myself out of. Those habits were formed in games. They are also what physics simulation needs. So the years I want to spend next are on real-time physics: contact and constraint solving that stays stable within a compute budget, and the discipline to tell a reproducible run from a correct one. A working conclusion. The map is not finished.",
    "My working style is front-loaded: a design doc before code, the tradeoff named before the commitment, a profiler before a guess. I prefer systems that are boring and correct to systems that are clever and fragile. Outside work I listen to Hans Zimmer scores loud enough that my neighbors have opinions, teach my mother math over video call, ski BC's slopes when there is snow, and play badminton when there is not.",
  ],
  skills: "C# · Unity · C++20 · .NET 8 · CMake · SignalR · Profiling · CI",
  education: "M.S. Computer Science (Computing Systems), Georgia Tech OMSCS — in progress since Fall 2026 · Master of Digital Media, Centre for Digital Media (SFU)",
  archive: {
    label: "View early creative portfolio",
    url: "https://yuankunhuang.myportfolio.com/",
  },
};

export const contact = {
  message:
    "Open to conversations about real-time systems, game engines and physics simulation.",
  eligibility: "Canadian citizen, based in Metro Vancouver.",
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
