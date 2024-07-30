import { FC, ReactNode, useState } from "react";

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
    <div>
      <div>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.name}
            </div>
          );
        })}
      </div>
      <div>{activeTabContent}</div>
    </div>
  );
};
