export default function Skills() {
  return (
    <section id="skills" className="bg-[#FAF8F5] px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h3 className="mb-12 text-center text-4xl font-bold text-[#1A1F2B]">
          Skills & Technologies
        </h3>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg border-2 border-[#1A1F2B] bg-white p-6 transition hover:border-[#F36B26] hover:shadow-lg">
            <h4 className="mb-4 text-xl font-semibold text-[#F36B26]">
              Frontend
            </h4>
            <ul className="space-y-2 text-[#1A1F2B]/90">
              <li>• React</li>
              <li>• Next.js</li>
              <li>• TypeScript</li>
              <li>• HTML/CSS</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-[#1A1F2B] bg-white p-6 transition hover:border-[#F36B26] hover:shadow-lg">
            <h4 className="mb-4 text-xl font-semibold text-[#F36B26]">
              Backend
            </h4>
            <ul className="space-y-2 text-[#1A1F2B]/90">
              <li>• Node.js/Express</li>
              <li>• Python / Flask</li>
              <li>• C/C++</li>
              <li>• Rust</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-[#1A1F2B] bg-white p-6 transition hover:border-[#F36B26] hover:shadow-lg">
            <h4 className="mb-4 text-xl font-semibold text-[#F36B26]">
              Database
            </h4>
            <ul className="space-y-2 text-[#1A1F2B]/90">
              <li>• PostgreSQL</li>
              <li>• MongoDB</li>
              <li>• Redis</li>
              <li>• Supabase</li>
            </ul>
          </div>
          <div className="rounded-lg border-2 border-[#1A1F2B] bg-white p-6 transition hover:border-[#F36B26] hover:shadow-lg">
            <h4 className="mb-4 text-xl font-semibold text-[#F36B26]">
              DevOps & Tools
            </h4>
            <ul className="space-y-2 text-[#1A1F2B]/90">
              <li>• Docker</li>
              <li>• Google Cloud Platform</li>
              <li>• GitHub Actions</li>
              <li>• VS Code</li>
              <li>• Ubuntu</li>
              <li>• Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
