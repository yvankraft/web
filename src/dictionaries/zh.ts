import type { Dictionnaire } from "./fr";

const zh: Dictionnaire = {
  meta: {
    titre: "vibeChitech — 项目配置器与路线图生成器",
    description:
      "配置你的项目(类型、平台、语言、框架、架构),自动生成从头脑风暴到部署的完整步骤清单。100% 本地、免费、轻量。",
  },
  nav: {
    fonctionnalites: "功能",
    catalogue: "目录",
    docs: "文档",
    telecharger: "下载",
    langue: "语言",
  },
  footer: {
    slogan: "项目配置器与路线图生成器。100% 本地、免费、开源。",
    produit: "产品",
    ressources: "资源",
    documentation: "文档",
    copyright: "© 2026 vibeChitech — 由开发者为开发者打造。",
  },
  accueil: {
    badge: "v0.1.0 — 免费、开源、100% 本地",
    titreA: "从想法到部署,",
    titreB: "清晰的路线图。",
    sousTitre:
      "配置你的项目——类型、平台、语言、框架、架构——vibeChitech 将生成涵盖所有步骤的完整清单。",
    ctaTelecharger: "免费下载",
    ctaCatalogue: "浏览目录",
    plateformes: "windows · macos · linux — 不到 10 MB",
    commentCaMarche: {
      eyebrow: "// 工作原理",
      titre: "6 步向导,定制专属路线图。",
    },
    etapes: [
      {
        titre: "描述你的项目",
        description:
          "名称、描述、项目类型:游戏、网站、移动应用、API、CLI、扩展……支持 30 多种类型。",
      },
      {
        titre: "选择技术栈",
        description:
          "平台、语言、框架与引擎。目录会自动筛选兼容的选项。",
      },
      {
        titre: "配置架构",
        description:
          "数据库、托管、第三方服务、架构选项:单体或微服务、SPA 或 SSR……",
      },
      {
        titre: "生成路线图",
        description:
          "16 个详细阶段,从构思到维护:清单、常见陷阱、技巧和官方资源。",
      },
    ],
    creer: {
      eyebrow: "// 你可以构建什么",
      titre: "每种项目类型都有专属步骤。",
      description:
        "多人游戏的网络与专用服务器、桌面端的签名与公证、移动端的商店提交——路线图精确匹配你的配置。",
    },
    types: [
      { titre: "电子游戏", detail: "2D、3D、移动、网页、多人、VR/AR" },
      { titre: "网站与 Web", detail: "展示站、博客、电商、SaaS、作品集" },
      { titre: "移动应用", detail: "iOS、Android、跨平台、PWA" },
      { titre: "桌面应用", detail: "Windows、macOS、Linux、Tauri、Electron" },
      { titre: "开发工具", detail: "CLI、库、VS Code 扩展" },
      { titre: "AI 与机器人", detail: "聊天机器人、NLP、视觉、Discord/Telegram 机器人" },
    ],
    fonctionnalites: {
      eyebrow: "// 功能特性",
      titre: "为行动而生,而不是配置工具。",
      items: [
        {
          titre: "轻量",
          chiffre: "< 10 MB",
          description:
            "借助 Tauri,安装体积不到 10 MB。无沉重依赖,无臃肿。",
        },
        {
          titre: "快速",
          chiffre: "< 0.5 秒",
          description:
            "启动不到半秒。路线图即时生成,离线也能用。",
        },
        {
          titre: "离线",
          chiffre: "100%",
          description:
            "100% 本地:无账号、无服务器、无追踪。数据完全属于你。",
        },
        {
          titre: "免费",
          chiffre: "¥0",
          description:
            "免费且开源。将项目导出为 JSON,随时随地重新导入。",
        },
      ],
    },
    ctaFinal: {
      eyebrow: "// 准备编码",
      titre: "你的下一个项目值得一份真正的路线图。",
      description:
        "支持 Windows、macOS 和 Linux。零账号、零服务器、零订阅。",
      bouton: "下载 vibeChitech",
    },
    mockup: {
      fenetre: "vibeChitech — 项目:PC 多人游戏",
      stack: "unity · c# · windows · steam",
      projets: "我的项目",
      recherche: "搜索",
      parametres: "设置",
      nouveau: "新建项目",
      phases: ["构思", "需求文档", "设计", "技术选型", "架构"],
      etapes: [
        "关键界面的线框图",
        "高保真 Figma 设计稿",
        "设计规范与 tokens",
      ],
      piege:
        "陷阱:在没有验证网络原型之前不要进入生产——多人同步会改变整个架构。",
    },
  },
  telecharger: {
    meta: {
      titre: "下载",
      description:
        "下载适用于 Windows(.msi)、macOS(.dmg)或 Linux(.AppImage、.deb)的 vibeChitech。不到 10 MB。",
    },
    eyebrow: "// 下载",
    titre: "下载 vibeChitech",
    sousTitre:
      "免费、开源、无需账号。选择你的操作系统——系统会自动检测。",
    detectePrefixe: "检测到的系统:",
    detecteSuffixe: "推荐使用,但下方仍提供所有格式。",
    badgeDetecte: "已检测",
    bouton: "下载",
    basTexte: "所有二进制文件发布在",
    basLien: "GitHub Releases",
    basSuffixe: "不到 10 MB,几秒即可安装完成。",
  },
  fonctionnalites: {
    meta: {
      titre: "功能",
      description:
        "条件式路线图生成、完整目录、进度跟踪、陷阱与技巧、搜索、JSON 导出——全部 100% 本地。",
    },
    eyebrow: "// 功能特性",
    titre: "小体积,大内容。",
    sousTitre:
      "vibeChitech 将技术栈配置器、条件式路线图生成器和进度跟踪工具融为一体——全部装进一个微小的桌面应用。",
    groupes: [
      {
        eyebrow: "// 生成",
        titre: "精确匹配你技术栈的路线图",
        description:
          "vibeChitech 的核心:真正个性化的清单,而非通用模板。",
        items: [
          {
            titre: "16 个完整阶段",
            description:
              "从构思到维护和营销:需求文档、设计、技术选型、架构、前后端开发、数据库、安全、测试、CI/CD、部署、商店、监控。",
          },
          {
            titre: "条件式步骤",
            description:
              "多人游戏 → 网络与专用服务器。Tauri → 签名与公证。Vercel → Serverless 部署。Stripe → 支付 Webhook。",
          },
          {
            titre: "陷阱与技巧",
            description:
              "每个步骤都列出常见错误(按 info/警告/危险分级)和来自实战的实用建议,而非泛泛而谈。",
          },
          {
            titre: "进度跟踪",
            description:
              "勾选已完成步骤,按阶段和全局查看进度,为每个步骤添加个人笔记。",
          },
        ],
      },
      {
        eyebrow: "// 目录",
        titre: "可浏览的知识库",
        description: "整个目录内置于应用中,离线可查。",
        items: [
          {
            titre: "30+ 项目类型",
            description:
              "游戏、网站、移动与桌面应用、API、CLI、机器人、扩展、AI/ML、区块链、IoT、自动化……",
          },
          {
            titre: "60+ 框架与服务",
            description:
              "前端、移动端、桌面、游戏引擎、后端、数据库、托管、认证、支付、监控、CMS——附兼容性信息。",
          },
          {
            titre: "即时搜索",
            description:
              "在目录和你自己的项目中进行模糊搜索(Fuse.js),结果分组且相关。",
          },
        ],
      },
      {
        eyebrow: "// 本地与轻量",
        titre: "数据完全属于你",
        description:
          "无账号、无云、无服务器。一切都存储在你机器上的一个 JSON 文件中。",
        items: [
          {
            titre: "不到 10 MB",
            description:
              "基于 Tauri v2 构建:在 Electron 需要打包整个 Chromium 的地方,它只是一个微小的原生二进制文件。",
          },
          {
            titre: "启动 < 0.5 秒",
            description:
              "应用即时打开,路线图生成没有网络延迟。",
          },
          {
            titre: "100% 离线",
            description:
              "无需连接即可使用一切:目录、生成、跟踪。火车上或旅途中都完美适用。",
          },
          {
            titre: "JSON 导出/导入",
            description:
              "你的项目存放在一个简单的本地 JSON 文件中。可自由导出、备份、版本管理或分享。",
          },
          {
            titre: "官方资源",
            description:
              "每个步骤都链接到相关工具的官方文档——没有失效链接或可疑博客。",
          },
          {
            titre: "免费且开源",
            description:
              "从 GitHub Releases 下载二进制文件或从源码编译。无许可证、无订阅。",
          },
        ],
      },
    ],
    cta: "试用 vibeChitech",
  },
  catalogue: {
    meta: {
      titre: "目录",
      description:
        "vibeChitech 内置目录:项目类型、语言、框架、数据库、托管、第三方服务和架构选项。",
    },
    eyebrow: "// 目录",
    titre: "个条目,零联网。",
    sousTitre:
      "内置于应用:项目类型、语言、框架、数据库、托管、服务和架构选项。每个条目都带有兼容性信息来指导你的选择。",
    categories: {
      "types-projet": {
        nom: "项目类型",
        description: "覆盖 30 多种类型,从电子游戏到物联网。",
      },
      langages: {
        nom: "编程语言",
        description: "支持 25 种语言。",
      },
      frameworks: {
        nom: "框架与工具",
        description: "按类别收录 60 多个框架和服务。",
      },
      "bases-de-donnees": {
        nom: "数据库",
        description: "SQL、NoSQL、缓存与 BaaS。",
      },
      hebergements: {
        nom: "托管",
        description: "部署平台与云服务。",
      },
      "services-tiers": {
        nom: "第三方服务",
        description: "认证、支付、存储、监控、分析、邮件、CMS……",
      },
      ecosysteme: {
        nom: "生态工具",
        description: "状态管理、样式、测试与实时通信。",
      },
      architecture: {
        nom: "架构选项",
        description: "影响生成路线图的结构化选择。",
      },
    },
    noteBas: "包含描述、图标和兼容性信息的完整目录可在桌面应用中浏览。",
  },
  docs: {
    meta: {
      titre: "文档",
      description:
        "vibeChitech 使用指南:安装、项目创建、路线图生成、进度跟踪与数据导出。",
    },
    eyebrow: "// 文档",
    titre: "使用指南",
    sousTitre: "安装 vibeChitech 并生成第一份路线图所需的一切。",
    sections: [
      {
        titre: "安装",
        contenu: [
          "从下载页或 GitHub Releases 下载适合你系统的二进制文件:.msi(Windows)、.dmg(macOS)、.AppImage 或 .deb(Linux)。",
          "在 macOS 上,打开 .dmg 并将 vibeChitech 拖入「应用程序」。如果 Gatekeeper 阻止启动,右键 → 打开。",
          "在 Windows 上,运行 .msi 并按向导操作。在 Linux 上,为 .AppImage 添加执行权限(chmod +x)后运行。",
          "无需账号:应用开箱即用,支持离线。",
        ],
      },
      {
        titre: "创建项目",
        contenu: [
          "在首页点击「新建项目」启动 6 步向导。",
          "第 1 步:为项目命名并添加描述。",
          "第 2 步:选择项目类型(游戏、网站、移动应用、API、CLI……)。",
          "第 3 步:选择目标平台(Windows、Web、iOS……)。",
          "第 4 步:选择语言——目录随后会筛选兼容的框架。",
          "第 5 步:选择框架、引擎和工具。",
          "第 6 步:配置架构——数据库、托管、第三方服务(认证、支付……)和选项(单体、SSR、离线优先……)。",
          "点击「生成路线图」:应用将基于 16 个模板阶段组装出个性化清单。",
        ],
      },
      {
        titre: "跟踪路线图",
        contenu: [
          "路线图按可折叠的阶段(手风琴)组织,从构思到维护。",
          "点击某个步骤打开详情页:目标、详细解释、「待办」子任务、常见陷阱、技巧和官方文档链接。",
          "陷阱按严重程度着色:蓝色(提示)、橙色(警告)、红色(危险)。",
          "完成步骤后勾选:阶段和全局进度会同步更新。",
          "为每个步骤添加个人笔记,记录你的决策与经验。",
        ],
      },
      {
        titre: "目录与搜索",
        contenu: [
          "「目录」标签页列出所有收录的项目类型、语言、框架和服务,可按类别筛选。",
          "「搜索」标签页对目录和你的项目进行模糊搜索(Fuse.js):几下按键即可找到某个步骤、陷阱或技术。",
        ],
      },
      {
        titre: "数据与导出",
        contenu: [
          "所有数据都通过 tauri-plugin-store 存储在本地 JSON 文件(vibechitech.json)中。",
          "在「设置」中导出此文件以备份或迁移项目,并可在另一台机器上重新导入。",
          "没有任何数据离开你的设备:无认证、无云端、无遥测。",
        ],
      },
      {
        titre: "设置",
        contenu: [
          "主题:浅色、深色或跟随系统。",
          "界面语言。",
          "重置:清空项目并恢复初始状态(建议先导出)。",
        ],
      },
    ],
    aide: "有疑问或发现 bug?在",
    aideLien: "GitHub",
    aideOu: "上提交 issue,或",
    aideTelecharger: "下载应用",
    aideFin: "开始使用。",
    version: "本指南基于 vibeChitech v0.1.0",
  },
  nonTrouve: {
    titre: "页面未找到",
    description: "此页面不存在或已被移动。",
    retour: "返回首页",
  },
};

export default zh;
