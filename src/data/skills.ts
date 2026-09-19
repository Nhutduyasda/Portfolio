import { SkillItem } from "@/types";

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    level: 95,
    experience: "3+ years",
    description: "Component composition, custom hooks, state management, concurrent features, server components.",
    isCore: true,
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 92,
    experience: "2+ years",
    description: "App Router, Server Actions, SSR/SSG/ISR, Turbopack, route handlers, performance optimization.",
    isCore: true,
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 90,
    experience: "3+ years",
    description: "Strict typing, generics, conditional types, utility types, AST, type-safe API contracts.",
    isCore: true,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 96,
    experience: "3+ years",
    description: "Design systems, arbitrary variants, responsive layouts, glassmorphism, micro-animations.",
    isCore: true,
  },
  {
    name: "Three.js / R3F",
    category: "frontend",
    level: 85,
    experience: "1.5+ years",
    description: "3D scene graphs, shaders, mesh geometry, particle buffers, camera controls, performance tuning.",
    isCore: true,
  },
  {
    name: "Framer Motion & GSAP",
    category: "frontend",
    level: 90,
    experience: "2+ years",
    description: "ScrollTrigger, layout animations, spring physics, timeline choreography, micro-interactions.",
    isCore: false,
  },
  {
    name: "Material UI",
    category: "frontend",
    level: 88,
    experience: "2+ years",
    description: "Complex modal/dialog engineering, accessible drawers, custom theming, ARIA compliance.",
    isCore: false,
  },

  // Backend
  {
    name: "C#",
    category: "backend",
    level: 92,
    experience: "2.5+ years",
    description: "Modern C# (12+), async/await, LINQ, pattern matching, memory optimization, records.",
    isCore: true,
  },
  {
    name: ".NET / ASP.NET Core",
    category: "backend",
    level: 90,
    experience: "2.5+ years",
    description: "Clean Architecture, Web APIs, middleware pipelines, dependency injection, authentication & JWT.",
    isCore: true,
  },
  {
    name: "RESTful & Microservices",
    category: "backend",
    level: 88,
    experience: "2+ years",
    description: "API design principles, versioning, swagger documentation, rate limiting, CQRS patterns.",
    isCore: false,
  },

  // Database
  {
    name: "SQL Server",
    category: "database",
    level: 90,
    experience: "2.5+ years",
    description: "Complex queries, indexing strategies, stored procedures, triggers, execution plan analysis.",
    isCore: true,
  },
  {
    name: "Entity Framework Core",
    category: "database",
    level: 92,
    experience: "2.5+ years",
    description: "Code-first migrations, shadow properties, split queries, optimistic concurrency, projection tuning.",
    isCore: true,
  },
  {
    name: "PostgreSQL & Redis",
    category: "database",
    level: 85,
    experience: "1.5+ years",
    description: "Distributed caching, key-value stores, pub/sub messaging, relational data modeling.",
    isCore: false,
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "tools",
    level: 94,
    experience: "3+ years",
    description: "Branching strategies, interactive rebasing, pull requests, semantic release workflows.",
    isCore: true,
  },
  {
    name: "Docker",
    category: "tools",
    level: 85,
    experience: "1.5+ years",
    description: "Multi-stage builds, containerized development, docker-compose orchestration for microservices.",
    isCore: false,
  },
  {
    name: "Figma",
    category: "tools",
    level: 88,
    experience: "2+ years",
    description: "UI/UX wireframing, auto-layout, design tokens, interactive prototyping, developer handoff.",
    isCore: false,
  },

  // AI & Emerging
  {
    name: "AI & LLM Integration",
    category: "ai",
    level: 88,
    experience: "1.5+ years",
    description: "Prompt engineering, function calling, vector embeddings, autonomous agent workflows, RAG pipelines.",
    isCore: true,
  },
  {
    name: "Agentic Systems",
    category: "ai",
    level: 85,
    experience: "1+ year",
    description: "Multi-agent coordination, automated workflow triggers, dynamic context memory retrieval.",
    isCore: false,
  },
];

export const coreOrbits = [
  { name: "React", category: "Frontend", color: "#61DAFB", radius: 2.8, speed: 0.8 },
  { name: "Next.js", category: "Full-Stack", color: "#FFFFFF", radius: 3.6, speed: 0.6 },
  { name: "TypeScript", category: "Language", color: "#3178C6", radius: 4.4, speed: 0.7 },
  { name: ".NET", category: "Backend", color: "#512BD4", radius: 5.2, speed: 0.5 },
  { name: "SQL Server", category: "Database", color: "#CC292B", radius: 6.0, speed: 0.65 },
  { name: "AI", category: "Emerging", color: "#22D3EE", radius: 6.8, speed: 0.55 },
];
