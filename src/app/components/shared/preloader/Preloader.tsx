import React from "react";

import styles from "./preloader.module.scss";

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__spinner}></div>
      <p className={styles.preloader__title}>Loading...</p>
    </div>
  );
};

export default Preloader;
