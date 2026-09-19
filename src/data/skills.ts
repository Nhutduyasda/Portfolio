import { SkillItem } from "@/types";

export const skillsData: SkillItem[] = [
  // Backend
  {
    name: "C#",
    category: "Backend",
    level: 94,
    experience: "2.5+ years",
    description: "Modern C# (12+), LINQ, async/await, memory optimization, records, OOP design patterns.",
    isCore: true,
  },
  {
    name: "ASP.NET Core Web API",
    category: "Backend",
    level: 92,
    experience: "2.5+ years",
    description: "Clean Architecture, dependency injection, middleware pipelines, JWT auth, high-throughput REST services.",
    isCore: true,
  },
  {
    name: "Python",
    category: "Backend",
    level: 88,
    experience: "2+ years",
    description: "PyTorch deep learning pipelines, script automation, data processing, model training & inference.",
    isCore: true,
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    level: 92,
    experience: "3+ years",
    description: "Modern React with hooks, server components, concurrent features, responsive state management.",
    isCore: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 90,
    experience: "3+ years",
    description: "Strict typing, generics, interfaces, type-safe API contracts, utility types.",
    isCore: true,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: 85,
    experience: "1.5+ years",
    description: "Composition API, reactive state management, Pinia, modular single-file components.",
    isCore: false,
  },

  // AI & Computer Vision
  {
    name: "OpenCV",
    category: "AI & Computer Vision",
    level: 88,
    experience: "1.5+ years",
    description: "Image preprocessing, edge detection, contour analysis, geometric transforms for OCR and vision pipelines.",
    isCore: true,
  },
  {
    name: "YOLOv8",
    category: "AI & Computer Vision",
    level: 86,
    experience: "1+ year",
    description: "Real-time object detection, bounding box localization, custom model fine-tuning.",
    isCore: false,
  },
  {
    name: "CNN",
    category: "AI & Computer Vision",
    level: 90,
    experience: "2+ years",
    description: "Convolutional neural networks, feature map extraction, deep spatial representation learning.",
    isCore: true,
  },
  {
    name: "DINO Vision Transformers",
    category: "AI & Computer Vision",
    level: 88,
    experience: "1+ year",
    description: "Self-supervised vision transformers, attention maps, robust character & feature embeddings.",
    isCore: true,
  },

  // AI Development
  {
    name: "Prompt Engineering",
    category: "AI Development",
    level: 92,
    experience: "2+ years",
    description: "Few-shot prompting, structured JSON output schemas, chain-of-thought, system instruction optimization.",
    isCore: true,
  },
  {
    name: "MCP (Model Context Protocol)",
    category: "AI Development",
    level: 90,
    experience: "1+ year",
    description: "Integrating custom tool servers, context providers, autonomous agent orchestration protocols.",
    isCore: true,
  },
  {
    name: "Cursor IDE",
    category: "AI Development",
    level: 95,
    experience: "2+ years",
    description: "Agentic coding workflows, multi-file refactoring, autonomous AI pair programming.",
    isCore: true,
  },

  // Tools & Infrastructure
  {
    name: "Docker",
    category: "Tools & Infrastructure",
    level: 88,
    experience: "2+ years",
    description: "Multi-stage container builds, containerized development, docker-compose microservices.",
    isCore: false,
  },
  {
    name: "Git",
    category: "Tools & Infrastructure",
    level: 94,
    experience: "3+ years",
    description: "Branching strategies, interactive rebasing, pull requests, semantic versioning.",
    isCore: true,
  },
  {
    name: "AWS S3",
    category: "Tools & Infrastructure",
    level: 88,
    experience: "1.5+ years",
    description: "Cloud object storage, presigned URLs, streaming uploads, asset lifecycle rules.",
    isCore: true,
  },
  {
    name: "SignalR",
    category: "Tools & Infrastructure",
    level: 90,
    experience: "2+ years",
    description: "Full-duplex real-time communication, WebSockets, hub routing, worker telemetry.",
    isCore: true,
  },
  {
    name: "Draw.io",
    category: "Tools & Infrastructure",
    level: 92,
    experience: "2.5+ years",
    description: "System architecture diagrams, UML class diagrams, database ERDs, data flow mapping.",
    isCore: false,
  },

  // Domain Knowledge
  {
    name: "Import-Export Logistics",
    category: "Domain Knowledge",
    level: 92,
    experience: "Enterprise",
    description: "Cross-border supply chain workflows, Bill of Lading, Commercial Invoices, Packing Lists.",
    isCore: true,
  },
  {
    name: "Incoterms 2020",
    category: "Domain Knowledge",
    level: 90,
    experience: "Enterprise",
    description: "Commercial trade rules (FOB, CIF, EXW, DDP), risk allocation, freight carriage responsibilities.",
    isCore: true,
  },
  {
    name: "VNACCS Customs",
    category: "Domain Knowledge",
    level: 92,
    experience: "Enterprise",
    description: "Vietnam Automated Cargo and Port Consolidated System clearance declarations and validation standards.",
    isCore: true,
  },
];

export const coreOrbits = [
  { name: "C# / .NET", category: "Backend", color: "#512BD4", radius: 2.8, speed: 0.8 },
  { name: "React", category: "Frontend", color: "#61DAFB", radius: 3.6, speed: 0.6 },
  { name: "Python", category: "AI & CV", color: "#3776AB", radius: 4.4, speed: 0.7 },
  { name: "DINO ViT", category: "AI", color: "#22D3EE", radius: 5.2, speed: 0.5 },
  { name: "AWS S3", category: "Tools", color: "#FF9900", radius: 6.0, speed: 0.65 },
  { name: "VNACCS", category: "Logistics", color: "#A78BFA", radius: 6.8, speed: 0.55 },
];
