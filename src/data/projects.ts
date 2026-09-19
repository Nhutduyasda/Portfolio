import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "shoedocx",
    number: "01",
    title: "ShoeDocX",
    subtitle: "Enterprise Document Management Platform",
    description:
      "Enterprise internal document management platform designed for office employees with a focus on usability, high-security document workflows, and enterprise-grade UI.",
    detailedOverview:
      "ShoeDocX solves document fragmentation across multi-department manufacturing and retail enterprises. It streamlines document lifecycle management from automated ingestion and OCR indexing to multi-level approval hierarchies, cryptographic watermarking, and real-time audit logging.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) with granular department permissions",
      "Automated OCR text extraction, full-text indexing & fuzzy search",
      "Interactive multi-tier approval workflows with electronic signatures",
      "Tamper-evident audit trails with chronological revision history",
      "High-throughput document batch export and cloud archiving",
    ],
    techStack: ["React", ".NET 8", "C#", "ASP.NET Core", "SQL Server", "Docker", "Tailwind CSS"],
    role: "Lead Full-Stack Developer",
    architecture:
      "Clean Architecture (Domain-Driven Design) with ASP.NET Core Web API, EF Core repository pattern, and a reactive React SPA front-end.",
    highlights: [
      "Reduced document retrieval time by 68%",
      "Sub-50ms indexed search across 100,000+ files",
      "Secure multi-tenant enterprise isolation",
    ],
    liveUrl: "https://shoedocx-demo.vercel.app",
    githubUrl: "https://github.com/nhutduy/shoedocx-enterprise",
    featured: true,
    category: "Enterprise",
    accentColor: "#7C3AED",
    badge: "Enterprise Flagship",
  },
  {
    id: "aetheros",
    number: "02",
    title: "AetherOS",
    subtitle: "Real-time Cloud Telemetry & AI Workspace",
    description:
      "Next-generation digital workspace and cloud infrastructure telemetry engine with interactive 3D topology, WebSockets streaming, and autonomous anomaly detection.",
    detailedOverview:
      "AetherOS transforms complex distributed cloud telemetry into an intuitive spatial monitoring canvas. Engineering teams can visualize microservice health in real-time 3D node graphs, run diagnostics, and receive AI-curated incident triage recommendations.",
    keyFeatures: [
      "Interactive 3D WebGL node graph visualizing microservices & latency",
      "Sub-10ms telemetry streaming over bi-directional WebSockets",
      "Integrated AI copilot for automated incident diagnosis and log parsing",
      "Customizable draggable HUD widgets with glassmorphism layout",
      "Distributed tracing with Jaeger / OpenTelemetry compatibility",
    ],
    techStack: ["Next.js", "TypeScript", "Three.js", "@react-three/fiber", "Tailwind CSS", "Go", "Redis"],
    role: "Full-Stack & Creative Developer",
    architecture:
      "Next.js App Router frontend with Three.js rendering layer; Go WebSocket streaming server connected to Redis pub/sub.",
    highlights: [
      "Zero-latency multi-node 60 FPS 3D canvas",
      "Automated anomaly mitigation suggestions",
      "Dark futuristic cyber-command aesthetic",
    ],
    liveUrl: "https://aetheros-monitor.vercel.app",
    githubUrl: "https://github.com/nhutduy/aetheros-telemetry",
    featured: true,
    category: "Cloud / AI",
    accentColor: "#22D3EE",
    badge: "3D & AI Showcase",
  },
  {
    id: "omnistore",
    number: "03",
    title: "OmniStore Enterprise",
    subtitle: "High-Throughput Omnichannel Commerce Engine",
    description:
      "Scalable e-commerce and multi-warehouse inventory synchronization hub engineered to handle flash-sale concurrency with sub-second order fulfillment.",
    detailedOverview:
      "Engineered for high-volume retail chains, OmniStore synchronizes inventory across physical retail outlets and digital storefronts in real-time, eliminating overselling and inventory lock contention during peak promotional events.",
    keyFeatures: [
      "Optimistic locking and distributed Redis caching for inventory checks",
      "Event-driven order processing pipeline with background workers",
      "Modern minimalist checkout flow with sub-second step transitions",
      "Dynamic pricing engine with multi-currency & tax compliance",
      "Comprehensive merchant analytics dashboard with forecasting",
    ],
    techStack: ["Next.js", "React", "ASP.NET Core", "C#", "SQL Server", "Redis", "Tailwind CSS"],
    role: "Backend & Systems Architect",
    architecture:
      "CQRS pattern with MediatR in .NET backend, Redis distributed cache, and Next.js ISR front-end for lightning-fast product catalog delivery.",
    highlights: [
      "Sustained 5,000+ orders/min simulated load with 0% stock drift",
      "99.99% inventory accuracy across 12 warehouse nodes",
      "Lighthouse 98 Performance score",
    ],
    liveUrl: "https://omnistore-demo.vercel.app",
    githubUrl: "https://github.com/nhutduy/omnistore-engine",
    featured: true,
    category: "Full-Stack",
    accentColor: "#A78BFA",
    badge: "High Concurrency",
  },
  {
    id: "nexus-system",
    number: "04",
    title: "Nexus Design System",
    subtitle: "Enterprise Component Framework & Motion Engine",
    description:
      "Modular, WCAG AAA compliant design system and component architecture built for modern enterprise web applications requiring high density and smooth animation.",
    detailedOverview:
      "A comprehensive design token framework and component library created to standardize UI engineering across complex enterprise products. Features fully typed props, keyboard accessibility, smooth layout transitions, and dark/light token switching.",
    keyFeatures: [
      "45+ enterprise-grade accessible components (DataTables, Drawers, Virtualized Grids)",
      "Strict WCAG 2.2 AAA accessibility compliance with ARIA primitives",
      "Zero-runtime CSS token architecture with Tailwind CSS integration",
      "Interactive component documentation with live code playgrounds",
      "Micro-interaction motion presets built on top of Framer Motion",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook", "Material UI"],
    role: "UI/UX & Design Systems Engineer",
    architecture:
      "Headless compound component patterns wrapped with customized Tailwind utilities and Framer Motion layout springs.",
    highlights: [
      "Used across 5+ enterprise platforms",
      "100% TypeScript coverage with strict type safety",
      "Zero layout shift design patterns",
    ],
    liveUrl: "https://nexus-design-system.vercel.app",
    githubUrl: "https://github.com/nhutduy/nexus-ui-system",
    featured: false,
    category: "Design System",
    accentColor: "#38BDF8",
    badge: "Design Systems",
  },
];
