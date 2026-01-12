import Script from "next/script";
import classes from "./ElfsightWidget.module.scss";

export default function ElfsightWidget() {
  return (
    <div className={classes.widgetContainer}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      <div
        className={process.env.NEXT_PUBLIC_WIDGET_ID}
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
