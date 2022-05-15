import { Axis, Breakpoints } from "../../utils";

export const Space = ({
  factor = "2",
  axis = "vertical",
}: {
  factor?: Breakpoints;
  axis?: Axis;
}): JSX.Element => {
  let classes;

  switch (axis) {
    case "vertical":
      classes = `space-vertical-${factor}`;
      break;

    case "horizontal":
      classes = `space-horizontal-${factor}`;
  }

  return <div className={classes}></div>;
};
