import { AchievementItem } from "@/types";

export const achievementsData: AchievementItem[] = [
  {
    id: "grad-score",
    value: "9.9",
    label: "GRADUATION PROJECT SCORE",
    sublabel: "FPT Polytechnic Capstone Defense",
    description:
      "Awarded near-perfect 9.9 / 10 score for delivering an enterprise-ready document management ecosystem with full-stack .NET and React architecture.",
    highlight: true,
    badge: "Top Academic Honors",
  },
  {
    id: "fpt-poly",
    value: "FPT POLYTECHNIC",
    label: "ACADEMIC DISTINCTION",
    sublabel: "Software Engineering Curriculum",
    description:
      "Graduated with distinction, demonstrated leadership in technical projects, code review standards, and enterprise architecture.",
    highlight: false,
  },
  {
    id: "full-stack",
    value: "FULL-STACK",
    label: "ENGINEERING MASTERY",
    sublabel: "Frontend + Backend + DB",
    description:
      "Bridging intuitive UX design with robust .NET core systems, high-efficiency SQL queries, and containerized deployment pipelines.",
    highlight: false,
  },
  {
    id: "real-world",
    value: "100%",
    label: "PRODUCTION FOCUS",
    sublabel: "Real-world Product Delivery",
    description:
      "Every project built is engineered to production standards—focusing on reliability, performance, security, and developer ergonomics.",
    highlight: false,
  },
];
