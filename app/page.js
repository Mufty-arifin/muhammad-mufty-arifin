import Image from "next/image";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

import Hobbies from "./components/hobbies";

export default function Home() {
  return (
    <div className="px-4 lg:px-20">
      <Hero />
      <Skills />
      <Projects />
      <Hobbies />
      <Footer />
    </div>
  );
}
