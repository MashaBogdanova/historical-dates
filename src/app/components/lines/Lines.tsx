import React from "react";

import styles from "./lines.module.scss";

export default function Lines() {
  return (
    <section className={styles.lines}>
      <div className={styles.lines__colorBorder} />
      <div
        className={`${styles.lines__line} ${styles.lines__line_horizontal}`}
      />
      <div className={`${styles.lines__line} ${styles.lines__line_vertical}`} />
    </section>
  );
}
