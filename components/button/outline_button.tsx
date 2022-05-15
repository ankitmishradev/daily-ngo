import { OutlineButtonProps } from "./constants";

export const OutlineButton = (props: OutlineButtonProps) => {
  return <button className="button button_outline">{props.text}</button>;
};
