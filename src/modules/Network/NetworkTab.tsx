import { Collapse, Text } from "@/components";
import { mockNetwork } from "@/mocks";
import { FC, Fragment } from "react";
import tw from "twin.macro";

const ContentInner = tw.div`bg-slate-900 bg-opacity-60 px-4 py-2 rounded-md`;
type NetworkTabProps = {
  tab: (typeof mockNetwork)[0];
};

export const NetworkTab: FC<NetworkTabProps> = ({ tab }) => {
  const createdAt = new Date(tab.config.creationTime).toLocaleString();
  return (
    <div>
      <div tw="space-y-4">
        <div>
          <Text variant="title" as="h1">
            {tab.config.name}
          </Text>
          <Text>Type: {tab.type}</Text>
          <Text>Created at: {createdAt}</Text>
        </div>
        <Collapse title="Settings" defaultOpen>
          <Text>
            Broadcast is enabled: {isOnOrOff(tab.config.enableBroadcast)}
          </Text>
          <Text>Private is enabled: {isOnOrOff(tab.config.private)}</Text>
          <Text>MTU: {tab.config.mtu}</Text>
          <Text>DNS domain: {tab.config.dns.domain}</Text>
        </Collapse>
        <Collapse title="IP pools" defaultOpen>
          {tab.config.ipAssignmentPools.map((pool, i) => (
            <Fragment key={i}>
              <Text>Pool: {i + 1}</Text>
              <Text>start: {pool.ipRangeStart}</Text>
              <Text>end: {pool.ipRangeEnd}</Text>
            </Fragment>
          ))}
        </Collapse>
        <Collapse title="Rules" defaultOpen>
          {tab.config.rules.map((rule, i) => (
            <ContentInner key={i} tw="mb-4">
              <Text>EtherType: {rule.etherType}</Text>
              <Text>Not: {isOnOrOff(!!rule.not)}</Text>
              <Text>Or: {isOnOrOff(!!rule.or)}</Text>
              <Text>Type: {rule.type}</Text>
            </ContentInner>
          ))}
        </Collapse>
        <Collapse title="Other" defaultOpen>
          <Text>Rules sources: {tab.rulesSource}</Text>
        </Collapse>
      </div>
    </div>
  );
};

const isOnOrOff = (value: boolean) => (value ? "On" : "Off");
