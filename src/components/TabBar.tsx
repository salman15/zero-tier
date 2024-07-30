import { FC, ReactNode, useState } from "react";
import tw from "twin.macro";
import { Button } from "./Button";

const GridContent = tw.div`grid [grid-template-columns: 150px 1fr] lg:[grid-template-columns: 300px 1fr] space-x-4`;
const TabsContent = tw.div`flex flex-col space-y-4`;
type tab = {
  id: string;
  name: string;
  content: ReactNode;
};

type TabBarProps = {
  tabs: tab[];
};

export const TabBar: FC<TabBarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
  return (
    <GridContent>
      <TabsContent>
        {tabs.map((tab) => {
          return (
            <Button
              variant={activeTab === tab.id ? "tab-active" : "tab"}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </Button>
          );
        })}
      </TabsContent>
      <div tw="px-4">{activeTabContent}</div>
    </GridContent>
  );
};
