import Project from "./Project";
import { PROJECT_DATA } from "./projectData";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900/50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h3 className="mb-12 text-center text-4xl font-bold">
          Featured Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECT_DATA.map((project, index) => (
            <Project key={project.title} project={project} index={index % 5} />
          ))}

          {/*           
          <div className="group overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 transition hover:border-blue-500">
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-6xl">📰</span>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-xl font-semibold">
                NTWRK Media - Discord Newsletter App
              </h4>
              <p className="mb-4 text-gray-400">
                Top-ranked Discord Newsletter Application used by 2,000+
                communities. Tracked 2M+ views and 300,000+ interactions.
                Contributed to $200,000+ in revenue.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-400">
                  TypeScript
                </span>
                <span className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-400">
                  MongoDB
                </span>
                <span className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-400">
                  React
                </span>
                <span className="rounded bg-orange-500/20 px-2 py-1 text-xs text-orange-400">
                  GCP
                </span>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 transition hover:border-purple-500">
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
              <span className="text-6xl">⚔️</span>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-xl font-semibold">Code Duels</h4>
              <p className="mb-4 text-gray-400">
                Real-time competitive programming web app. Led a team of 3
                developers with React/Next.js frontend and Python/Flask backend
                with WebSocket communication.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-400">
                  React
                </span>
                <span className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-400">
                  Next.js
                </span>
                <span className="rounded bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">
                  Python/Flask
                </span>
                <span className="rounded bg-red-500/20 px-2 py-1 text-xs text-red-400">
                  Redis
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-sm text-gray-500">
                  Senior Project (In Progress)
                </span>
                <a
                  href="https://code-duels-web-app-production.up.railway.app/"
                  className="text-blue-400 transition hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo →
                </a>
              </div>
            </div>
          </div>
          <div className="group overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 transition hover:border-pink-500">
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-pink-500 to-orange-600">
              <span className="text-6xl">🗺️</span>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-xl font-semibold">Annulive</h4>
              <p className="mb-4 text-gray-400">
                AI-powered social media app that generates personalized learning
                roadmaps using LLaMA. Built for Boot.dev 2025 Hackathon.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded bg-blue-500/20 px-2 py-1 text-xs text-blue-400">
                  React
                </span>
                <span className="rounded bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">
                  Python/Flask
                </span>
                <span className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-400">
                  MongoDB
                </span>
                <span className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-400">
                  LLaMA AI
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://annu.live/"
                  className="text-blue-400 transition hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo →
                </a>
                <a
                  href="https://github.com/bonzo4/annulive"
                  className="text-blue-400 transition hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo →
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
