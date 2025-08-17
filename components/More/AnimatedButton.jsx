import React from "react";
import styles from "./AnimatedButton.module.scss";
import clsx from "clsx";

export default function AnimatedButton({ children, className, onClick, href }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      className={clsx(styles.btn31, className)}
      onClick={onClick}
      href={href}
    >
      <span className={styles.textContainer}>
        <span className={styles.text}>{children}</span>
      </span>
    </Tag>
  );
}
