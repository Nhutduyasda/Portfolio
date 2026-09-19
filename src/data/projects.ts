import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "shoedocx",
    number: "01",
    title: "ShoeDocX",
    subtitle: "Import-Export Document Management Platform",
    description:
      "An import-export document management platform for shoe manufacturing enterprises. Automated the creation of Commercial Invoices and Packing Lists using OCR and cross-referenced data with VNACCS customs.",
    detailedOverview:
      "ShoeDocX streamlines import-export document workflows for shoe manufacturing enterprises. It automates the generation of Commercial Invoices and Packing Lists using high-precision OCR and cross-references clearance declaration data directly with Vietnam National Single Window / VNACCS customs standards.",
    keyFeatures: [
      "Automated OCR extraction for Commercial Invoices & Packing Lists",
      "Real-time cross-referencing with VNACCS customs declaration formats",
      "Role-based department access control & export audit trails",
      "High-throughput batch document generation & validation",
    ],
    techStack: ["Web API", "OCR", "VNACCS", "C#", "SQL Server"],
    role: "Lead Full-Stack Developer",
    architecture:
      "Clean Architecture with C# ASP.NET Web API backend, OCR processing pipeline, and responsive enterprise management portal.",
    highlights: [

      "Reduced customs documentation turnaround by 75%",
      "Full VNACCS declaration compliance",
    ],
    liveUrl: "https://shoedocx.vercel.app",
    githubUrl: "https://github.com/Nhutduyasda/ShoeDocX",
    featured: true,
    category: "Enterprise Logistics",
    accentColor: "#7C3AED",
    badge: "Graduation Project (9.9 Score)",
  },
  {
    id: "snapconvert",
    number: "02",
    title: "SnapConvert",
    subtitle: "Cross-Platform Image Conversion & Cloud Hub",
    description:
      "A cross-platform web application for image format conversion with cloud storage integration.",
    detailedOverview:
      "SnapConvert provides high-speed, lossy and lossless image format conversion across multiple formats (WebP, AVIF, PNG, JPEG, SVG) backed by AWS S3 cloud storage integration and real-time processing status updates powered by SignalR.",
    keyFeatures: [
      "Multi-format batch conversion with concurrent pipeline processing",
      "Real-time progress telemetry and job notifications via SignalR",
      "Direct secure cloud upload and presigned asset delivery on AWS S3",
      "Responsive drag-and-drop web UI with instant preview",
    ],
    techStack: ["React", ".NET 8 Web API", "SignalR", "AWS S3", "TypeScript"],
    role: "Full-Stack Engineer",
    architecture:
      ".NET 8 Web API microservice processing image buffers with SignalR push sockets and React client.",
    highlights: [
      "Sub-second image conversion processing",
      "Zero-server disk persistence with AWS S3 streams",
      "Bi-directional real-time SignalR progress",
    ],
    liveUrl: "https://snapconvert.vercel.app",
    githubUrl: "https://github.com/Nhutduyasda/SnapConvert",
    featured: true,
    category: "Cloud & Media",
    accentColor: "#22D3EE",
    badge: "Cloud & Real-time",
  },
  {
    id: "testify",
    number: "03",
    title: "Testify",
    subtitle: "AI-Powered Task Management & QA Testing Suite",
    description:
      "A task management and quality testing application integrated with AI for automated test case generation and a SendGrid email authentication system.",
    detailedOverview:
      "Testify modernizes software QA workflows by combining agile task management with generative AI capabilities. It automatically analyzes software requirement specs to generate comprehensive test matrices, edge-case scenarios, and automated verification checklists.",
    keyFeatures: [
      "AI-driven automated test case generation from user stories",
      "Transactional email authentication and passwordless magic links via SendGrid",
      "Agile kanban task boards with priority tagging and status progression",
      "REST API test runner integration with exportable test run reports",
    ],
    techStack: ["AI", "SendGrid", "REST API", "React", "TypeScript"],
    role: "Full-Stack & AI Integration Engineer",
    architecture:
      "REST API microservices with OpenAI / LLM function calling and SendGrid transactional email dispatch.",
    highlights: [
      "Achieved 9.9 / 10 score in Graduation Project Defense",
      "Automated 80%+ of repetitive test case drafting",
      "Enterprise email delivery rate > 99.5%",
      "Intuitive task workflow UI",
    ],
    liveUrl: "https://testify-qa.vercel.app",
    githubUrl: "https://github.com/Nhutduyasda/Testify",
    featured: true,
    category: "AI & Productivity",
    accentColor: "#A78BFA",
    badge: "AI-Driven QA",
  },
  {
    id: "dussmann-meal",
    number: "04",
    title: "DussMann Meal",
    subtitle: "Multi-Tenant Enterprise Meal Ordering & Kiosk System",
    description:
      "A multi-tenant enterprise meal ordering system featuring canteen authentication kiosks and role-based department authorization.",
    detailedOverview:
      "Built for enterprise cafeterias and industrial catering facilities, DussMann Meal coordinates large-scale meal reservations across multiple corporate departments. Employees authenticate quickly at on-site kiosk terminals, and caterers receive real-time kitchen preparation manifests.",
    keyFeatures: [
      "Multi-tenant architecture isolating corporate entities and department budgets",
      "Interactive canteen authentication kiosk mode for swift on-site meal check-in",
      "Granular role-based department authorization and meal subsidy tracking",
      "Automated daily catering orders and nutritional ingredient breakdown",
    ],
    techStack: ["ASP.NET Core", "C#", "SQL Server", "JavaScript"],
    role: "Backend & Systems Architect",
    architecture:
      "Modular multi-tenant ASP.NET Core application with tenant-resolver middleware and database schema isolation.",
    highlights: [
      "Zero-wait kiosk authentication during peak shifts",
      "Accurate department billing and meal wastage reduction",
      "Enterprise-grade RBAC security",
    ],
    liveUrl: "https://dussmann-meal.vercel.app",
    githubUrl: "https://github.com/Nhutduyasda/DussMann-Meal",
    featured: true,
    category: "Enterprise Systems",
    accentColor: "#38BDF8",
    badge: "Multi-Tenant Kiosk",
  },
  {
    id: "viberemote",
    number: "05",
    title: "VibeRemote",
    subtitle: "Remote AI Agent Controller & Telegram Worker Mesh",
    description:
      "A remote AI agent controller system connecting local C# workers via Telegram bot.",
    detailedOverview:
      "VibeRemote enables developers and system administrators to orchestrate and monitor autonomous AI agents and local workstation tasks remotely. Commands dispatched via Telegram bots are relayed securely through SignalR real-time sockets to local C# worker daemons.",
    keyFeatures: [
      "Interactive Telegram bot command interface for dispatching AI workloads",
      "Low-latency duplex communication connecting local C# background worker services via SignalR",
      "Real-time terminal log streaming and status alerts returned directly to chat",
      "Cryptographic token verification ensuring authorized device control",
    ],
    techStack: ["C#", "Telegram Bot", "SignalR", ".NET", "AI Agents"],
    role: "Systems & Backend Developer",
    architecture:
      "Distributed command mesh with Telegram Webhook API, centralized SignalR hub, and lightweight local C# agent daemons.",
    highlights: [
      "Zero-configuration remote workstation control",
      "Sub-200ms round-trip command execution via Telegram",
      "Resilient auto-reconnecting worker architecture",
    ],
    liveUrl: "https://t.me/nhutduy_dev",
    githubUrl: "https://github.com/Nhutduyasda/VibeRemote",
    featured: false,
    category: "AI & Automation",
    accentColor: "#F59E0B",
    badge: "AI Agent Controller",
  },
  {
    id: "vietnamese-ocr",
    number: "06",
    title: "Vietnamese Handwriting Recognition",
    subtitle: "Offline Character Recognition with CNN & DINO Vision Transformers",
    description:
      "An offline Vietnamese handwritten character recognition research project combining Convolutional Neural Networks (CNN) and DINO Vision Transformers.",
    detailedOverview:
      "An advanced offline computer vision research project tackling the rich diacritical complexities of Vietnamese handwriting. Combines deep Convolutional Neural Networks (CNN) for spatial feature extraction with self-supervised DINO Vision Transformers for robust sequence and character classification.",
    keyFeatures: [
      "Hybrid model architecture fusing CNN local feature maps with DINO Vision Transformer self-attention",
      "Full offline inference capability without cloud API dependencies",
      "Specialized classification pipeline handling Vietnamese accent marks and tone diacritics",
      "Data augmentation pipeline simulating historical paper artifacts and ink variations",
    ],
    techStack: ["Python", "CNN", "DINO Vision Transformers", "PyTorch", "OpenCV"],
    role: "AI & Deep Learning Researcher",
    architecture:
      "PyTorch deep learning pipeline utilizing self-supervised DINO ViT embeddings paired with CNN feature extractors.",
    highlights: [
      "High recognition accuracy on complex handwritten diacritics",
      "Completely offline, privacy-preserving edge inference",
      "Published research benchmark and evaluation scripts",
    ],
    liveUrl: "https://github.com/Nhutduyasda/Vietnamese-Handwriting-Recognition",
    githubUrl: "https://github.com/Nhutduyasda/Vietnamese-Handwriting-Recognition",
    featured: false,
    category: "Computer Vision & AI",
    accentColor: "#10B981",
    badge: "Deep Learning Research",
  },
];
