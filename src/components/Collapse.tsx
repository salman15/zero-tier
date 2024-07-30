import React, { FC, PropsWithChildren } from "react";
import "twin.macro";

type CollapseProps = PropsWithChildren<{
  title: string;
  defaultOpen?: boolean;
}>;

/**
 * Using className because twin.macro doesn't support all collapse features
 */
export const Collapse: FC<CollapseProps> = ({
  title,
  children,
  defaultOpen,
}) => {
  return (
    <details className="collapse bg-base-200 collapse-arrow" open={defaultOpen}>
      <summary className="collapse-title text-xl font-medium">{title}</summary>
      <div className="collapse-content">{children}</div>
    </details>
  );
};
