export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h3 className="mb-8 text-center text-4xl font-bold text-[#1A1F2B]">
          About Me
        </h3>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-[#1A1F2B]/90">
              I'm a Computer Science student and entrepreneurial developer with
              2+ years of experience in full-stack development. I co-founded
              NTWRK Media where I led technical development, creating a
              top-ranked Discord Newsletter Application used by 2,000+
              communities and contributing to $200,000+ in revenue.
            </p>
            <p className="mb-4 text-[#1A1F2B]/90">
              I specialize in architecting and deploying scalable applications
              using modern technologies like TypeScript, React, Node.js, and
              cloud infrastructure. I'm passionate about solving complex
              problems with clean, efficient code.
            </p>
            <p className="text-[#1A1F2B]/90">
              Currently finishing my B.S. in Computer Science at the University
              of Tulsa and working on Code Duels as my senior project.
            </p>
          </div>
          <div className="rounded-lg border-2 border-[#1A1F2B] bg-gradient-to-br from-[#F36B26]/10 to-[#F36B26]/5 p-8">
            <h4 className="mb-4 text-xl font-semibold text-[#F36B26]">
              Quick Facts
            </h4>
            <ul className="space-y-2 text-[#1A1F2B]/90">
              <li>📍 Location: Tulsa, OK</li>
              <li>🎓 Education: B.S. Computer Science (Expected Dec 2025)</li>
              <li>💼 Previously: Lead Developer & Co-Founder at NTWRK Media</li>
              <li>
                🚀 Interests: Full-Stack Development, AI, Cloud Architecture
              </li>
              <li>📧 Email: alonzo.sabino4@gmail.com</li>
              <li>🌐 Website: bonzodev.live</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
