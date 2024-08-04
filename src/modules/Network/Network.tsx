import { Section, TabBar } from "@/components";
import { useFetchZeroTier } from "@/fetch";
import { FC, useEffect } from "react";
import { NetworkTab } from "./NetworkTab";

export const Network: FC = () => {
  const [fetchNetwork, { data }] = useFetchZeroTier("network");
  useEffect(() => {
    fetchNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tabs =
    data?.map((network) => ({
      id: network.id,
      name: network.config.name,
      content: <NetworkTab tab={network} />,
    })) || [];

  return (
    <Section>
      <TabBar tabs={tabs} />
    </Section>
  );
};
