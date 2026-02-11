import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Web Profil dan PPDB Nurul Wathan",
    description:
      "Web profil dan sistem PPDB yang dibuat saat kerja praktek menggunakan PHP, CodeIgniter, MySQL, Bootstrap.",
    image: "/assets/webprofile.jpg",
    github:
      "https://github.com/Mufty-arifin/Kerja_Praktek_Web_Profile_dan_PPDB",
  },
  {
    title: "Dapur Lezat",
    description:
      "Mini project bootcamp untuk membuat website restoran responsive menggunakan HTML, CSS, Bootstrap dan JavaScript.",
    image: "/assets/frame.svg",
    github: "https://github.com/Mufty-arifin/dapurLezat",
  },
  {
    title: "Dapur Lezat 2",
    description:
      "Mini project bootcamp untuk membuat website restoran responsive menggunakan HTML, CSS, Bootstrap dan JavaScript.",
    image: "/assets/frame.svg",
    github: "https://github.com/Mufty-arifin/dapurLezat",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t min-h-screen">
      <div className=" mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-xl font-semibold">{project.title}</h2>

                <p className="text-sm text-gray-600">{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-black transition"
                >
                  Source Code
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
