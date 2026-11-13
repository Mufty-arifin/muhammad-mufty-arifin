"use client";
import { useState } from "react";
// Impor ikon dari lucide-react
import { Github, Linkedin, Instagram } from "lucide-react"; 

export default function Footer() {
  const [selectedSection, setSelectedSection] = useState("");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavLinkClick = (sectionId) => {
    setSelectedSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* WEBSITE INFO */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Muhammad Mufty Arifin
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
            Frontend Developer passionate about building modern web experiences
            and clean UI.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-4">
            Navigation
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavLinkClick(link.id)}
                  className="relative text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition group text-left"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-indigo-600 dark:bg-indigo-500 w-0 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL MEDIA DENGAN IKON */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-4">
            Socials
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/muftyarifin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Mufty-arifin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/mftyfn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-slate-200 dark:border-slate-900 py-6 text-center text-xs text-slate-500 transition-colors">
        © 2026 Muhammad Mufty Arifin — Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}