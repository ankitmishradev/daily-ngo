import { Axis } from "../../../models/enums";

export function Divider({
  factor = 2,
  axis = Axis.y,
}: {
  factor?: number;
  axis?: Axis;
}): JSX.Element {
  const height: number = factor * 5;
  const width: number = axis === Axis.x ? factor * 5 : 0;
  return (
    <svg height={height} width="100%">
      <line
        x1="0"
        y1={height / 2 - 0.5}
        x2="100%"
        y2={height / 2 - 0.5}
        strokeWidth="1"
        stroke="#173645ff"
      />
    </svg>
  );
}
