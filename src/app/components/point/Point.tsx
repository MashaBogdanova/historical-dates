import { useCurrentPeriod } from "@/context/CurrentPeriodContext";

import styles from "./point.module.scss";

interface Props {
  index: number;
  x: number;
  y: number;
  offsetAngle: number;
  // eslint-disable-next-line no-unused-vars
  rotateCircle: (index: number) => void;
}

function Point({ index, x, y, offsetAngle, rotateCircle }: Props) {
  const { currentPeriod, currentPeriodIndex, setCurrentPeriodIndex } =
    useCurrentPeriod();

  function handleClick() {
    setCurrentPeriodIndex(index);
    rotateCircle(index);
  }

  return (
    <div
      className={`${styles.point} ${index === currentPeriodIndex ? styles.point_active : ""}`}
      style={{
        left: `${x.toFixed(5)}px`,
        top: `${y.toFixed(5)}px`,
        rotate: `${-offsetAngle}deg`,
      }}
    >
      <p className={styles.point__number} onClick={handleClick}>
        {index + 1}
      </p>
      <p className={styles.point__theme}>{currentPeriod.periodTheme}</p>
    </div>
  );
}

export default Point;
