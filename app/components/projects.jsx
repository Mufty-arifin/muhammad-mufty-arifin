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
    tags: ["CodeIgniter", "PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Dapur Lezat",
    description:
      "Mini project bootcamp untuk membuat website restoran responsive menggunakan HTML, CSS, Bootstrap dan JavaScript.",
    image: "/assets/frame.svg",
    github: "https://github.com/Mufty-arifin/dapurLezat",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Dapur Lezat 2",
    description:
      "Mini project bootcamp untuk membuat website restoran responsive menggunakan HTML, CSS, Bootstrap dan JavaScript.",
    image: "/assets/frame.svg",
    github: "https://github.com/Mufty-arifin/dapurLezat",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
            Beberapa karya dan proyek yang telah saya kembangkan selama
            perjalanan belajar.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 h-[220px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay tipis saat hover */}
                <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/25 active:scale-[0.98]"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
