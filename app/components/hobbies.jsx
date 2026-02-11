import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    { title: "HIKING", image: "/assets/hiking.png" },
    { title: "ROAD RUN", image: "/assets/road-run.png" },
    { title: "TRAIL RUN", image: "/assets/trail-run.png" },
  ];

  return (
    <section id="hobbies" className="py-16 border-t   min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-12 text-center">My Hobbies</h1>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-40 h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* TITLE */}
              <p className="text-lg font-semibold mt-4 tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
