import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.mapWrapper}>
      <iframe
        title="Mapa lokalizacji MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2528.5639059004!2d17.985561!3d50.672357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471055fa22e39fed%3A0x4acabadb5fde8873!2sMK%20Studio%20Auto%20detailing%20-%20Pranie%20tapicerki%2C%20Korekta%20lakieru!5e0!3m2!1spl!2sus!4v1751785124255!5m2!1spl!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrePolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
