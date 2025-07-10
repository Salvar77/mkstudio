import React from "react";
import Services from "../../components/Main/Services";
import classes from "./Oferta.module.scss";

const Oferta = () => {
  return (
    <div>
      <h1 className={classes.oferta}>Usługi</h1>
      <Services />
    </div>
  );
};

export default Oferta;
