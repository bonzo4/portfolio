import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-[#1A1F2B]/10 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-2xl font-bold text-[#F36B26]">Alonzo Sabino</h1>
          </div>
          <div className="flex gap-6">
            <a
              href="#about"
              className="font-medium text-[#1A1F2B] transition hover:text-[#F36B26]"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-medium text-[#1A1F2B] transition hover:text-[#F36B26]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-medium text-[#1A1F2B] transition hover:text-[#F36B26]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="font-medium text-[#1A1F2B] transition hover:text-[#F36B26]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
