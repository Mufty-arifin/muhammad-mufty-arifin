"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to handle scrolling
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Show navbar if scrolled to the top or scrolling up
    setVisible(
      currentScrollPos < 200 || prevScrollPos > currentScrollPos
    );

    // Set previous scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavLinkClick = (sectionId) => {
    setSelectedSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`  dark:bg-gray-900 dark:border-gray-700 fixed w-full z-20 top-0 start-0 transition-all ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between rounded-md mx-auto p-2 mt-5 bg-opacity-90 bg-[#dfdfdf] dark:bg-transparent">
        <a href="#home" className="flex items-center space-x-3">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mufty Arifin
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full lg:w-auto ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col lg:flex-row font-medium p-4 lg:p-0 border border-gray-100 rounded-md lg:space-x-8 lg:border-0 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <button
                onClick={() => handleNavLinkClick("home")}
                className={`block py-2 px-3 rounded md:dark:text-black dark:bg-gray-300 md:dark:bg-transparent ${
                  selectedSection === "home"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={selectedSection === "home" ? "page" : undefined}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("skills")}
                className={`block py-2 px-3 rounded md:dark:text-black dark:bg-gray-300 md:dark:bg-transparent ${
                  selectedSection === "skills"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={selectedSection === "skills" ? "page" : undefined}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavLinkClick("projects")}
                className={`block py-2 px-3 rounded md:dark:text-black dark:bg-gray-300 md:dark:bg-transparent ${
                  selectedSection === "projects"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  selectedSection === "projects" ? "page" : undefined
                }
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
