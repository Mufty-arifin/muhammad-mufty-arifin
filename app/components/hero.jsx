"use client";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen px-4 lg:px-20 py-24 border-t-2 max-lg:py-32"
    >
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
          className="text-xl lg:text-2xl font-semibold"
        />
      </div>
      <div className="mb-12">
        <h1 className="text-4xl lg:text-7xl font-bold leading-12 lg:leading-20 tracking-wide">
          Muhammad Mufty Arifin
        </h1>
        <p className="text-4xl lg:text-7xl font-bold leading-12 lg:leading-20">
          Passionate Front-End Developer
        </p>
      </div>
      <div className="mb-8">
        <p className="text-[12px] lg:text-lg font-semibold leading-[25.6px]">
          A graduate majoring in information engineering, my interest in
          programming and computers sparked a lifelong passion. Constantly
          learning and developing, I strive to make a big impact through
          innovative solutions and visionary ideas, shaping the future with my
          unwavering commitment to technological advancement.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <button className="border-2 rounded-3xl px-6 py-3 text-lg font-bold">
          LinkedIn
        </button>
        <button className="border-2 rounded-3xl px-6 py-3 text-lg font-bold">
          CV
        </button>
      </div>
    </div>
  );
}
