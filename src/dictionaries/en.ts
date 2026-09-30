import type { Dictionnaire } from "./fr";

const en: Dictionnaire = {
  meta: {
    titre: "vibeChitech — Project configurator & roadmap generator",
    description:
      "Configure your project (type, platform, language, framework, architecture) and automatically generate a complete checklist of every step, from brainstorming to deployment. 100% local, free, lightweight.",
  },
  nav: {
    fonctionnalites: "Features",
    catalogue: "Catalog",
    docs: "Docs",
    telecharger: "Download",
    langue: "Language",
  },
  footer: {
    slogan:
      "Project configurator and roadmap generator. 100% local, free, open source.",
    produit: "Product",
    ressources: "Resources",
    documentation: "Documentation",
    copyright: "© 2026 vibeChitech — made for devs, by a dev.",
  },
  accueil: {
    badge: "v0.1.0 — free, open source, 100% local",
    titreA: "From idea to deployment,",
    titreB: "a clear roadmap.",
    sousTitre:
      "Configure your project — type, platform, language, framework, architecture — and vibeChitech generates the complete checklist of every step to follow.",
    ctaTelecharger: "Download for free",
    ctaCatalogue: "Explore the catalog",
    plateformes: "windows · macos · linux — under 10 MB",
    commentCaMarche: {
      eyebrow: "// how it works",
      titre: "A 6-step wizard, a tailored roadmap.",
    },
    etapes: [
      {
        titre: "Describe your project",
        description:
          "Name, description, project type: game, website, mobile app, API, CLI, extension… 30+ types supported.",
      },
      {
        titre: "Pick your stack",
        description:
          "Platforms, languages, frameworks and engines. The catalog automatically filters compatible options.",
      },
      {
        titre: "Configure the architecture",
        description:
          "Database, hosting, third-party services, architecture options: monolith or microservices, SPA or SSR…",
      },
      {
        titre: "Generate your roadmap",
        description:
          "16 detailed phases, from ideation to maintenance: checklist, pitfalls to avoid, tips and official resources.",
      },
    ],
    creer: {
      eyebrow: "// what you can build",
      titre: "Every project type has its own steps.",
      description:
        "Networking and dedicated server for multiplayer, signing and notarization for desktop, store submission for mobile — the roadmap adapts to your exact configuration.",
    },
    types: [
      { titre: "Video games", detail: "2D, 3D, mobile, web, multiplayer, VR/AR" },
      { titre: "Sites & web", detail: "Showcase, blog, e-commerce, SaaS, portfolio" },
      { titre: "Mobile apps", detail: "iOS, Android, cross-platform, PWA" },
      { titre: "Desktop apps", detail: "Windows, macOS, Linux, Tauri, Electron" },
      { titre: "Dev tools", detail: "CLI, libraries, VS Code extensions" },
      { titre: "AI & bots", detail: "Chatbots, NLP, vision, Discord/Telegram bots" },
    ],
    fonctionnalites: {
      eyebrow: "// features",
      titre: "Built to ship, not to configure a tool.",
      items: [
        {
          titre: "Lightweight",
          chiffre: "< 10 MB",
          description:
            "Under 10 MB installed thanks to Tauri. No heavy dependencies, no bloatware.",
        },
        {
          titre: "Fast",
          chiffre: "< 0.5 s",
          description:
            "Starts in under half a second. Instant roadmap generation, even offline.",
        },
        {
          titre: "Offline",
          chiffre: "100%",
          description:
            "100% local: no account, no server, no tracking. Your data stays with you.",
        },
        {
          titre: "Free",
          chiffre: "$0",
          description:
            "Free and open source. Export your projects as JSON, reimport them anywhere.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "// ready to code",
      titre: "Your next project deserves a real roadmap.",
      description:
        "Available on Windows, macOS and Linux. Zero account, zero server, zero subscription.",
      bouton: "Download vibeChitech",
    },
    mockup: {
      fenetre: "vibeChitech — Project: PC multiplayer game",
      stack: "unity · c# · windows · steam",
      projets: "My projects",
      recherche: "Search",
      parametres: "Settings",
      nouveau: "New project",
      phases: ["Ideation", "Specifications", "Design", "Stack selection", "Architecture"],
      etapes: [
        "Wireframes of key screens",
        "High-fidelity Figma mockups",
        "Design system and tokens",
      ],
      piege:
        "Pitfall: don't go into production without a validated network prototype — multiplayer sync changes the whole architecture.",
    },
  },
  telecharger: {
    meta: {
      titre: "Download",
      description:
        "Download vibeChitech for Windows (.msi), macOS (.dmg) or Linux (.AppImage, .deb). Under 10 MB.",
    },
    eyebrow: "// download",
    titre: "Download vibeChitech",
    sousTitre:
      "Free, open source, no account required. Pick your operating system — detection is automatic.",
    detectePrefixe: "Detected system:",
    detecteSuffixe: "is recommended, but all formats remain available below.",
    badgeDetecte: "Detected",
    bouton: "Download",
    basTexte: "All binaries are published on",
    basLien: "GitHub Releases",
    basSuffixe: "Under 10 MB, installs in seconds.",
  },
  fonctionnalites: {
    meta: {
      titre: "Features",
      description:
        "Conditional roadmap generation, full catalog, progress tracking, pitfalls and tips, search, JSON export — all 100% local.",
    },
    eyebrow: "// features",
    titre: "Tiny binary, big content.",
    sousTitre:
      "vibeChitech combines a stack configurator, a conditional roadmap generator and a tracking tool — in a tiny desktop app.",
    groupes: [
      {
        eyebrow: "// generation",
        titre: "A roadmap tailored to your exact stack",
        description:
          "The core of vibeChitech: truly personalized checklists, not generic templates.",
        items: [
          {
            titre: "16 complete phases",
            description:
              "From ideation to maintenance and marketing: specs, design, stack, architecture, front/back dev, database, security, testing, CI/CD, deployment, stores, monitoring.",
          },
          {
            titre: "Conditional steps",
            description:
              "Multiplayer game → networking and dedicated server. Tauri → signing and notarization. Vercel → serverless deployment. Stripe → payment webhooks.",
          },
          {
            titre: "Pitfalls and tips",
            description:
              "Each step lists classic mistakes (info/warning/danger severity) and practical field-tested advice, not genericities.",
          },
          {
            titre: "Progress tracking",
            description:
              "Check off steps, track progress per phase and globally, add personal notes to each step.",
          },
        ],
      },
      {
        eyebrow: "// catalog",
        titre: "A browsable knowledge base",
        description: "The entire catalog ships inside the app, browsable offline.",
        items: [
          {
            titre: "30+ project types",
            description:
              "Games, sites, mobile and desktop apps, APIs, CLIs, bots, extensions, AI/ML, blockchain, IoT, automation…",
          },
          {
            titre: "60+ frameworks and services",
            description:
              "Frontend, mobile, desktop, game engines, backend, databases, hosting, auth, payments, monitoring, CMS — with compatibilities.",
          },
          {
            titre: "Instant search",
            description:
              "Fuzzy search (Fuse.js) across the catalog and your own projects. Grouped, relevant results.",
          },
        ],
      },
      {
        eyebrow: "// local & light",
        titre: "Your data belongs to you",
        description:
          "No account, no cloud, no server. Everything lives in a JSON file on your machine.",
        items: [
          {
            titre: "Under 10 MB",
            description:
              "Built on Tauri v2: a tiny native binary where Electron would bundle all of Chromium.",
          },
          {
            titre: "Starts < 0.5 s",
            description:
              "The app opens instantly and roadmap generation has no network latency.",
          },
          {
            titre: "100% offline",
            description:
              "Everything works without a connection: catalog, generation, tracking. Perfect on a train or on the go.",
          },
          {
            titre: "JSON export / import",
            description:
              "Your projects live in a simple local JSON file. Export, back up, version or share it freely.",
          },
          {
            titre: "Official resources",
            description:
              "Every step links to the official documentation of the relevant tool — no dead links or shady blogs.",
          },
          {
            titre: "Free and open source",
            description:
              "Download binaries from GitHub Releases or build from source. No license, no subscription.",
          },
        ],
      },
    ],
    cta: "Try vibeChitech",
  },
  catalogue: {
    meta: {
      titre: "Catalog",
      description:
        "The catalog embedded in vibeChitech: project types, languages, frameworks, databases, hosting, third-party services and architecture options.",
    },
    eyebrow: "// catalog",
    titre: "entries, zero connection.",
    sousTitre:
      "embedded in the app: project types, languages, frameworks, databases, hosting, services and architecture options. Each entry carries its compatibilities to guide your choices.",
    categories: {
      "types-projet": {
        nom: "Project types",
        description: "30+ types covered, from video games to IoT.",
      },
      langages: {
        nom: "Languages",
        description: "25 supported languages.",
      },
      frameworks: {
        nom: "Frameworks & tools",
        description: "60+ frameworks and services, organized by category.",
      },
      "bases-de-donnees": {
        nom: "Databases",
        description: "SQL, NoSQL, cache and BaaS.",
      },
      hebergements: {
        nom: "Hosting",
        description: "Deployment platforms and clouds.",
      },
      "services-tiers": {
        nom: "Third-party services",
        description: "Auth, payments, storage, monitoring, analytics, email, CMS…",
      },
      ecosysteme: {
        nom: "Ecosystem tools",
        description: "State, styling, testing and realtime.",
      },
      architecture: {
        nom: "Architecture options",
        description: "The structural choices that adapt the generated roadmap.",
      },
    },
    noteBas:
      "The full catalog with descriptions, icons and compatibilities is browsable in the desktop app.",
  },
  docs: {
    meta: {
      titre: "Documentation",
      description:
        "vibeChitech user guide: installation, project creation, roadmap generation, tracking and data export.",
    },
    eyebrow: "// documentation",
    titre: "User guide",
    sousTitre:
      "Everything you need to install vibeChitech and generate your first roadmap.",
    sections: [
      {
        titre: "Installation",
        contenu: [
          "Download the binary for your system from the Download page or GitHub Releases: .msi (Windows), .dmg (macOS), .AppImage or .deb (Linux).",
          "On macOS, open the .dmg and drag vibeChitech into Applications. If Gatekeeper blocks launch, right-click → Open.",
          "On Windows, run the .msi and follow the wizard. On Linux, make the .AppImage executable (chmod +x) and run it.",
          "No account required: the app works immediately, offline.",
        ],
      },
      {
        titre: "Create a project",
        contenu: [
          "From the home screen, click \"New project\" to launch the 6-step wizard.",
          "Step 1: give your project a name and description.",
          "Step 2: choose the project type (game, website, mobile app, API, CLI…).",
          "Step 3: select target platforms (Windows, web, iOS…).",
          "Step 4: pick languages — the catalog then filters compatible frameworks.",
          "Step 5: select frameworks, engines and tools.",
          "Step 6: configure architecture — database, hosting, third-party services (auth, payments…) and options (monolith, SSR, offline-first…).",
          "Click \"Generate roadmap\": the app assembles a personalized checklist from the 16 model phases.",
        ],
      },
      {
        titre: "Track your roadmap",
        contenu: [
          "The roadmap is organized into collapsible phases (accordion), from ideation to maintenance.",
          "Click a step to open its sheet: goal, detailed explanation, \"to do\" subtasks, classic pitfalls, tips and links to official docs.",
          "Pitfalls are color-coded by severity: blue (info), orange (warning), red (danger).",
          "Check a step when done: progress updates per phase and globally.",
          "Add personal notes to each step to keep your decisions and lessons learned.",
        ],
      },
      {
        titre: "Catalog and search",
        contenu: [
          "The Catalog tab lists all referenced project types, languages, frameworks and services, filterable by category.",
          "The Search tab runs a fuzzy search (Fuse.js) across the catalog and your projects: find a step, a pitfall or a tech in a few keystrokes.",
        ],
      },
      {
        titre: "Data and export",
        contenu: [
          "All data is stored locally in a JSON file (vibechitech.json) via tauri-plugin-store.",
          "In Settings, export this file to back up or transfer your projects, and reimport it on another machine.",
          "No data leaves your machine: no auth, no cloud, no telemetry.",
        ],
      },
      {
        titre: "Settings",
        contenu: [
          "Theme: light, dark or synced with the system.",
          "Interface language.",
          "Reset: wipes projects and starts fresh (export recommended first).",
        ],
      },
    ],
    aide: "A question or a bug? Open an issue on",
    aideLien: "GitHub",
    aideOu: ", or",
    aideTelecharger: "download the app",
    aideFin: "to get started.",
    version: "Guide based on vibeChitech v0.1.0",
  },
  nonTrouve: {
    titre: "Page not found",
    description: "This page doesn't exist or has been moved.",
    retour: "Back to home",
  },
};

export default en;
