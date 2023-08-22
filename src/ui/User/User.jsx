import React from "react";
import style from "./User.module.css";

export const User = ({ handler, className }) => {
  return (
    <div className={style.avatars}>
      <div className={style.image}></div>
      <div className={className} onClick={handler}></div>
    </div>
  );
};
