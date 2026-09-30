// Aperçu du catalogue embarqué dans l'app desktop.
// La version complète (avec descriptions, icônes et compatibilités)
// vit dans app/src/data/catalogue.json.

export type CategorieCatalogue = {
  id: string;
  nom: string;
  description: string;
  elements: string[];
};

export const catalogueApercu: CategorieCatalogue[] = [
  {
    id: "types-projet",
    nom: "Types de projet",
    description: "Plus de 30 types couverts, du jeu vidéo à l'IoT.",
    elements: [
      "Jeu 2D", "Jeu 3D", "Jeu mobile", "Jeu web", "Jeu multijoueur", "Jeu VR/AR",
      "Site vitrine", "Blog", "E-commerce", "Portfolio", "SaaS", "Documentation",
      "Dashboard", "Outil interne", "Réseau social", "Marketplace",
      "App iOS", "App Android", "App cross-platform", "PWA",
      "App Windows", "App macOS", "App Linux", "App desktop cross-platform",
      "API REST", "API GraphQL", "API temps réel", "Microservices",
      "CLI", "Bibliothèque", "Bot Discord", "Bot Telegram", "Bot Slack",
      "Extension navigateur", "Extension VS Code", "Extension Figma",
      "IA / ML", "Chatbot", "Vision", "NLP", "Recommandation",
      "Blockchain", "Smart contract", "DApp", "NFT",
      "IoT", "Embarqué Arduino", "Raspberry Pi", "ESP32",
      "Automation", "Scraping", "Workflow",
    ],
  },
  {
    id: "langages",
    nom: "Langages",
    description: "25 langages pris en charge.",
    elements: [
      "TypeScript", "JavaScript", "Python", "Rust", "Go", "Java", "Kotlin",
      "Swift", "C", "C++", "C#", "Dart", "Ruby", "PHP", "Lua", "Elixir",
      "Scala", "Haskell", "Zig", "Nim", "R", "Julia", "Bash", "SQL", "Solidity",
    ],
  },
  {
    id: "frameworks",
    nom: "Frameworks & outils",
    description: "Plus de 60 frameworks et services référencés, par catégorie.",
    elements: [
      "React", "Vue", "Svelte", "Solid", "Qwik", "Angular", "Astro",
      "Next.js", "Nuxt", "SvelteKit", "Remix",
      "React Native", "Flutter", "SwiftUI", "Jetpack Compose", "Ionic",
      ".NET MAUI", "NativeScript",
      "Tauri", "Electron", "Flutter Desktop", "Qt", "Wails",
      "Unity", "Unreal", "Godot", "Bevy", "Phaser", "Three.js",
      "Babylon.js", "PlayCanvas", "LÖVE", "libGDX",
      "Express", "Fastify", "NestJS", "Hono", "Django", "Flask", "FastAPI",
      "Laravel", "Rails", "Spring Boot", "Gin", "Fiber", "Axum", "Actix",
    ],
  },
  {
    id: "bases-de-donnees",
    nom: "Bases de données",
    description: "SQL, NoSQL, cache et BaaS.",
    elements: [
      "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Cassandra",
      "DynamoDB", "Firestore", "Supabase", "PlanetScale", "Neo4j",
    ],
  },
  {
    id: "hebergements",
    nom: "Hébergement",
    description: "Plateformes de déploiement et clouds.",
    elements: [
      "Vercel", "Netlify", "Cloudflare Pages", "Railway", "Render", "Fly.io",
      "AWS", "GCP", "Azure", "Hetzner", "OVH", "DigitalOcean",
    ],
  },
  {
    id: "services-tiers",
    nom: "Services tiers",
    description: "Auth, paiement, stockage, monitoring, analytics, email, CMS…",
    elements: [
      "Auth0", "Clerk", "Supabase Auth", "Firebase Auth", "NextAuth",
      "Keycloak", "Better Auth",
      "Stripe", "PayPal", "LemonSqueezy", "Paddle", "RevenueCat",
      "S3", "Cloudinary", "UploadThing", "Supabase Storage", "R2",
      "GitHub Actions", "GitLab CI", "CircleCI", "Jenkins",
      "Sentry", "LogRocket", "Datadog", "New Relic", "Better Stack",
      "Plausible", "Umami", "PostHog", "Mixpanel", "Google Analytics",
      "Socket.io", "Pusher", "Ably", "Supabase Realtime",
      "RabbitMQ", "Kafka", "BullMQ",
      "Algolia", "Meilisearch", "Typesense", "Elasticsearch",
      "Resend", "SendGrid", "Postmark", "Mailgun",
      "Sanity", "Contentful", "Strapi", "Payload", "Directus",
    ],
  },
  {
    id: "assistants-ia",
    nom: "Assistants IA de code",
    description:
      "Le recensement le plus complet des IA de code : agents, extensions, CLI et générateurs d'apps.",
    elements: [
      "Claude Code", "GitHub Copilot", "Cursor", "Windsurf", "Devin",
      "Cline", "Roo Code", "Kilo Code", "Continue", "Sourcegraph Cody",
      "OpenAI Codex", "Jules", "OpenCode", "Crush", "Gemini CLI",
      "Qwen Code", "Aider", "Mentat",
      "Zed", "Trae", "Void", "PearAI", "Firebase Studio",
      "Amazon Q Developer", "Gemini Code Assist", "JetBrains AI / Junie",
      "Tabnine", "Supermaven", "CodeGeeX",
      "v0", "Bolt.new", "Lovable", "Replit Agent", "GitHub Spark",
      "CodeRabbit", "Greptile", "Sourcery", "Korbit",
      "Phind", "Blackbox AI", "Tabby", "FauxPilot",
    ],
  },
  {
    id: "ecosysteme",
    nom: "Outils d'écosystème",
    description: "État, styling, tests et temps réel.",
    elements: [
      "Redux", "Zustand", "Jotai", "MobX", "Pinia", "Vuex", "XState",
      "Tailwind", "CSS Modules", "Styled Components", "Emotion", "Sass",
      "Vanilla Extract",
      "Jest", "Vitest", "Playwright", "Cypress", "Pytest", "PHPUnit",
    ],
  },
  {
    id: "architecture",
    nom: "Options d'architecture",
    description: "Les choix structurants qui adaptent la roadmap générée.",
    elements: [
      "Monolithe", "Microservices", "Serverless", "JAMstack",
      "SPA", "SSR", "SSG", "ISR",
      "REST", "GraphQL", "gRPC", "tRPC",
      "SQL", "NoSQL", "Hybride",
      "Auth requise", "Publique", "Mixte",
      "Multi-tenant", "Single-tenant",
      "i18n", "Mono-langue",
      "PWA", "Native", "Hybride",
      "Offline-first", "Online-only",
      "Desktop-first", "Mobile-first",
    ],
  },
];
