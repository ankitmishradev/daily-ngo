export type FlatButtonType = "c2s" | "s2c";

export interface ButtonProps {
  text: string;
  class?: string;
  href?: string;
  onclick?: () => {};
}

export interface FlatButtonProps extends ButtonProps {
  type?: FlatButtonType;
}

export interface OutlineButtonProps extends ButtonProps {}
