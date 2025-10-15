import type { ProjectType } from "./projectData";

type ProjectProps = {
  project: ProjectType;
  index: number;
};

export default function Project({ project, index }: ProjectProps) {
  const backgroundColors = [
    "from-[#F36B26]/20 via-[#F36B26]/10 to-[#FAF8F5]",
    "from-[#1A1F2B]/15 via-[#F36B26]/10 to-[#FAF8F5]",
    "from-[#F36B26]/15 via-[#FAF8F5] to-[#1A1F2B]/10",
    "from-[#FAF8F5] via-[#F36B26]/10 to-[#1A1F2B]/15",
    "from-[#F36B26]/25 via-[#1A1F2B]/10 to-[#FAF8F5]",
  ];

  const borderColors = [
    "hover:border-[#F36B26]",
    "hover:border-[#F36B26]",
    "hover:border-[#F36B26]",
    "hover:border-[#F36B26]",
    "hover:border-[#F36B26]",
  ];

  const toolColors: Record<string, string> = {
    TypeScript: "blue",
    JavaScript: "yellow",
    React: "purple",
    "Next.js": "black",
    Python: "blue",
    Flask: "green",
    PostgreSQL: "blue",
    MongoDB: "green",
    GCP: "orange",
    Docker: "blue",
    Redis: "red",
    "LLaMA AI": "pink",
  };

  return (
    <div
      className={`group overflow-hidden rounded-lg border-2 border-[#1A1F2B] bg-white transition hover:shadow-lg ${borderColors[index]}`}
    >
      <div
        className={`flex h-48 items-center justify-center bg-gradient-to-br ${backgroundColors[index]}`}
      >
        <span className="text-6xl">{project.icon}</span>
      </div>
      <div className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-[#1A1F2B]">
          {project.title}
        </h4>
        <p className="mb-4 text-[#1A1F2B]/70">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className={`rounded bg-${toolColors[tool]}-500/20 px-2 py-1 text-xs text-${toolColors[tool]}-400`}
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {project.footer && (
            <span className="text-sm text-[#1A1F2B]/60">{project.footer}</span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              className="font-semibold text-[#F36B26] transition hover:text-[#d45a1f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="font-semibold text-[#F36B26] transition hover:text-[#d45a1f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
