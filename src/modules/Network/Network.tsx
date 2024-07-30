import { Section, TabBar } from "@/components";
import { useFetchZeroTier } from "@/fetch";
import { mockNetwork } from "@/mocks";
import { FC, useEffect } from "react";
import { NetworkTab } from "./NetworkTab";

export const Network: FC = () => {
  const [fetchNetwork] = useFetchZeroTier("network");
  useEffect(() => {
    fetchNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tabs = mockNetwork.map((network) => ({
    id: network.id,
    name: network.config.name,
    content: <NetworkTab tab={network} />,
  }));

  return (
    <Section>
      <TabBar tabs={tabs} />
    </Section>
  );
};
