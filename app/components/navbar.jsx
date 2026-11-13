"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();

  let lastScroll = 0;

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 200 || currentScroll < lastScroll) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId) => {
    setSelectedSection(sectionId);
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto mt-4 px-6">
        <div className="flex justify-between items-center rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl px-6 py-4 transition-colors duration-300">
          {/* LOGO */}
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Mufty Arifin
          </span>

          <div className="flex items-center gap-4">
            {/* MENU DESKTOP & MOBILE */}
            <ul
              className={`absolute lg:static top-full left-0 w-full lg:w-auto
              bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent 
              border-b border-slate-200 dark:border-slate-800 lg:border-none shadow-lg lg:shadow-none
              lg:flex items-center gap-8 font-medium
              ${menuOpen ? "block" : "hidden"} lg:block`}
            >
              {navLinks.map((link) => (
                <li key={link.id} className="p-4 lg:p-0 text-center">
                  <button
                    onClick={() => handleNavLinkClick(link.id)}
                    className={`text-sm transition-colors ${
                      selectedSection === link.id
                        ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              {theme === "dark" ? (
                /* Ikon Matahari (untuk pindah ke Light Mode) */
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                /* Ikon Bulan (untuk pindah ke Dark Mode) */
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
