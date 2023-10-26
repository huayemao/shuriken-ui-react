import { FC, ReactNode } from "react";

interface BaseTextProps {
  /**
   * children
   */
  children: ReactNode;

  /**
   * The size of the text.
   */
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";

  /**
   * The weight of the text.
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

  /**
   * The lead of the text.
   */
  lead?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
}

const sizeStyle = {
  xs: "nui-content-xs",
  sm: "nui-content-sm",
  md: "nui-content-md",
  lg: "nui-content-lg",
  xl: "nui-content-xl",
  "2xl": "nui-content-2xl",
  "3xl": "nui-content-3xl",
  "4xl": "nui-content-4xl",
  "5xl": "nui-content-5xl",
  "6xl": "nui-content-6xl",
  "7xl": "nui-content-7xl",
  "8xl": "nui-content-8xl",
  "9xl": "nui-content-9xl",
};

const weightStyle = {
  light: "nui-weight-light",
  normal: "nui-weight-normal",
  medium: "nui-weight-medium",
  semibold: "nui-weight-semibold",
  bold: "nui-weight-bold",
  extrabold: "nui-weight-extrabold",
};

const leadStyle = {
  none: "nui-lead-none",
  tight: "nui-lead-tight",
  snug: "nui-lead-snug",
  normal: "nui-lead-normal",
  relaxed: "nui-lead-relaxed",
  loose: "nui-lead-loose",
};

export const BaseText: FC<BaseTextProps> = ({
  size = "md",
  weight = "normal",
  lead = "normal",
  children,
}) => {
  return (
    <p
      className={`nui-text ${sizeStyle[size]} ${weightStyle[weight]} ${leadStyle[lead]}`}
    >
      {children}
    </p>
  );
};
