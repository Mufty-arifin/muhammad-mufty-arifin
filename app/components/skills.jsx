"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
  const skillCategories = {
    language: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "PHP", icon: "🐘" },
    ],
    libraries: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "CodeIgniter", icon: "🔥" },
      { name: "Laravel", icon: "🔴" },
    ],
    database: [{ name: "MySQL", icon: "🗄️" }],
    design: [
      { name: "Figma", icon: "🎨" },
      { name: "UI/UX Design", icon: "✨" },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
            Teknologi dan alat yang saya kuasai untuk membangun aplikasi web
            modern.
          </p>
        </div>

        <Tabs defaultValue="language" className="w-full">
          <TabsList className="w-full h-auto flex flex-wrap justify-start gap-3 bg-slate-200/80 dark:bg-slate-900 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 mb-12 transition-colors">
            {["language", "libraries", "database", "design"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-slate-600 dark:text-slate-300 font-medium px-6 py-3 rounded-xl transition-all duration-300 data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:shadow-lg data-[state=active]:shadow-indigo-600/30 hover:text-slate-900 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800 capitalize"
              >
                {tab === "language"
                  ? "Programming Languages"
                  : tab === "libraries"
                    ? "Libraries & Frameworks"
                    : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, items]) => (
            <TabsContent
              key={key}
              value={key}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full animate-in fade-in-50 duration-500">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-indigo-500 hover:bg-slate-100/50 dark:hover:bg-slate-900 hover:-translate-y-1.5 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
