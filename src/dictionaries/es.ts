import type { Dictionnaire } from "./fr";

const es: Dictionnaire = {
  meta: {
    titre: "vibeChitech — Configurador de proyectos y generador de roadmaps",
    description:
      "Configura tu proyecto (tipo, plataforma, lenguaje, framework, arquitectura) y genera automáticamente una checklist completa de todos los pasos, del brainstorming al despliegue. 100 % local, gratis, ligero.",
  },
  nav: {
    fonctionnalites: "Funciones",
    catalogue: "Catálogo",
    docs: "Docs",
    telecharger: "Descargar",
    langue: "Idioma",
  },
  footer: {
    slogan:
      "Configurador de proyectos y generador de roadmaps. 100 % local, gratis, open source.",
    produit: "Producto",
    ressources: "Recursos",
    documentation: "Documentación",
    copyright: "© 2026 vibeChitech — hecho para devs, por un dev.",
  },
  accueil: {
    badge: "v0.1.0 — gratis, open source, 100 % local",
    titreA: "De la idea al despliegue,",
    titreB: "una roadmap clara.",
    sousTitre:
      "Configura tu proyecto — tipo, plataforma, lenguaje, framework, arquitectura — y vibeChitech genera la checklist completa de todos los pasos a seguir.",
    ctaTelecharger: "Descargar gratis",
    ctaCatalogue: "Explorar el catálogo",
    plateformes: "windows · macos · linux — menos de 10 MB",
    commentCaMarche: {
      eyebrow: "// cómo funciona",
      titre: "Un asistente de 6 pasos, una roadmap a medida.",
    },
    etapes: [
      {
        titre: "Describe tu proyecto",
        description:
          "Nombre, descripción, tipo de proyecto: juego, sitio web, app móvil, API, CLI, extensión… más de 30 tipos soportados.",
      },
      {
        titre: "Elige tu stack",
        description:
          "Plataformas, lenguajes, frameworks y motores. El catálogo filtra automáticamente las opciones compatibles.",
      },
      {
        titre: "Configura la arquitectura",
        description:
          "Base de datos, hosting, servicios de terceros, opciones de arquitectura: monolito o microservicios, SPA o SSR…",
      },
      {
        titre: "Genera tu roadmap",
        description:
          "16 fases detalladas, de la ideación al mantenimiento: checklist, trampas a evitar, consejos y recursos oficiales.",
      },
    ],
    creer: {
      eyebrow: "// lo que puedes crear",
      titre: "Cada tipo de proyecto tiene sus propios pasos.",
      description:
        "Red y servidor dedicado para multijugador, firma y notarización para desktop, envío a las stores para móvil — la roadmap se adapta a tu configuración exacta.",
    },
    types: [
      { titre: "Videojuegos", detail: "2D, 3D, móvil, web, multijugador, VR/AR" },
      { titre: "Sitios y web", detail: "Vitrina, blog, e-commerce, SaaS, portfolio" },
      { titre: "Apps móviles", detail: "iOS, Android, multiplataforma, PWA" },
      { titre: "Apps de escritorio", detail: "Windows, macOS, Linux, Tauri, Electron" },
      { titre: "Herramientas dev", detail: "CLI, bibliotecas, extensiones VS Code" },
      { titre: "IA y bots", detail: "Chatbots, NLP, visión, bots Discord/Telegram" },
    ],
    fonctionnalites: {
      eyebrow: "// funciones",
      titre: "Pensado para pasar a la acción, no para configurar una herramienta.",
      items: [
        {
          titre: "Ligero",
          chiffre: "< 10 MB",
          description:
            "Menos de 10 MB instalado gracias a Tauri. Sin dependencias pesadas, sin bloatware.",
        },
        {
          titre: "Rápido",
          chiffre: "< 0,5 s",
          description:
            "Arranque en menos de medio segundo. Generación de roadmap instantánea, incluso offline.",
        },
        {
          titre: "Offline",
          chiffre: "100 %",
          description:
            "100 % local: sin cuenta, sin servidor, sin tracking. Tus datos se quedan contigo.",
        },
        {
          titre: "Gratis",
          chiffre: "0 €",
          description:
            "Gratis y open source. Exporta tus proyectos en JSON, reimpórtalos donde quieras.",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "// listo para programar",
      titre: "Tu próximo proyecto merece una roadmap de verdad.",
      description:
        "Disponible en Windows, macOS y Linux. Cero cuenta, cero servidor, cero suscripción.",
      bouton: "Descargar vibeChitech",
    },
    mockup: {
      fenetre: "vibeChitech — Proyecto: Juego multijugador PC",
      stack: "unity · c# · windows · steam",
      projets: "Mis proyectos",
      recherche: "Buscar",
      parametres: "Ajustes",
      nouveau: "Nuevo proyecto",
      phases: ["Ideación", "Pliego de condiciones", "Diseño", "Elección del stack", "Arquitectura"],
      etapes: [
        "Wireframes de las pantallas clave",
        "Maquetas Figma de alta fidelidad",
        "Sistema de diseño y tokens",
      ],
      piege:
        "Trampa: no pases a producción sin un prototipo de red validado — la sincronización multijugador cambia toda la arquitectura.",
    },
  },
  telecharger: {
    meta: {
      titre: "Descargar",
      description:
        "Descarga vibeChitech para Windows (.msi), macOS (.dmg) o Linux (.AppImage, .deb). Menos de 10 MB.",
    },
    eyebrow: "// descargar",
    titre: "Descargar vibeChitech",
    sousTitre:
      "Gratis, open source, sin cuenta. Elige tu sistema operativo — la detección es automática.",
    detectePrefixe: "Sistema detectado:",
    detecteSuffixe: "es el recomendado, pero todos los formatos siguen disponibles abajo.",
    badgeDetecte: "Detectado",
    bouton: "Descargar",
    basTexte: "Todos los binarios se publican en",
    basLien: "GitHub Releases",
    basSuffixe: "Menos de 10 MB, instalación en segundos.",
  },
  fonctionnalites: {
    meta: {
      titre: "Funciones",
      description:
        "Generación de roadmap condicional, catálogo completo, seguimiento de progreso, trampas y consejos, búsqueda, exportación JSON — todo 100 % local.",
    },
    eyebrow: "// funciones",
    titre: "Binario pequeño, contenido enorme.",
    sousTitre:
      "vibeChitech combina un configurador de stack, un generador de roadmaps condicionales y una herramienta de seguimiento — en una app de escritorio minúscula.",
    groupes: [
      {
        eyebrow: "// generación",
        titre: "Una roadmap adaptada a tu stack exacto",
        description:
          "El corazón de vibeChitech: checklists realmente personalizadas, no plantillas genéricas.",
        items: [
          {
            titre: "16 fases completas",
            description:
              "De la ideación al mantenimiento y el marketing: pliego de condiciones, diseño, stack, arquitectura, dev front/back, base de datos, seguridad, tests, CI/CD, despliegue, stores, monitorización.",
          },
          {
            titre: "Pasos condicionales",
            description:
              "Juego multijugador → red y servidor dedicado. Tauri → firma y notarización. Vercel → despliegue serverless. Stripe → webhooks de pago.",
          },
          {
            titre: "Trampas y consejos",
            description:
              "Cada paso lista los errores clásicos (gravedad info/aviso/peligro) y consejos prácticos de campo, no generalidades.",
          },
          {
            titre: "Seguimiento de progreso",
            description:
              "Marca los pasos completados, sigue tu progreso por fase y global, añade notas personales a cada paso.",
          },
        ],
      },
      {
        eyebrow: "// catálogo",
        titre: "Una base de conocimiento navegable",
        description: "Todo el catálogo va embarcado en la app, consultable offline.",
        items: [
          {
            titre: "30+ tipos de proyecto",
            description:
              "Juegos, sitios, apps móviles y de escritorio, APIs, CLIs, bots, extensiones, IA/ML, blockchain, IoT, automatización…",
          },
          {
            titre: "60+ frameworks y servicios",
            description:
              "Frontend, móvil, escritorio, motores de juego, backend, bases de datos, hosting, auth, pagos, monitorización, CMS — con sus compatibilidades.",
          },
          {
            titre: "Búsqueda instantánea",
            description:
              "Búsqueda difusa (Fuse.js) en el catálogo y en tus propios proyectos. Resultados agrupados y relevantes.",
          },
        ],
      },
      {
        eyebrow: "// local y ligero",
        titre: "Tus datos te pertenecen",
        description:
          "Sin cuenta, sin nube, sin servidor. Todo vive en un archivo JSON en tu máquina.",
        items: [
          {
            titre: "Menos de 10 MB",
            description:
              "Construido sobre Tauri v2: un binario nativo minúsculo donde Electron empaquetaría todo Chromium.",
          },
          {
            titre: "Arranque < 0,5 s",
            description:
              "La app se abre al instante y la generación de roadmap no tiene latencia de red.",
          },
          {
            titre: "100 % offline",
            description:
              "Todo funciona sin conexión: catálogo, generación, seguimiento. Ideal en el tren o de viaje.",
          },
          {
            titre: "Exportar / importar JSON",
            description:
              "Tus proyectos viven en un simple archivo JSON local. Expórtalo, haz copia, versiona o compártelo libremente.",
          },
          {
            titre: "Recursos oficiales",
            description:
              "Cada paso enlaza a la documentación oficial de la herramienta correspondiente — sin enlaces muertos ni blogs dudosos.",
          },
          {
            titre: "Gratis y open source",
            description:
              "Descarga los binarios desde GitHub Releases o compila desde el código fuente. Sin licencia, sin suscripción.",
          },
        ],
      },
    ],
    cta: "Probar vibeChitech",
  },
  catalogue: {
    meta: {
      titre: "Catálogo",
      description:
        "El catálogo integrado en vibeChitech: tipos de proyecto, lenguajes, frameworks, bases de datos, hosting, servicios de terceros y opciones de arquitectura.",
    },
    eyebrow: "// catálogo",
    titre: "entradas, cero conexión.",
    sousTitre:
      "integradas en la app: tipos de proyecto, lenguajes, frameworks, bases de datos, hosting, servicios y opciones de arquitectura. Cada entrada lleva sus compatibilidades para guiar tus decisiones.",
    categories: {
      "types-projet": {
        nom: "Tipos de proyecto",
        description: "Más de 30 tipos cubiertos, del videojuego al IoT.",
      },
      langages: {
        nom: "Lenguajes",
        description: "25 lenguajes soportados.",
      },
      frameworks: {
        nom: "Frameworks y herramientas",
        description: "Más de 60 frameworks y servicios, por categoría.",
      },
      "bases-de-donnees": {
        nom: "Bases de datos",
        description: "SQL, NoSQL, caché y BaaS.",
      },
      hebergements: {
        nom: "Hosting",
        description: "Plataformas de despliegue y nubes.",
      },
      "services-tiers": {
        nom: "Servicios de terceros",
        description: "Auth, pagos, almacenamiento, monitorización, analytics, email, CMS…",
      },
      ecosysteme: {
        nom: "Herramientas del ecosistema",
        description: "Estado, estilos, testing y tiempo real.",
      },
      architecture: {
        nom: "Opciones de arquitectura",
        description: "Las decisiones estructurales que adaptan la roadmap generada.",
      },
    },
    noteBas:
      "El catálogo completo con descripciones, iconos y compatibilidades se puede consultar en la app de escritorio.",
  },
  docs: {
    meta: {
      titre: "Documentación",
      description:
        "Guía de uso de vibeChitech: instalación, creación de proyectos, generación de roadmaps, seguimiento y exportación de datos.",
    },
    eyebrow: "// documentación",
    titre: "Guía de uso",
    sousTitre:
      "Todo lo necesario para instalar vibeChitech y generar tu primera roadmap.",
    sections: [
      {
        titre: "Instalación",
        contenu: [
          "Descarga el binario para tu sistema desde la página de Descargas o GitHub Releases: .msi (Windows), .dmg (macOS), .AppImage o .deb (Linux).",
          "En macOS, abre el .dmg y arrastra vibeChitech a Aplicaciones. Si Gatekeeper bloquea el arranque, clic derecho → Abrir.",
          "En Windows, ejecuta el .msi y sigue el asistente. En Linux, da permisos de ejecución al .AppImage (chmod +x) y lánzalo.",
          "No se necesita cuenta: la app funciona inmediatamente, offline.",
        ],
      },
      {
        titre: "Crear un proyecto",
        contenu: [
          "Desde el inicio, haz clic en «Nuevo proyecto» para lanzar el asistente de 6 pasos.",
          "Paso 1: ponle nombre y descripción a tu proyecto.",
          "Paso 2: elige el tipo de proyecto (juego, sitio web, app móvil, API, CLI…).",
          "Paso 3: selecciona las plataformas objetivo (Windows, web, iOS…).",
          "Paso 4: elige los lenguajes — el catálogo filtra después los frameworks compatibles.",
          "Paso 5: selecciona frameworks, motores y herramientas.",
          "Paso 6: configura la arquitectura — base de datos, hosting, servicios de terceros (auth, pagos…) y opciones (monolito, SSR, offline-first…).",
          "Haz clic en «Generar roadmap»: la app compone una checklist personalizada a partir de las 16 fases del modelo.",
        ],
      },
      {
        titre: "Seguir tu roadmap",
        contenu: [
          "La roadmap está organizada en fases desplegables (acordeón), de la ideación al mantenimiento.",
          "Haz clic en un paso para abrir su ficha: objetivo, explicación detallada, subtareas «por hacer», trampas clásicas, consejos y enlaces a la documentación oficial.",
          "Las trampas están coloreadas según su gravedad: azul (info), naranja (aviso), rojo (peligro).",
          "Marca un paso cuando lo termines: el progreso se actualiza por fase y de forma global.",
          "Añade notas personales a cada paso para conservar tus decisiones y aprendizajes.",
        ],
      },
      {
        titre: "Catálogo y búsqueda",
        contenu: [
          "La pestaña Catálogo lista todos los tipos de proyecto, lenguajes, frameworks y servicios referenciados, filtrables por categoría.",
          "La pestaña Buscar lanza una búsqueda difusa (Fuse.js) en el catálogo y en tus proyectos: encuentra un paso, una trampa o una tecnología en pocas pulsaciones.",
        ],
      },
      {
        titre: "Datos y exportación",
        contenu: [
          "Todos los datos se guardan localmente en un archivo JSON (vibechitech.json) mediante tauri-plugin-store.",
          "En Ajustes, exporta este archivo para respaldar o transferir tus proyectos, y reimpórtalo en otra máquina.",
          "Ningún dato sale de tu máquina: sin auth, sin nube, sin telemetría.",
        ],
      },
      {
        titre: "Ajustes",
        contenu: [
          "Tema: claro, oscuro o sincronizado con el sistema.",
          "Idioma de la interfaz.",
          "Restablecer: borra los proyectos y empieza de cero (se recomienda exportar antes).",
        ],
      },
    ],
    aide: "¿Una pregunta o un bug? Abre un issue en",
    aideLien: "GitHub",
    aideOu: ", o",
    aideTelecharger: "descarga la app",
    aideFin: "para empezar.",
    version: "Guía basada en vibeChitech v0.1.0",
  },
  nonTrouve: {
    titre: "Página no encontrada",
    description: "Esta página no existe o ha sido movida.",
    retour: "Volver al inicio",
  },
};

export default es;
