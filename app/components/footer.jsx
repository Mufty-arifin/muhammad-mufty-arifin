"use client";
import { useState } from "react";

export default function Footer() {
  const [selectedSection, setSelectedSection] = useState("");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavLinkClick = (sectionId) => {
    setSelectedSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        {/* WEBSITE INFO */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Muhammad Mufty</h2>

          <p className="text-gray-500 leading-relaxed">
            Frontend Developer passionate about building modern web experiences
            and clean UI.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavLinkClick(link.id)}
                  className="relative font-medium text-gray-500 hover:text-black transition group"
                >
                  {link.label}

                  {/* hover underline only */}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social</h2>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/muftyarifin/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Mufty-arifin"
              target="_blank"
              className="hover:scale-110 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/mftyfn"
              target="_blank"
              className="hover:scale-110 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* bottom copyright */}
      <div className="border-t py-6 text-center text-sm text-gray-400">
        © 2026 Muhammad Mufty — Built with Next.js & Tailwind
      </div>
    </footer>
  );
}
