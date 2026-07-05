/**
 * Site-wide content. Everything here is plain data — edit this file to
 * update the Hero, Now, About, and Contact sections without touching
 * any component.
 */

export const site = {
  name: "Yuankun Huang",
  title: "Yuankun Huang | Senior Game Engineer",
  description:
    "Yuankun Huang — Senior game engineer in Vancouver. Shipped Mythic Heroes to 10M+ players; now building deterministic, replayable simulation infrastructure in native C++. Canadian citizen, TN visa eligible.",
  url: "https://yuankunhuang.com",
  ogImage: "/social-image.png",
  resumeHref: "/YuankunHuang-Resume.pdf",
  resumeDownloadName: "YuankunHuang-Resume.pdf",
};

export const hero = {
  name: "Yuankun Huang",
  headline:
    "I ship live games to millions — and build the deterministic real-time systems underneath them.",
  subline:
    "Vancouver, BC · Senior Software Engineer — Real-Time Systems · Open to US senior roles (TN eligible)",
  intro:
    "I come from shipping live mobile games at 10M+ download scale. I'm now engineering the layer beneath them: deterministic, replayable simulation cores — native C++, fixed timesteps, and the boundary where managed code meets native.",
  stats: ["10M+ downloads shipped", "5+ years in production", "C++ · C# · Python"],
  cta: { label: "See selected work ↓", href: "#work" },
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
        "after a Mythic Heroes maintenance pass, building live-event and lightweight minigame frameworks for an unannounced strategy title",
    },
    {
      label: "Just shipped",
      value:
        "rhythm-fruit-shop-cpp — a native C++20 rhythm core where timing, determinism, and zero-allocation are CI-enforced contracts, not claims",
    },
    {
      label: "Learning",
      value:
        "UE5 MassEntity production patterns and flow-field pathfinding; starting OMSCS (Computing Systems) at Georgia Tech, Fall 2026",
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
    "I first understood what software could do by watching games teach things textbooks could not — my mother and I would sit together solving puzzles, and something that was supposed to be entertainment turned into a shared language. That mix of connection and learning has oriented every role I have taken since. I joined IGG Canada in 2020 as a Unity engineer, shipped Mythic Heroes through global launch and live operations at 10M+ download scale, and later rejoined the team for a maintenance pass before moving onto client frameworks for live events and lightweight minigames on an unannounced strategy title.",
    "The past year has been a deliberate move down the stack: from building games to building the real-time systems games run on — native C++, fixed-timestep simulation kernels, replay and determinism infrastructure, and the performance contracts that make games possible rather than the games themselves. The projects below are that transition made concrete. Rhythm Fruit Shop's CI-enforced determinism and Kodama's data-oriented server loop are framed as games, but the engineering underneath them is simulation infrastructure.",
    "My working style is front-loaded. I write a design doc before I write code, name the tradeoff I am making before I commit to a direction, and reach for a profiler before I guess at a bottleneck. I prefer systems that are boring and correct to systems that are clever and fragile, and I have the production war stories to explain why. I keep specs measurable, postmortems honest, and documentation accurate — not because I was told to, but because I have debugged enough other people's undocumented systems at 2am to know what the alternative costs.",
    "Outside work I listen to Hans Zimmer scores loud enough that my neighbors have opinions about it. I keep a Diet Coke within arm's reach during long repro sessions. I teach my mother math problems over video call, which turns out to be a surprisingly good way to sharpen your own explanations. I ski the slopes of BC when there is snow, play badminton when there is not, and I am genuinely excited about what distributed simulation is going to make possible in the next decade.",
  ],
  skills: "C++20 · C# · Unity · Python · .NET 8 · CMake · UE5 · SignalR · Profiling",
  archive: {
    label: "View early creative portfolio",
    url: "https://yuankunhuang.myportfolio.com/",
  },
};

export const contact = {
  message:
    "Open to selective conversations about senior game engineering, simulation infrastructure, and systems tooling.",
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

export const navigation = {
  brand: "YH",
  links: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};
