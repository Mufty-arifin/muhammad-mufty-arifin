import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Skills() {
  return (
    <div id="skills" className="lg:px-40 border-t-2 h-screen py-24">
      <h1 className="text-[40px] font-semibold">Skills</h1>
      <Tabs defaultValue="account" className="">
        <TabsList className="w-full justify-center gap-10 flex">
          <TabsTrigger value="account">Web Development</TabsTrigger>
          <TabsTrigger value="language">Programming Language</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Html, CSS, Bootstrap, Tailwind
        </TabsContent>
        <TabsContent value="language">Change your password here.</TabsContent>
        <TabsContent value="database">Database</TabsContent>
      </Tabs>
    </div>
  );
}
