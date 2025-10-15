export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#1A1F2B] bg-[#FAF8F5] px-6 py-8">
      <div className="container mx-auto text-center text-[#1A1F2B]/70">
        <p>
          © {year} Alonzo Sabino. Built with React, TypeScript, and Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
}
