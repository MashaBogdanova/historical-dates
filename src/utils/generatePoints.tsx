import Point from "@/app/components/point/Point";
import { Period } from "@/mocks/dates-mock";

interface Props {
  radius: number;
  dates: Period[];
  offsetAngle: number;
  // eslint-disable-next-line no-unused-vars
  rotateCircle: (index: number) => void;
}

export default function generatePoints({
  radius,
  dates,
  offsetAngle,
  rotateCircle,
}: Props) {
  const totalPointNumber = dates.length;

  return dates.map((date, index) => {
    const angle = ((index - 1) / totalPointNumber) * (2 * Math.PI);
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

    return (
      <Point
        key={index}
        index={index}
        x={x}
        y={y}
        offsetAngle={offsetAngle}
        rotateCircle={rotateCircle}
      />
    );
  });
}
