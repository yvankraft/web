import type { Dictionnaire } from "./fr";

const de: Dictionnaire = {
  meta: {
    titre: "vibeChitech — Projekt-Konfigurator & Roadmap-Generator",
    description:
      "Konfiguriere dein Projekt (Typ, Plattform, Sprache, Framework, Architektur) und generiere automatisch eine vollständige Checkliste aller Schritte, vom Brainstorming bis zum Deployment. 100 % lokal, kostenlos, leichtgewichtig.",
  },
  nav: {
    fonctionnalites: "Funktionen",
    catalogue: "Katalog",
    docs: "Docs",
    telecharger: "Herunterladen",
    langue: "Sprache",
  },
  footer: {
    slogan:
      "Projekt-Konfigurator und Roadmap-Generator. 100 % lokal, kostenlos, open source.",
    produit: "Produkt",
    ressources: "Ressourcen",
    documentation: "Dokumentation",
    copyright: "© 2026 vibeChitech — von einem Dev für Devs.",
  },
  accueil: {
    badge: "v0.1.0 — kostenlos, open source, 100 % lokal",
    titreA: "Von der Idee bis zum Deployment,",
    titreB: "eine klare Roadmap.",
    sousTitre:
      "Konfiguriere dein Projekt — Typ, Plattform, Sprache, Framework, Architektur — und vibeChitech generiert die komplette Checkliste aller Schritte.",
    ctaTelecharger: "Kostenlos herunterladen",
    ctaCatalogue: "Katalog erkunden",
    plateformes: "windows · macos · linux — unter 10 MB",
    commentCaMarche: {
      eyebrow: "// so funktioniert's",
      titre: "Ein Assistent in 6 Schritten, eine maßgeschneiderte Roadmap.",
    },
    etapes: [
      {
        titre: "Beschreibe dein Projekt",
        description:
          "Name, Beschreibung, Projekttyp: Spiel, Website, Mobile-App, API, CLI, Extension… über 30 Typen werden unterstützt.",
      },
      {
        titre: "Wähle deinen Stack",
        description:
          "Plattformen, Sprachen, Frameworks und Engines. Der Katalog filtert automatisch kompatible Optionen.",
      },
      {
        titre: "Konfiguriere die Architektur",
        description:
          "Datenbank, Hosting, Drittanbieter-Dienste, Architektur-Optionen: Monolith oder Microservices, SPA oder SSR…",
      },
      {
        titre: "Generiere deine Roadmap",
        description:
          "16 detaillierte Phasen, von der Ideation bis zur Wartung: Checkliste, Fallstricke, Tipps und offizielle Ressourcen.",
      },
    ],
    creer: {
      eyebrow: "// was du bauen kannst",
      titre: "Jeder Projekttyp hat seine eigenen Schritte.",
      description:
        "Netzwerk und Dedicated Server für Multiplayer, Signierung und Notarisierung für Desktop, Store-Einreichung für Mobile — die Roadmap passt sich deiner exakten Konfiguration an.",
    },
    types: [
      { titre: "Videospiele", detail: "2D, 3D, Mobile, Web, Multiplayer, VR/AR" },
      { titre: "Webseiten", detail: "Showcase, Blog, E-Commerce, SaaS, Portfolio" },
      { titre: "Mobile Apps", detail: "iOS, Android, Cross-Platform, PWA" },
      { titre: "Desktop-Apps", detail: "Windows, macOS, Linux, Tauri, Electron" },
      { titre: "Dev-Tools", detail: "CLI, Bibliotheken, VS-Code-Extensions" },
      { titre: "KI & Bots", detail: "Chatbots, NLP, Vision, Discord/Telegram-Bots" },
    ],
    fonctionnalites: {
      eyebrow: "// funktionen",
      titre: "Gebaut zum Ausliefern, nicht zum Konfigurieren.",
      items: [
        {
          titre: "Leicht",
          chiffre: "< 10 MB",
          description:
            "Weniger als 10 MB installiert dank Tauri. Keine schweren Abhängigkeiten, kein Bloatware.",
        },
        {
          titre: "Schnell",
          chiffre: "< 0,5 s",
          description:
            "Startet in unter einer halben Sekunde. Sofortige Roadmap-Generierung, auch offline.",
        },
        {
          titre: "Offline",
          chiffre: "100 %",
          description:
            "100 % lokal: kein Konto, kein Server, kein Tracking. Deine Daten bleiben bei dir.",
        },
        {
          titre: "Kostenlos",
          chiffre: "0 €",
          description:
            "Kostenlos und open source. Exportiere deine Projekte als JSON und importiere sie überall.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "// bereit zum coden",
      titre: "Dein nächstes Projekt verdient eine echte Roadmap.",
      description:
        "Verfügbar für Windows, macOS und Linux. Kein Konto, kein Server, kein Abo.",
      bouton: "vibeChitech herunterladen",
    },
    mockup: {
      fenetre: "vibeChitech — Projekt: PC-Multiplayer-Spiel",
      stack: "unity · c# · windows · steam",
      projets: "Meine Projekte",
      recherche: "Suche",
      parametres: "Einstellungen",
      nouveau: "Neues Projekt",
      phases: ["Ideation", "Pflichtenheft", "Design", "Stack-Auswahl", "Architektur"],
      etapes: [
        "Wireframes der Schlüssel-Screens",
        "High-Fidelity-Figma-Mockups",
        "Design-System und Tokens",
      ],
      piege:
        "Fallstrick: Geh nicht in Produktion ohne validierten Netzwerk-Prototyp — Multiplayer-Sync verändert die ganze Architektur.",
    },
  },
  telecharger: {
    meta: {
      titre: "Herunterladen",
      description:
        "Lade vibeChitech für Windows (.msi), macOS (.dmg) oder Linux (.AppImage, .deb) herunter. Unter 10 MB.",
    },
    eyebrow: "// herunterladen",
    titre: "vibeChitech herunterladen",
    sousTitre:
      "Kostenlos, open source, kein Konto erforderlich. Wähle dein Betriebssystem — die Erkennung ist automatisch.",
    detectePrefixe: "Erkanntes System:",
    detecteSuffixe: "wird empfohlen, aber alle Formate bleiben unten verfügbar.",
    badgeDetecte: "Erkannt",
    bouton: "Herunterladen",
    basTexte: "Alle Binaries werden auf",
    basLien: "GitHub Releases",
    basSuffixe: "veröffentlicht. Unter 10 MB, Installation in Sekunden.",
  },
  fonctionnalites: {
    meta: {
      titre: "Funktionen",
      description:
        "Bedingte Roadmap-Generierung, vollständiger Katalog, Fortschrittsverfolgung, Fallstricke und Tipps, Suche, JSON-Export — alles 100 % lokal.",
    },
    eyebrow: "// funktionen",
    titre: "Kleines Binary, großer Inhalt.",
    sousTitre:
      "vibeChitech kombiniert einen Stack-Konfigurator, einen bedingten Roadmap-Generator und ein Tracking-Tool — in einer winzigen Desktop-App.",
    groupes: [
      {
        eyebrow: "// generierung",
        titre: "Eine Roadmap, exakt auf deinen Stack zugeschnitten",
        description:
          "Der Kern von vibeChitech: wirklich personalisierte Checklisten, keine generischen Templates.",
        items: [
          {
            titre: "16 vollständige Phasen",
            description:
              "Von der Ideation bis zu Wartung und Marketing: Pflichtenheft, Design, Stack, Architektur, Front-/Back-Dev, Datenbank, Sicherheit, Tests, CI/CD, Deployment, Stores, Monitoring.",
          },
          {
            titre: "Bedingte Schritte",
            description:
              "Multiplayer-Spiel → Netzwerk und Dedicated Server. Tauri → Signierung und Notarisierung. Vercel → Serverless-Deployment. Stripe → Payment-Webhooks.",
          },
          {
            titre: "Fallstricke und Tipps",
            description:
              "Jeder Schritt listet klassische Fehler (Schweregrad info/warnung/gefahr) und praxiserprobte Ratschläge — keine Allgemeinplätze.",
          },
          {
            titre: "Fortschrittsverfolgung",
            description:
              "Hake Schritte ab, verfolge den Fortschritt pro Phase und global, füge persönliche Notizen zu jedem Schritt hinzu.",
          },
        ],
      },
      {
        eyebrow: "// katalog",
        titre: "Eine durchsuchbare Wissensbasis",
        description: "Der gesamte Katalog ist in der App enthalten, offline durchsuchbar.",
        items: [
          {
            titre: "30+ Projekttypen",
            description:
              "Spiele, Websites, Mobile- und Desktop-Apps, APIs, CLIs, Bots, Extensions, KI/ML, Blockchain, IoT, Automation…",
          },
          {
            titre: "60+ Frameworks und Dienste",
            description:
              "Frontend, Mobile, Desktop, Game-Engines, Backend, Datenbanken, Hosting, Auth, Payments, Monitoring, CMS — mit Kompatibilitäten.",
          },
          {
            titre: "Sofortige Suche",
            description:
              "Fuzzy-Suche (Fuse.js) im Katalog und in deinen eigenen Projekten. Gruppierte, relevante Ergebnisse.",
          },
        ],
      },
      {
        eyebrow: "// lokal & leicht",
        titre: "Deine Daten gehören dir",
        description:
          "Kein Konto, keine Cloud, kein Server. Alles liegt in einer JSON-Datei auf deinem Rechner.",
        items: [
          {
            titre: "Unter 10 MB",
            description:
              "Auf Tauri v2 gebaut: ein winziges natives Binary, wo Electron ganz Chromium mitliefern würde.",
          },
          {
            titre: "Start < 0,5 s",
            description:
              "Die App öffnet sofort und die Roadmap-Generierung hat keine Netzwerk-Latenz.",
          },
          {
            titre: "100 % offline",
            description:
              "Alles funktioniert ohne Verbindung: Katalog, Generierung, Tracking. Perfekt im Zug oder unterwegs.",
          },
          {
            titre: "JSON-Export / -Import",
            description:
              "Deine Projekte leben in einer einfachen lokalen JSON-Datei. Exportiere, sichere, versioniere oder teile sie frei.",
          },
          {
            titre: "Offizielle Ressourcen",
            description:
              "Jeder Schritt verlinkt auf die offizielle Dokumentation des jeweiligen Tools — keine toten Links oder dubiosen Blogs.",
          },
          {
            titre: "Kostenlos und open source",
            description:
              "Lade Binaries von GitHub Releases oder baue aus dem Quellcode. Keine Lizenz, kein Abo.",
          },
        ],
      },
    ],
    cta: "vibeChitech ausprobieren",
  },
  catalogue: {
    meta: {
      titre: "Katalog",
      description:
        "Der in vibeChitech eingebettete Katalog: Projekttypen, Sprachen, Frameworks, Datenbanken, Hosting, Drittanbieter-Dienste und Architektur-Optionen.",
    },
    eyebrow: "// katalog",
    titre: "Einträge, null Verbindung.",
    sousTitre:
      "in der App eingebettet: Projekttypen, Sprachen, Frameworks, Datenbanken, Hosting, Dienste und Architektur-Optionen. Jeder Eintrag trägt seine Kompatibilitäten.",
    categories: {
      "types-projet": {
        nom: "Projekttypen",
        description: "Über 30 Typen, vom Videospiel bis IoT.",
      },
      langages: {
        nom: "Sprachen",
        description: "25 unterstützte Sprachen.",
      },
      frameworks: {
        nom: "Frameworks & Tools",
        description: "Über 60 Frameworks und Dienste, nach Kategorie.",
      },
      "bases-de-donnees": {
        nom: "Datenbanken",
        description: "SQL, NoSQL, Cache und BaaS.",
      },
      hebergements: {
        nom: "Hosting",
        description: "Deployment-Plattformen und Clouds.",
      },
      "services-tiers": {
        nom: "Drittanbieter-Dienste",
        description: "Auth, Payments, Storage, Monitoring, Analytics, E-Mail, CMS…",
      },
      ecosysteme: {
        nom: "Ökosystem-Tools",
        description: "State, Styling, Testing und Realtime.",
      },
      architecture: {
        nom: "Architektur-Optionen",
        description: "Die strukturellen Entscheidungen, die die generierte Roadmap anpassen.",
      },
    },
    noteBas:
      "Der vollständige Katalog mit Beschreibungen, Icons und Kompatibilitäten ist in der Desktop-App einsehbar.",
  },
  docs: {
    meta: {
      titre: "Dokumentation",
      description:
        "vibeChitech-Benutzerhandbuch: Installation, Projekterstellung, Roadmap-Generierung, Tracking und Datenexport.",
    },
    eyebrow: "// dokumentation",
    titre: "Benutzerhandbuch",
    sousTitre:
      "Alles, was du brauchst, um vibeChitech zu installieren und deine erste Roadmap zu generieren.",
    sections: [
      {
        titre: "Installation",
        contenu: [
          "Lade das passende Binary für dein System von der Download-Seite oder GitHub Releases: .msi (Windows), .dmg (macOS), .AppImage oder .deb (Linux).",
          "Unter macOS öffne die .dmg und ziehe vibeChitech in Programme. Falls Gatekeeper den Start blockiert: Rechtsklick → Öffnen.",
          "Unter Windows starte die .msi und folge dem Assistenten. Unter Linux mache die .AppImage ausführbar (chmod +x) und starte sie.",
          "Kein Konto erforderlich: die App funktioniert sofort, offline.",
        ],
      },
      {
        titre: "Ein Projekt erstellen",
        contenu: [
          "Klicke auf der Startseite auf „Neues Projekt“, um den Assistenten in 6 Schritten zu starten.",
          "Schritt 1: Gib deinem Projekt einen Namen und eine Beschreibung.",
          "Schritt 2: Wähle den Projekttyp (Spiel, Website, Mobile-App, API, CLI…).",
          "Schritt 3: Wähle die Zielplattformen (Windows, Web, iOS…).",
          "Schritt 4: Wähle die Sprachen — der Katalog filtert dann kompatible Frameworks.",
          "Schritt 5: Wähle Frameworks, Engines und Tools.",
          "Schritt 6: Konfiguriere die Architektur — Datenbank, Hosting, Drittanbieter-Dienste (Auth, Payment…) und Optionen (Monolith, SSR, offline-first…).",
          "Klicke auf „Roadmap generieren“: die App stellt eine personalisierte Checkliste aus den 16 Modellphasen zusammen.",
        ],
      },
      {
        titre: "Deine Roadmap verfolgen",
        contenu: [
          "Die Roadmap ist in aufklappbare Phasen (Akkordeon) organisiert, von der Ideation bis zur Wartung.",
          "Klicke auf einen Schritt, um sein Sheet zu öffnen: Ziel, detaillierte Erklärung, „To-do“-Unteraufgaben, klassische Fallstricke, Tipps und Links zu offiziellen Docs.",
          "Fallstricke sind farbcodiert nach Schweregrad: blau (Info), orange (Warnung), rot (Gefahr).",
          "Hake einen Schritt ab, wenn er fertig ist: der Fortschritt aktualisiert sich pro Phase und global.",
          "Füge jedem Schritt persönliche Notizen hinzu, um Entscheidungen und Learnings festzuhalten.",
        ],
      },
      {
        titre: "Katalog und Suche",
        contenu: [
          "Der Tab „Katalog“ listet alle referenzierten Projekttypen, Sprachen, Frameworks und Dienste — filterbar nach Kategorie.",
          "Der Tab „Suche“ startet eine Fuzzy-Suche (Fuse.js) im Katalog und in deinen Projekten: finde einen Schritt, einen Fallstrick oder eine Technologie in wenigen Tastenanschlägen.",
        ],
      },
      {
        titre: "Daten und Export",
        contenu: [
          "Alle Daten werden lokal in einer JSON-Datei (vibechitech.json) via tauri-plugin-store gespeichert.",
          "Exportiere diese Datei in den Einstellungen, um deine Projekte zu sichern oder zu übertragen, und importiere sie auf einem anderen Rechner.",
          "Keine Daten verlassen deinen Rechner: kein Auth, keine Cloud, keine Telemetrie.",
        ],
      },
      {
        titre: "Einstellungen",
        contenu: [
          "Theme: hell, dunkel oder mit dem System synchronisiert.",
          "Sprache der Oberfläche.",
          "Zurücksetzen: löscht die Projekte und startet frisch (Export vorher empfohlen).",
        ],
      },
    ],
    aide: "Eine Frage oder ein Bug? Öffne ein Issue auf",
    aideLien: "GitHub",
    aideOu: ", oder",
    aideTelecharger: "lade die App herunter",
    aideFin: "um zu starten.",
    version: "Handbuch basierend auf vibeChitech v0.1.0",
  },
  nonTrouve: {
    titre: "Seite nicht gefunden",
    description: "Diese Seite existiert nicht oder wurde verschoben.",
    retour: "Zurück zur Startseite",
  },
};

export default de;
