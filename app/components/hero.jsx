"use client";
import TypeIt from "typeit-react";
export default function Hero() {
  return (
    <div id="home" className="min-h-screen max-lg:py-60 lg:px-40 py-24 border-t-2">
      <div>
        <TypeIt
          options={{ loop: true }}
          getBeforeInit={(instance) => {
            instance
              .type("Hey There!, my name is")
              .pause(2000)
              .delete(22)
              .pause(500)
              .type("const myName = () =>");

            // Remember to return it!
            return instance;
          }}
          className="text-[20px] leading-6 font-semibold"
        />
      </div>
      <div>
        <h1 className="text-[32px]  md:text-[70px] md:font-semibold font-bold leading-[48px] md:leading-[100px] tracking-[1.6px]">
          Muhammad Mufty Arifin.
        </h1>
        <p className="text-[32px]  md:text-[70px] md:font-semibold font-bold leading-[48px] md:leading-[100px] ">
          Passionate Front-End Developer.
        </p>
      </div>
      <div className="py-[20px]">
        <p className="text-[14px] lg:text-[16px] font-semibold leading-[25.6px]">
          a graduate majoring in information engineering, my interest in
          programming and computers sparked a lifelong interest. Constantly
          learning and developing, I strive to make a big impact through
          innovative solutions and visionary ideas, shaping the future with my
          unwavering commitment to technological advancement.
        </p>
      </div>
      <div className="flex gap-6">
        <button className=" border-2 rounded-3xl px-6 py-3 text-[16px] font-bold">
          LinkedIn
        </button>
        <button className=" border-2 rounded-3xl px-6 py-3 text-[16px] font-bold">
          CV
        </button>
      </div>
    </div>
  );
}
