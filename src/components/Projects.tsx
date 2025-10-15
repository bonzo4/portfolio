import Project from "./Projects/Project";
import { PROJECT_DATA } from "./Projects/projectData";

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h3 className="mb-12 text-center text-4xl font-bold text-[#1A1F2B]">
          Featured Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECT_DATA.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
