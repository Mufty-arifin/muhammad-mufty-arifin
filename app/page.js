import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="lg:pt-24 pt-32 ">
        <p className="text-[16px] leading-6">Hey There!, my name is</p>
      </div>
      <div className="text-[80px] font-bold leading-[120px] py-[20px]">
        <h1>Muhammad Mufty Arifin.</h1>
        <p>Passionate Front-End Developer.</p>
      </div>
      <div className="py-[20px]">
        <p className="text-[16px] font-semibold leading-[25.6px]">
          From an early age, my fascination with programming and computers
          ignited a lifelong passion. Constantly learning and developing, I
          strive to make a profound impact through innovative solutions and
          visionary ideas, shaping the future with my unwavering commitment to
          technological advancement.
        </p>
      </div>
      <button className=" border-2 rounded-3xl px-6 py-3 text-[16px] font-bold">
        LinkedIn
      </button>
    </>
  );
}
