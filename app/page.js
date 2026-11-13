import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Hobbies from "./components/hobbies";
import Contact from "./components/contact"; //
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
