import { Cog, House, LineChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

import HomeTab from "./HomeTab";

const TabPage = () => {
  return (
    <Tabs
      defaultValue="home"
      className="flex flex-col min-h-screen justify-between align-center"
    >
      <TabsContent value="home">
        <HomeTab />
      </TabsContent>
      <TabsContent className="mx-4" value="stats">
        <h1>stats</h1>
      </TabsContent>
      <TabsContent className="mx-4" value="settings">
        <h1>settings</h1>
      </TabsContent>
      <TabsList className="max-w-[620px] mx-auto">
        <TabsTrigger value="home">
          <House size={16} />
          Home
        </TabsTrigger>
        <TabsTrigger value="stats">
          <LineChart size={16} />
          Stats
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Cog size={16} />
          Settings
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabPage;
