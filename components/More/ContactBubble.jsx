"use client";
import { useState, useEffect } from "react";
import classes from "./ContactBubble.module.scss";
import Link from "next/link";

const ContactBubble = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (e) => {
    if (isMobile) {
      if (!isExpanded) {
        e.preventDefault();
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
  };

  return (
    <div
      className={`${classes.contactBubble} ${
        isExpanded ? classes.expanded : ""
      }`}
      onMouseEnter={!isMobile ? () => setIsExpanded(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsExpanded(false) : undefined}
      onClick={handleToggle}
    >
      <div className={classes.bubbleContent}>
        <svg
          className={classes.proContactIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="white"
            d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm2 3h12v2H6V9zm0 4h8v2H6v-2z"
          />
        </svg>
        <Link href="/kontakt" className={classes.text}>
          <span>Skontaktuj się</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactBubble;
