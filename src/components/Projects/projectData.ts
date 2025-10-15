export type ProjectType = {
  icon: string;
  title: string;
  description: string;
  tools: string[];
  footer?: string;
  link?: string;
  demo?: string;
  github?: string;
};

export const PROJECT_DATA: ProjectType[] = [
  {
    icon: "📰",
    title: "NTWRK Media - Discord Newsletter App",
    description:
      "Top-ranked Discord Newsletter Application used by 2,000+ communities. Tracked 2M+ views and 300,000+ interactions. Contributed to $200,000+ in revenue.",
    tools: ["TypeScript", "PostgreSQL", "React", "GCP"],
  },
  {
    icon: "⚔️",
    title: "Code Duels",
    description:
      "Real-time competitive programming web app. Led a team of 3 developers with React/Next.js frontend and Python/Flask backend with WebSocket communication.",
    tools: ["React", "Next.js", "Python", "Flask", "Redis"],
    footer: "Senior Project (In Progress)",
    demo: "https://code-duels-web-app-production.up.railway.app/",
  },
  {
    icon: "🗺️",
    title: "Annulive",
    description:
      "AI-powered social media app that generates personalized learning roadmaps using LLaMA. Built for Boot.dev 2025 Hackathon.",
    tools: ["React", "Python", "MongoDB", "LLaMA AI"],
    demo: "https://annu.live/",
    github: "https://github.com/bonzo4/annulive",
  },
];
