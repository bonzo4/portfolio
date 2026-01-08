export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="mb-8 text-4xl font-bold text-[#1A1F2B]">
          Let's Work Together
        </h3>
        <p className="mb-12 text-xl text-[#1A1F2B]/90">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
        <div className="mb-12 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:alonzo.sabino4@gmail.com"
            className="flex items-center gap-2 rounded-lg bg-[#1A1F2B] px-6 py-3 text-white transition hover:bg-[#F36B26]"
          >
            <span>📧</span> Email
          </a>
          <a
            href="https://github.com/bonzo4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#1A1F2B] px-6 py-3 text-white transition hover:bg-[#F36B26]"
          >
            <span>💻</span> GitHub
          </a>
        </div>
        <div className="rounded-lg border-2 border-[#1A1F2B] bg-gradient-to-br from-[#F36B26]/10 to-[#F36B26]/5 p-8">
          <p className="mb-2 text-[#1A1F2B]/90">📍 Based in Tulsa, OK</p>
          <p className="text-[#1A1F2B]/90">
            🎓 Available for full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
