import {
  BadgeInfo,
  ChevronRight,
  Cog,
  Flame,
  House,
  LineChart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Button } from "./components/ui/button";

const TabPage = () => {
  return (
    <Tabs
      defaultValue="home"
      className="flex flex-col min-h-screen justify-between align-center"
    >
      <TabsContent
        className="mx-4 flex flex-col justify-between align-center w-90 h-[85vh]"
        value="home"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Flame />
            &nbsp;32
          </div>
          <BadgeInfo />
        </div>
        <p>Learn the order of the cards</p>
        <Button className="animate-bounce">
          Start Now <ChevronRight />
        </Button>
      </TabsContent>
      <TabsContent className="mx-4" value="stats">
        <h1>stats</h1>
      </TabsContent>
      <TabsContent className="mx-4" value="settings">
        <h1>settings</h1>
      </TabsContent>
      <TabsList>
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
