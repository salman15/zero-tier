import { FC, PropsWithChildren } from "react";
import tw from "twin.macro";

const VARIANTS = {
  title: tw`text-4xl font-bold`,
  subtitle: tw`text-2xl font-bold`,
  regular: tw`text-lg font-normal`,
};

type TextProps = PropsWithChildren<{
  as?: React.ElementType;
  variant?: keyof typeof VARIANTS;
}>;

export const Text: FC<TextProps> = ({
  as = "p",
  variant = "regular",
  children,
}) => {
  const Component = as;
  return <Component css={VARIANTS[variant]}>{children}</Component>;
};
