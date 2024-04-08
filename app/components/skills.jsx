import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Skills() {
  return (
    <div id="skills" className="lg:px-40 border-t-2 h-screen py-24">
      <h1 className="text-[40px] font-semibold">Skills</h1>
      <Tabs defaultValue="account" className="">
        <TabsList className="w-full justify-center gap-10 flex">
          <TabsTrigger value="account">Programming Languages</TabsTrigger>
          <TabsTrigger value="language">Libraries & Framework</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className=" flex flex-wrap justify-start gap-5 py-10">
            <svg
              width="200"
              height="200"
              viewBox="-52.5 0 361 361"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
                fill="#00000"
              />
              <path
                d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
                fill="#00000"
              />
              <path
                d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
                fill="#EBEBEB"
              />
              <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
              <path
                d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
                fill="#FFF"
              />
            </svg>

            <svg
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50159 0H10.0797V1.07812H8.57971V2.15625H10.0797V3.23438H7.50159V0Z"
                fill="#000000"
              />
              <path
                d="M10.5953 0H13.1735V0.9375H11.6735V1.125H13.1735V3.28125H10.5953V2.29688H12.0953V2.10938H10.5953V0Z"
                fill="#000000"
              />
              <path
                d="M13.6891 0H16.2672V0.9375H14.7672V1.125H16.2672V3.28125H13.6891V2.29688H15.1891V2.10938H13.6891V0Z"
                fill="#000000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9912 24L5.04739 22.0723L3 4.71655H21L18.9541 22.0696L11.9912 24ZM7.04736 12.5727L7.23814 14.7013L14.6153 14.7013L14.3682 17.4619L11.9941 18.1027L11.992 18.1034L9.62135 17.4633L9.4698 15.7656H7.33301L7.63123 19.1079L11.9915 20.3183L16.3579 19.1078L16.8901 13.1443L16.9421 12.5727L17.3264 8.26428H6.66406L6.85756 10.3929H14.9936L14.7999 12.5727L7.04736 12.5727Z"
                fill="#000000"
              />
            </svg>
          </div>
        </TabsContent>
        <TabsContent value="language">Change your password here.</TabsContent>
        <TabsContent value="database">MYSQL</TabsContent>
        <TabsContent value="design">Figma, Photoshop</TabsContent>
      </Tabs>
    </div>
  );
}
