import Point from "@/app/components/point/Point";
import {Period} from "@/mocks/dates-mock";

interface Props {
    radius: number;
    dates: Period[];
    setCurrentPeriodIndex: (number) => void;
}

export default function generatePoints({radius, dates, setCurrentPeriodIndex}: Props) {
        const numberOfPoints = dates.length;

        return dates.map((date, index) => {
            const angle = ((index - 1) / numberOfPoints) * (2 * Math.PI);
            const x = radius + radius * (Math.cos(angle));
            const y = radius + radius * (Math.sin(angle));

            return <Point key={index} index={index} x={x} y={y} theme={date.theme}
                          setCurrentPeriodIndex={setCurrentPeriodIndex}/>
        });
};
