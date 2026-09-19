import { AchievementItem } from "@/types";

export const achievementsData: AchievementItem[] = [
  {
    id: "grad-score",
    value: "9.9",
    label: "GRADUATION PROJECT SCORE",
    sublabel: "FPT Polytechnic Capstone Defense",
    description:
      "Successfully defended my Graduation Project, achieving an outstanding personal score of 9.9 for ShoeDocX — an import-export document management platform for shoe manufacturing enterprises.",
    highlight: true,
    badge: "Top Academic Honors",
    projectLink: "shoedocx",
  },
  {
    id: "fpt-poly",
    value: "FPT POLYTECHNIC",
    label: "ACADEMIC DISTINCTION",
    sublabel: "Software Engineering Curriculum",
    description:
      "Graduated with distinction, demonstrated leadership in enterprise software architecture, full-stack .NET development, and OCR integration.",
    highlight: false,
  },
  {
    id: "full-stack",
    value: "FULL-STACK & AI",
    label: "ENGINEERING MASTERY",
    sublabel: "C# .NET • React • Computer Vision",
    description:
      "Bridging robust ASP.NET Core Web API backends, real-time SignalR sockets, modern React interfaces, and deep learning vision pipelines.",
    highlight: false,
  },
  {
    id: "real-world",
    value: "100%",
    label: "PRODUCTION & ENTERPRISE",
    sublabel: "5S Group Internship & Live Systems",
    description:
      "Participated in enterprise software development at 5S Group. Every project is engineered with domain accuracy, clean code, and production reliability.",
    highlight: false,
  },
];
