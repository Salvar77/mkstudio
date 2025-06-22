// components/More/LayoutClient.js
"use client";

import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import BurgerMenu from "@/components/Nav/BurgerMenu";
import Logo from "@/components/Nav/Logo";
import Footer from "@/components/Footer/Footer";
import classes from "./LayoutClient.module.scss";

export default function LayoutClient({ children }) {
  console.log(
    "Nav:",
    Nav,
    "BurgerMenu:",
    BurgerMenu,
    "Logo:",
    Logo,
    "Footer:",
    Footer
  );

  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = document.documentElement.scrollTop;
      const isMobile = window.innerWidth < 992;
      setShowLogo(!(isMobile && scrollY > 200));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header>
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
      </header>
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
