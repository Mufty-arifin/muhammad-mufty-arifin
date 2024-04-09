import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Skills() {
  return (
    <div id="skills" className="px-4 lg:px-20 py-12 border-t-2 min-h-screen">
      <h1 className="text-5xl font-semibold">Skills</h1>
      <Tabs defaultValue="account" className="mt-5 mb-5">
        <TabsList className="w-full lg:mb-2 mb-20 gap-5 lg:gap-10 flex flex-wrap ">
          <TabsTrigger value="account">Programming Languages</TabsTrigger>
          <TabsTrigger value="language">Libraries & Frameworks</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-wrap justify-start gap-5 py-10">
            {/* Your programming languages content */}
          </div>
        </TabsContent>
        <TabsContent value="language">
          <div className="flex flex-wrap justify-start gap-5 py-10">
            Change your password here.
          </div>
        </TabsContent>
        <TabsContent value="database">
          <div className="flex flex-wrap justify-start gap-5 py-10">MySQL</div>
        </TabsContent>
        <TabsContent value="design">
          <div className="flex flex-wrap justify-start gap-5 py-10">
            Figma, Photoshop
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
