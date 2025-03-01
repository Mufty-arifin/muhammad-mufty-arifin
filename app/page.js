import Image from "next/image";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
<<<<<<< HEAD
import Hobies from "./components/hobies";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Hobies/>
=======
import Hobbies from "./components/hobbies";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero/>
      <Skills/>
      <Projects/>
      <Hobbies/>
>>>>>>> 86f9e866f915db872875a3b638415284e791c56f
      <Footer />

    </div>
  );
}
