import Image from "next/image";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Hobbies from "./components/hobbies";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero/>
      <Skills/>
      <Projects/>
      <Hobbies/>
      <Footer />

    </div>
  );
}
