"use client";
import "../../app/globals.scss";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import classes from "./LayoutClient.module.scss";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header>
        <Nav isOpen={isOpen} toggleNav={toggleNav} />
      </header>

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
