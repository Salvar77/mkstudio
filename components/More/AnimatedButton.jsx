import React from "react";
import styles from "./AnimatedButton.module.scss";

export default function AnimatedButton({ children, ...props }) {
  return (
    <button className={styles.btn31} {...props}>
      <span className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </span>
    </button>
  );
}
