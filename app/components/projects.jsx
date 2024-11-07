import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" py-12 border-t-2 min-h-screen"
    >
      <h1 className="text-4xl font-semibold mb-8">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Card className="rounded-md overflow-hidden shadow-md">
          <Image
            src="/assets/webprofile.jpg"
            alt="Project Image"
            width={350}
            height={350}
            className="rounded-t-md w-full"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">
              Web Profil dan PPDB Nurul Wathan
            </h2>
            <p className="text-lg mb-4"></p>
            <a href=""></a>
            <button className="bg-gray-500 text-white rounded-[10px] px-4 py-2"></button>
          </div>
        </Card>
        <Card className="rounded-md overflow-hidden shadow-md">
          <Image
            src="/assets/frame.svg"
            alt="Project Image"
            width={350}
            height={350}
            className="rounded-t-md w-full"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Dapur Lezat</h2>
            <p className="text-lg mb-4">
              Mini project from bootcamp to create a responsive restaurant
              website using HTML/CSS, Bootstrap, and JavaScript.
            </p>
            <button className="bg-gray-500 text-white rounded-[10px] px-4 py-2">
              Source Code
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
