import React, { FC, PropsWithChildren } from "react";
import tw from "twin.macro";

const BASE_STYLE = tw`btn`;

const VARIANT = {
  primary: tw`btn-primary`,
  secondary: tw`btn-secondary`,
  tab: tw`hover:(border-r-4 border-purple-300)`,
  "tab-active": tw`border-r-4 border-purple-300`,
};

type ButtonProps = PropsWithChildren<{
  variant?: keyof typeof VARIANT;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button css={[BASE_STYLE, VARIANT[variant]]} {...rest}>
      {children}
    </button>
  );
};
