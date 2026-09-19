export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedOverview: string;
  keyFeatures: string[];
  techStack: string[];
  role: string;
  architecture: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  accentColor: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  category: string;
  level: number; // 0 - 100
  experience: string;
  description: string;
  isCore?: boolean;
}

export interface TimelineItem {
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge?: string;
  isCurrent?: boolean;
  score?: string;
  company?: string;
  period?: string;
}

export interface AchievementItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  description: string;
  highlight?: boolean;
  badge?: string;
  projectLink?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  href: string;
  icon: string;
  displayValue: string;
}
