import cssClassBuilder from "css-class-builder";
import { useWindowSize } from "../../hooks";
import { Section } from "../layout";
import { PageHeadingProps } from "./contants";

export const PageHeading = (props: PageHeadingProps) => {
  const window = useWindowSize();
  const classes = cssClassBuilder("page-heading");

  classes.extend("flex__".concat(props.alignment ?? "left"));

  return (
    <Section className={classes.unzip}>
      <h1 className="page-heading__text">{props.text}</h1>
    </Section>
  );
};
