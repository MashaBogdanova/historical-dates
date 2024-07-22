import React from "react";

import styles from "./preloader.module.scss";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__spinner}></div>
      <p className={styles.preloader__title}>Loading...</p>
    </div>
  );
}
