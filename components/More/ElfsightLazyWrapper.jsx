"use client";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import classes from "./ElfsightLazyWrapper.module.scss";

/** ①  Dynamiczny import robimy JEDEN raz – poza funkcją */
const ElfsightWidget = dynamic(() => import("./ElfsightWidget"), {
  ssr: false,
  loading: () => null,
});

export default function ElfsightLazyWrapper() {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null); // ← zwykły obiektowy ref

  /** ②  Lazy-load po wejściu komponentu w viewport */
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      {visible ? (
        <ElfsightWidget />
      ) : (
        <div className={classes.placeholder}>
          <h3 className={classes.placeholderTitle}>Pokaż opinie</h3>
          <p className={classes.placeholderText}>
            Przewiń tutaj, aby wczytać widget opinii.
          </p>
        </div>
      )}
    </div>
  );
}
