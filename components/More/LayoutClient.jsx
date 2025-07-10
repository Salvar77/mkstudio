"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import classes from "./LayoutClient.module.scss";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

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

      {/* jeżeli to nie strona główna, owijamy content wrapperem */}
      {isHome ? (
        <main>{children}</main>
      ) : (
        <div className={`${classes.content} ${isOpen ? classes.offset : ""}`}>
          <main>{children}</main>
        </div>
      )}

      <Footer />
    </>
  );
}
