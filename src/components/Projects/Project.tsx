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

  const toolColors: Record<string, { bg: string; text: string }> = {
    TypeScript: { bg: "bg-blue-500/20", text: "text-blue-400" },
    JavaScript: { bg: "bg-yellow-500/20", text: "text-yellow-400" },
    React: { bg: "bg-purple-500/20", text: "text-purple-400" },
    "Next.js": { bg: "bg-gray-800/20", text: "text-gray-800" },
    Python: { bg: "bg-blue-500/20", text: "text-blue-400" },
    Flask: { bg: "bg-green-500/20", text: "text-green-400" },
    PostgreSQL: { bg: "bg-blue-600/20", text: "text-blue-600" },
    MongoDB: { bg: "bg-green-500/20", text: "text-green-400" },
    GCP: { bg: "bg-orange-500/20", text: "text-orange-500" },
    Docker: { bg: "bg-blue-500/20", text: "text-blue-400" },
    Redis: { bg: "bg-red-500/20", text: "text-red-500" },
    "LLaMA AI": { bg: "bg-pink-500/20", text: "text-pink-500" },
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
          {project.tools.map((tool) => {
            const colors = toolColors[tool] || {
              bg: "bg-gray-500/20",
              text: "text-gray-500",
            };
            return (
              <span
                key={tool}
                className={`rounded ${colors.bg} ${colors.text} px-2 py-1 text-xs`}
              >
                {tool}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          {project.footer && (
            <span className="text-sm text-[#1A1F2B]/60">{project.footer}</span>
          )}
          {project.link && (
            <a
              href={project.link}
              className="font-semibold text-[#F36B26] transition hover:text-[#d45a1f]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More →
            </a>
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
