import ElfsightLazyWrapper from "../../components/More/ElfsightLazyWrapper";
import React from "react";
import classes from "./page.module.scss";

const Recenzje = () => {
  return (
    <div className={classes.recenzje}>
      <h1>Recenzje</h1>
      <ElfsightLazyWrapper />
    </div>
  );
};

export default Recenzje;
