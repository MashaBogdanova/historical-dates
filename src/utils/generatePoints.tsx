import Point from "@/app/components/point/Point";
import {dates, Period} from "@/mocks/dates-mock";

export default function generatePoints(radius: number, offset: number, setCurrentPeriodIndex: (number) => void) {
    const numberOfPoints = dates.length;

    return dates.map((date, index) => {
        const angle = ((index - 1 + offset) / numberOfPoints) * (2 * Math.PI);
        const x = radius + radius * (Math.cos(angle));
        const y = radius + radius * (Math.sin(angle));

        return <Point key={index} index={index} x={x} y={y} theme={date.theme}
                      setCurrentPeriodIndex={setCurrentPeriodIndex}/>
    });
};
