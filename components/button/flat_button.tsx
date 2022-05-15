import cssClassBuilder from "css-class-builder";
import { FlatButtonProps } from "./constants";

export const FlatButton = (props: FlatButtonProps) => {
  const classes = cssClassBuilder("button button_flat");
  !props.type ? classes.extend("flat__bg-s2w") : props.type;

  if (props.href) {
    return (
      <a href={props.href} className={classes.unzip}>
        {props.text}
      </a>
    );
  } else {
    return <button className={classes.unzip}>{props.text}</button>;
  }
};
