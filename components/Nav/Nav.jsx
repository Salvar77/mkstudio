"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import classes from "./Nav.module.scss";
import AnimatedButton from "../More/AnimatedButton";

export default function Nav({ isOpen, toggleNav }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const items = [
    { href: "#about", label: "O mnie" },
    { href: "#pricing", label: "Cennik" },
    { href: "#services", label: "Usługi" },
    { href: "#reviews", label: "Opinie" },
    { href: "#contact", label: "Kontakt" },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992 && isOpen) toggleNav();
      setIsDesktop(window.innerWidth >= 992);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, toggleNav]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        {/* logo zawsze */}
        <Logo />

        {/* linki + CTA w jednym flex‐wrapperze */}
        <div className={classes.navGroup}>
          <ul className={classes.links}>
            {items.map((it) => (
              <li key={it.href}>
                <Link href={it.href}>{it.label}</Link>
              </li>
            ))}
          </ul>
          <AnimatedButton
            onClick={() => (window.location.href = "tel:+48881325631")}
          >
            +48 881 325 631
          </AnimatedButton>
        </div>

        {/* hamburger zawsze, ale na desktopie ukryjemy go w CSS */}
        <div className={classes.burgerContainer}>
          <BurgerMenu isOpen={isOpen} handleOpen={toggleNav} />
        </div>
      </div>

      {/* mobile dropdown */}
      <ul className={`${classes.mobileMenu} ${isOpen ? classes.open : ""}`}>
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} onClick={toggleNav}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${classes.spacer} ${isOpen ? classes.open : ""}`} />
    </nav>
  );
}
