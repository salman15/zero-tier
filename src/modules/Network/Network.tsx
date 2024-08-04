import { Section, TabBar } from "@/components";
import { useFetchZeroTier } from "@/fetch";
import { FC } from "react";
import { NetworkTab } from "./NetworkTab";

export const Network: FC = () => {
  const [{ data }] = useFetchZeroTier("network");

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
