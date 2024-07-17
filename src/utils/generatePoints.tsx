import Point from "@/app/components/point/Point";
import {dates} from "@/mocks/dates-mock";

export default function generatePoints(radius: number) {
    const numberOfPoints = dates.length;

    return dates.map((date, index) => {
        const angle = (index / numberOfPoints) * (2 * Math.PI);
        const x = radius + radius * (Math.cos(angle));
        const y = radius + radius * (Math.sin(angle));

        return <Point key={index} index={index} x={x} y={y} theme={date.theme}/>
    });
};
