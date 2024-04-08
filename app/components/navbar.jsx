"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setSelectedSection(sectionId);
    // Set hash fragment in the URL
   
    // Optionally, you can scroll to the selected section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:px-40">
      <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:px-40 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between rounded-[1rem] mx-auto p-5 mt-5 backdrop-blur-lg bg-[#e5e7eb57]">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mufty Arifin
            </span>
          </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
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
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:bg-gray-800 :dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={() => handleNavLinkClick("home")}
                  className={`block py-2 px-3 rounded md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${
                    selectedSection === "hero"
                      ? "text-white bg-blue-700"
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
                  className={`block py-2 px-3 rounded md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${
                    selectedSection === "skills"
                      ? "text-white bg-blue-700"
                      : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={
                    selectedSection === "skills" ? "page" : undefined
                  }
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavLinkClick("projects")}
                  className={`block py-2 px-3 rounded md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent ${
                    selectedSection === "projects"
                      ? "text-white bg-blue-700"
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
    </div>
  );
}
