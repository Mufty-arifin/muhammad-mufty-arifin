import Image from "next/image";

export default function Hobbies() {
 
  return (
  <div id="projects" className="px-4 lg:px-20 py-12 border-t-2 min-h-screen">
       <h1 className="text-4xl font-semibold mb-8">Hobbies</h1>
 
       <div className="flex gap-5">
         <div className="flex flex-col items-center">
           <Image
             src="/assets/hiking.png"
             alt="Project Image"
             width={300}
             height={300}
             className="rounded-full w-48 h-48 object-cover"
           />
           <p className="text-2xl font-semibold">HIKING</p>
         </div>
 
         <div className="flex flex-col items-center">
           <Image
             src="/assets/running.png"
             alt="Project Image"
             width={300}
             height={300}
             className="rounded-full w-48 h-48 object-cover"
           />
           <p className="text-2xl font-semibold">RUNNING</p>
         </div>
 
         <div className="flex flex-col items-center">
           <Image
             src="/assets/cycling.png"
             alt="Project Image"
             width={300}
             height={300}
             className="rounded-full w-48 h-48 object-cover"
           />
           <p className="text-2xl font-semibold">CYCLING</p>
         </div>
       </div>
     </div>
  );
}
