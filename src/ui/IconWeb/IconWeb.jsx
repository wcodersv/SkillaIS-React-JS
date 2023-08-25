import React from "react";
import WebImg from "./image/web.svg";
import style from "./IconWeb.module.css";

export const IconWeb = () => {
  return (
    <div className={style.webicon}>
      <img src={WebImg} alt="web" />
    </div>
  );
};
