"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  let lastScroll = 0;

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
  ];

  // Handle scroll (optimized)
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
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <div className="flex justify-between items-center rounded-xl bg-white/70 backdrop-blur-md shadow-md px-4 py-3">
          {/* LOGO */}
          <span className="text-2xl font-bold">Mufty Arifin</span>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            ☰
          </button>

          {/* MENU */}
          <ul
            className={`absolute lg:static top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent shadow-md lg:shadow-none
            lg:flex gap-8 font-semibold
            ${menuOpen ? "block" : "hidden"} lg:block`}
          >
            {navLinks.map((link) => (
              <li key={link.id} className="p-4 lg:p-0 text-center">
                <button
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`transition hover:text-gray-500 ${
                    selectedSection === link.id ? "text-gray-500" : "text-black"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
