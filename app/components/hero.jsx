"use client";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Container Sejajar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="mb-8">
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Hey there, my name is")
                .pause(2000)
                .delete(22)
                .pause(500)
                .type("const myName = () =>");
              return instance;
            }}
            className="text-xl lg:text-2xl font-semibold text-indigo-400 font-mono"
          />
        </div>

        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-5 tracking-tight">
            Muhammad Mufty Arifin
          </h1>
          <p className="text-4xl lg:text-6xl font-bold bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Passionate Front-End Developer
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <p className="text-sm lg:text-base font-normal dark:bg-slate-950 dark:text-white leading-relaxed">
            A graduate majoring in information engineering, my interest in
            programming and computers sparked a lifelong passion. Constantly
            learning and developing, I strive to make a big impact through
            innovative solutions and visionary ideas, shaping the future with my
            unwavering commitment to technological advancement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-8 py-3 text-lg text-center font-semibold transition-all shadow-lg shadow-indigo-500/25"
            href="https://www.linkedin.com/in/muftyarifin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 dark:bg-slate-950 dark:text-white rounded-full px-8 py-3 text-lg font-semibold transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
