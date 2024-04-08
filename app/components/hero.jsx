export default function Hero() {
  return (
    <div id="home" className="min-h-screen lg:px-40 py-24 border-t-2">
      <div >
        <p className="text-[16px] leading-6">Hey There!, my name is</p>
      </div>
      <div className="text-[32px] lg:text-[80px] font-bold leading-[48px] lg:leading-[120px] py-[20px]">
        <h1>Muhammad Mufty Arifin.</h1>
        <p>Passionate Front-End Developer.</p>
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
