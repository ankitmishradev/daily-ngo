import { Axis } from "../../../models/enums";

export function Space({
  factor = 2,
  axis = Axis.y,
}: {
  factor?: number;
  axis?: Axis;
}): JSX.Element {
  const height: number = axis === Axis.y ? factor * 5 : 0;
  const width: number = axis === Axis.x ? factor * 5 : 0;
  return <div style={{ height: `${height}px`, width: `${width}px` }}></div>;
}
