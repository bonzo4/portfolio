import profileImage from "../assets/profile.JPG";

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl text-center">
        <img
          src={profileImage}
          alt="Alonzo Sabino"
          className="mx-auto mb-8 h-48 w-48 rounded-full object-cover ring-4 ring-[#F36B26]/50"
        />
        <h2 className="mb-6 text-6xl font-bold text-[#F36B26]">
          Hi, I'm Alonzo Sabino
        </h2>
        <p className="mb-8 text-2xl text-[#1A1F2B]">
          Full Stack Developer | Co-Founder | Computer Science Student
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-[#1A1F2B]/80">
          Entrepreneurial developer with 2+ years of experience building
          scalable applications. Co-founded a startup serving 2,000+ communities
          and passionate about building innovative user experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-[#F36B26] px-8 py-3 font-semibold text-white transition hover:bg-[#d45a1f]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-[#1A1F2B] px-8 py-3 font-semibold text-[#1A1F2B] transition hover:bg-[#1A1F2B] hover:text-white"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
