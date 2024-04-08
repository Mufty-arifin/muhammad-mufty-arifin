import Image from "next/image";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer />
    </>
  );
}
