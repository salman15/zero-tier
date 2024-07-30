import { Section, Text } from "@/components";
import { useFetchZeroTier } from "@/fetch";
import { FC } from "react";

export const Network: FC = () => {
  const { data, error } = useFetchZeroTier("network");
  console.log("data", data);
  console.log("error", error);
  return (
    <Section>
      <Text as="h1" variant="title">
        Hello world
      </Text>
    </Section>
  );
};
