const fr = {
  meta: {
    titre: "vibeChitech — Configurateur de projet & générateur de roadmap",
    description:
      "Configure ton projet (type, plateforme, langage, framework, architecture) et génère automatiquement une checklist complète de toutes les étapes, du brainstorming au déploiement. 100 % local, gratuit, léger.",
  },
  nav: {
    fonctionnalites: "Fonctionnalités",
    catalogue: "Catalogue",
    docs: "Docs",
    telecharger: "Télécharger",
    langue: "Langue",
  },
  footer: {
    slogan:
      "Configurateur de projet et générateur de roadmap. 100 % local, gratuit, open source.",
    produit: "Produit",
    ressources: "Ressources",
    documentation: "Documentation",
    copyright: "© 2026 vibeChitech — fait pour les devs, par un dev.",
  },
  accueil: {
    badge: "v0.1.0 — gratuit, open source, 100 % local",
    titreA: "De l'idée au déploiement,",
    titreB: "une roadmap claire.",
    sousTitre:
      "Configure ton projet — type, plateforme, langage, framework, architecture — et vibeChitech génère la checklist complète de toutes les étapes à suivre.",
    ctaTelecharger: "Télécharger gratuitement",
    ctaCatalogue: "Explorer le catalogue",
    plateformes: "windows · macos · linux — moins de 10 mo",
    commentCaMarche: {
      eyebrow: "// comment ça marche",
      titre: "Un assistant en 6 étapes, une roadmap sur mesure.",
    },
    etapes: [
      {
        titre: "Décris ton projet",
        description:
          "Nom, description, type de projet : jeu, site web, app mobile, API, CLI, extension… plus de 30 types pris en charge.",
      },
      {
        titre: "Choisis ta stack",
        description:
          "Plateformes, langages, frameworks et moteurs. Le catalogue filtre automatiquement les options compatibles.",
      },
      {
        titre: "Configure l'architecture",
        description:
          "Base de données, hébergement, services tiers, options d'architecture : monolithe ou microservices, SPA ou SSR…",
      },
      {
        titre: "Génère ta roadmap",
        description:
          "16 phases détaillées, de l'idéation à la maintenance : checklist, pièges à éviter, astuces et ressources officielles.",
      },
    ],
    creer: {
      eyebrow: "// ce que tu peux créer",
      titre: "Chaque type de projet a ses propres étapes.",
      description:
        "Réseau et serveur dédié pour le multijoueur, signature et notarisation pour le desktop, soumission aux stores pour le mobile — la roadmap s'adapte à ta configuration exacte.",
    },
    types: [
      { titre: "Jeux vidéo", detail: "2D, 3D, mobile, web, multijoueur, VR/AR" },
      { titre: "Sites & web", detail: "Vitrine, blog, e-commerce, SaaS, portfolio" },
      { titre: "Apps mobiles", detail: "iOS, Android, cross-platform, PWA" },
      { titre: "Apps desktop", detail: "Windows, macOS, Linux, Tauri, Electron" },
      { titre: "Outils dev", detail: "CLI, bibliothèques, extensions VS Code" },
      { titre: "IA & bots", detail: "Chatbots, NLP, vision, bots Discord/Telegram" },
    ],
    fonctionnalites: {
      eyebrow: "// fonctionnalités",
      titre: "Pensé pour passer à l'action, pas configurer un outil.",
      items: [
        {
          titre: "Léger",
          chiffre: "< 10 Mo",
          description:
            "Moins de 10 Mo installé grâce à Tauri. Aucune dépendance lourde, aucun bloatware.",
        },
        {
          titre: "Rapide",
          chiffre: "< 0,5 s",
          description:
            "Démarrage en moins de 0,5 seconde. Génération de roadmap instantanée, même offline.",
        },
        {
          titre: "Hors-ligne",
          chiffre: "100 %",
          description:
            "100 % local : aucun compte, aucun serveur, aucun tracking. Tes données restent chez toi.",
        },
        {
          titre: "Gratuit",
          chiffre: "0 €",
          description:
            "Gratuit et open source. Exporte tes projets en JSON, réimporte-les où tu veux.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "// prêt à coder",
      titre: "Ton prochain projet mérite une vraie roadmap.",
      description:
        "Disponible sur Windows, macOS et Linux. Zéro compte, zéro serveur, zéro abonnement.",
      bouton: "Télécharger vibeChitech",
    },
    mockup: {
      fenetre: "vibeChitech — Projet : Jeu multijoueur PC",
      stack: "unity · c# · windows · steam",
      projets: "Mes projets",
      recherche: "Recherche",
      parametres: "Paramètres",
      nouveau: "Nouveau projet",
      phases: ["Idéation", "Cahier des charges", "Design", "Choix de la stack", "Architecture"],
      etapes: [
        "Wireframes des écrans clés",
        "Maquettes Figma haute fidélité",
        "Charte graphique et design tokens",
      ],
      piege:
        "Piège : ne pars pas en production sans un prototype réseau validé — la synchro multijoueur change toute l'architecture.",
    },
  },
  telecharger: {
    meta: {
      titre: "Télécharger",
      description:
        "Télécharge vibeChitech pour Windows (.msi), macOS (.dmg) ou Linux (.AppImage, .deb). Moins de 10 Mo.",
    },
    eyebrow: "// télécharger",
    titre: "Télécharger vibeChitech",
    sousTitre:
      "Gratuit, open source, aucun compte requis. Choisis ton système d'exploitation — la détection est automatique.",
    detectePrefixe: "Système détecté :",
    detecteSuffixe:
      "est recommandé, mais tous les formats restent disponibles ci-dessous.",
    badgeDetecte: "Détecté",
    bouton: "Télécharger",
    basTexte: "Tous les binaires sont publiés sur",
    basLien: "GitHub Releases",
    basSuffixe: "Moins de 10 Mo, installation en quelques secondes.",
    macosAstuce: "macOS signale l'app « endommagée » ? Dans le Terminal :",
  },
  fonctionnalites: {
    meta: {
      titre: "Fonctionnalités",
      description:
        "Génération de roadmap conditionnelle, catalogue complet, suivi de progression, pièges et astuces, recherche, export JSON — le tout 100 % local.",
    },
    eyebrow: "// fonctionnalités",
    titre: "Petit binaire, gros contenu.",
    sousTitre:
      "vibeChitech combine un configurateur de stack, un générateur de roadmap conditionnelle et un outil de suivi — dans une app desktop minuscule.",
    groupes: [
      {
        eyebrow: "// génération",
        titre: "Une roadmap adaptée à ta stack exacte",
        description:
          "Le cœur de vibeChitech : des checklists réellement personnalisées, pas des templates génériques.",
        items: [
          {
            titre: "16 phases complètes",
            description:
              "De l'idéation à la maintenance et au marketing : cahier des charges, design, stack, architecture, dev front/back, BDD, sécurité, tests, CI/CD, déploiement, stores, monitoring.",
          },
          {
            titre: "Étapes conditionnelles",
            description:
              "Jeu multijoueur → réseau et serveur dédié. Tauri → signature et notarisation. Vercel → déploiement serverless. Stripe → webhooks de paiement.",
          },
          {
            titre: "Pièges et astuces",
            description:
              "Chaque étape liste les erreurs classiques (gravité info/attention/danger) et des conseils pratiques issus du terrain, pas des généralités.",
          },
          {
            titre: "Suivi de progression",
            description:
              "Coche les étapes, suis ta progression par phase et globalement, ajoute des notes personnelles sur chaque étape.",
          },
        ],
      },
      {
        eyebrow: "// catalogue",
        titre: "Une base de connaissances navigable",
        description: "Tout le catalogue est embarqué dans l'app, consultable hors-ligne.",
        items: [
          {
            titre: "30+ types de projet",
            description:
              "Jeux, sites, apps mobiles et desktop, APIs, CLIs, bots, extensions, IA/ML, blockchain, IoT, automation…",
          },
          {
            titre: "60+ frameworks et services",
            description:
              "Frontend, mobile, desktop, moteurs de jeu, backend, BDD, hébergement, auth, paiement, monitoring, CMS — avec leurs compatibilités.",
          },
          {
            titre: "Recherche instantanée",
            description:
              "Recherche floue (Fuse.js) dans le catalogue et dans tes propres projets. Résultats groupés et pertinents.",
          },
        ],
      },
      {
        eyebrow: "// local & léger",
        titre: "Tes données t'appartiennent",
        description:
          "Aucun compte, aucun cloud, aucun serveur. Tout vit dans un fichier JSON chez toi.",
        items: [
          {
            titre: "Moins de 10 Mo",
            description:
              "Construit sur Tauri v2 : un binaire natif minuscule là où Electron embarque tout Chromium.",
          },
          {
            titre: "Démarrage < 0,5 s",
            description:
              "L'app s'ouvre instantanément et la roadmap se génère sans latence réseau.",
          },
          {
            titre: "100 % hors-ligne",
            description:
              "Tout fonctionne sans connexion : catalogue, génération, suivi. Idéal dans le train ou en déplacement.",
          },
          {
            titre: "Export / import JSON",
            description:
              "Tes projets vivent dans un simple fichier JSON local. Exporte, sauvegarde, versionne ou partage-le librement.",
          },
          {
            titre: "Ressources officielles",
            description:
              "Chaque étape pointe vers la documentation officielle de l'outil concerné — pas de liens morts ni de blogs douteux.",
          },
          {
            titre: "Gratuit et open source",
            description:
              "Télécharge les binaires sur GitHub Releases ou compile depuis les sources. Aucune licence, aucun abonnement.",
          },
        ],
      },
    ],
    cta: "Essayer vibeChitech",
  },
  catalogue: {
    meta: {
      titre: "Catalogue",
      description:
        "Le catalogue embarqué dans vibeChitech : types de projet, langages, frameworks, bases de données, hébergements, services tiers et options d'architecture.",
    },
    eyebrow: "// catalogue",
    titre: "entrées, zéro connexion.",
    sousTitre:
      "embarquées dans l'app : types de projet, langages, frameworks, bases de données, hébergements, services et options d'architecture. Chaque entrée porte ses compatibilités pour guider tes choix.",
    categories: {
      "types-projet": {
        nom: "Types de projet",
        description: "Plus de 30 types couverts, du jeu vidéo à l'IoT.",
      },
      langages: {
        nom: "Langages",
        description: "25 langages pris en charge.",
      },
      frameworks: {
        nom: "Frameworks & outils",
        description: "Plus de 60 frameworks et services référencés, par catégorie.",
      },
      "bases-de-donnees": {
        nom: "Bases de données",
        description: "SQL, NoSQL, cache et BaaS.",
      },
      hebergements: {
        nom: "Hébergement",
        description: "Plateformes de déploiement et clouds.",
      },
      "services-tiers": {
        nom: "Services tiers",
        description: "Auth, paiement, stockage, monitoring, analytics, email, CMS…",
      },
      ecosysteme: {
        nom: "Outils d'écosystème",
        description: "État, styling, tests et temps réel.",
      },
      architecture: {
        nom: "Options d'architecture",
        description: "Les choix structurants qui adaptent la roadmap générée.",
      },
    } as Record<string, { nom: string; description: string }>,
    noteBas:
      "Le catalogue complet avec descriptions, icônes et compatibilités est consultable dans l'application desktop.",
  },
  docs: {
    meta: {
      titre: "Documentation",
      description:
        "Guide d'utilisation de vibeChitech : installation, création de projet, génération de roadmap, suivi et export des données.",
    },
    eyebrow: "// documentation",
    titre: "Guide d'utilisation",
    sousTitre:
      "Tout ce qu'il faut pour installer vibeChitech et générer ta première roadmap.",
    sections: [
      {
        titre: "Installation",
        contenu: [
          "Télécharge le binaire adapté à ton système depuis la page Télécharger ou GitHub Releases : .msi (Windows), .dmg (macOS), .AppImage ou .deb (Linux).",
          "Sous macOS, ouvre le .dmg et glisse vibeChitech dans Applications. Si macOS signale l'app « endommagée », lance `xattr -cr /Applications/vibeChitech.app` dans le Terminal.",
          "Sous Windows, lance le .msi et suis l'assistant. Sous Linux, rends le .AppImage exécutable (chmod +x) puis lance-le.",
          "Aucun compte n'est requis : l'app fonctionne immédiatement, hors-ligne.",
        ],
      },
      {
        titre: "Créer un projet",
        contenu: [
          "Depuis l'accueil, clique sur « Nouveau projet » pour lancer l'assistant en 6 étapes.",
          "Étape 1 : donne un nom et une description à ton projet.",
          "Étape 2 : choisis le type de projet (jeu, site web, app mobile, API, CLI…).",
          "Étape 3 : sélectionne les plateformes cibles (Windows, web, iOS…).",
          "Étape 4 : choisis les langages — le catalogue filtre ensuite les frameworks compatibles.",
          "Étape 5 : sélectionne frameworks, moteurs et outils.",
          "Étape 6 : configure l'architecture — base de données, hébergement, services tiers (auth, paiement…) et options (monolithe, SSR, offline-first…).",
          "Clique sur « Générer la roadmap » : l'app assemble une checklist personnalisée à partir des 16 phases du modèle.",
        ],
      },
      {
        titre: "Suivre sa roadmap",
        contenu: [
          "La roadmap est organisée en phases dépliables (accordéon), de l'idéation à la maintenance.",
          "Clique sur une étape pour ouvrir sa fiche : objectif, explication détaillée, sous-tâches « à faire », pièges classiques, astuces et liens vers les docs officielles.",
          "Les pièges sont colorés selon leur gravité : bleu (info), orange (attention), rouge (danger).",
          "Coche une étape quand elle est terminée : la progression se met à jour par phase et globalement.",
          "Ajoute des notes personnelles sur chaque étape pour garder tes décisions et retours d'expérience.",
        ],
      },
      {
        titre: "Catalogue et recherche",
        contenu: [
          "L'onglet Catalogue liste tous les types de projet, langages, frameworks et services référencés, filtrables par catégorie.",
          "L'onglet Recherche lance une recherche floue (Fuse.js) dans le catalogue et dans tes projets : retrouve une étape, un piège ou une techno en quelques frappes.",
        ],
      },
      {
        titre: "Données et export",
        contenu: [
          "Toutes les données sont stockées localement dans un fichier JSON (vibechitech.json) via tauri-plugin-store.",
          "Dans Paramètres, exporte ce fichier pour sauvegarder ou transférer tes projets, et réimporte-le sur une autre machine.",
          "Aucune donnée ne quitte ta machine : pas d'auth, pas de cloud, pas de télémétrie.",
        ],
      },
      {
        titre: "Paramètres",
        contenu: [
          "Thème : clair, sombre ou synchronisé sur le système.",
          "Langue de l'interface.",
          "Réinitialisation : efface les projets et repart d'une installation propre (export conseillé avant).",
        ],
      },
    ],
    aide: "Une question ou un bug ? Ouvre une issue sur",
    aideLien: "GitHub",
    aideOu: ", ou",
    aideTelecharger: "télécharge l'app",
    aideFin: "pour commencer.",
    version: "Guide basé sur vibeChitech v0.1.0",
  },
  nonTrouve: {
    titre: "Page introuvable",
    description: "Cette page n'existe pas ou a été déplacée.",
    retour: "Retour à l'accueil",
  },
};

export default fr;
export type Dictionnaire = typeof fr;
