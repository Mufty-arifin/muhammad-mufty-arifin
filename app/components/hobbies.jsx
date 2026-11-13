import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    {
      title: "HIKING",
      description: "Menjelajahi alam bebas dan pegunungan.",
      image: "/assets/hiking.png",
    },
    {
      title: "ROAD RUN",
      description: "Latihan lari konsisten di jalan raya pagi hari.",
      image: "/assets/road-run.png",
    },
    {
      title: "TRAIL RUN",
      description: "Menantang adrenalin di jalur alam terbuka.",
      image: "/assets/trail-run.png",
    },
  ];

  return (
    <section
      id="hobbies"
      className="py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
    >
      {/* Container Sejajar */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            My Hobbies & Interests
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base">
            Kegiatan luar ruangan yang menjaga keseimbangan energi dan fokus
            saya.
          </p>
        </div>

        {/* GRID Penuh Selebar Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 hover:bg-slate-100/50 dark:hover:bg-slate-900 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 bg-slate-100 dark:bg-white flex items-center justify-center p-4 border-2 border-slate-200 dark:border-slate-700 group-hover:border-indigo-400 transition-all duration-300 shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain w-28 h-28 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg font-bold tracking-wide text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}