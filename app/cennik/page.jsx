import Contact from "../../components/Main/Contact";
import Pricelist from "../../components/Main/Pricelist";
import React from "react";
import classes from "./Cennik.module.scss";

const Cennik = () => {
  return (
    <div>
      <h1 className={classes.cennik}>Cennik</h1>
      <Pricelist />
      <Contact />
    </div>
  );
};

export default Cennik;
