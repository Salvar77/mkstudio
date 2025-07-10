"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import classes from "./Nav.module.scss";
import AnimatedButton from "../More/AnimatedButton";
import { usePathname } from "next/navigation";

export default function Nav({ isOpen, toggleNav }) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const items = [
    { href: "/cennik", label: "Cennik" },
    { href: "/oferta", label: "Oferta" },
    { href: "/blog", label: "Blog" },
    { href: "/recenzje", label: "Recenzje" },
    { href: "/galeria", label: "Galeria" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const solidNav = pathname !== "/" && isDesktop;

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
    <nav
      className={`${classes.navbar}` + (solidNav ? ` ${classes.solid}` : "")}
    >
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
            onClick={() => (window.location.href = "tel:+48690570800")}
          >
            +48 690 570 800
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
