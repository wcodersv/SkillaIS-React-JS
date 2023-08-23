import React from "react";
import style from "./Partnership.module.css";

export const Partnership = ({ className }) => {
  return (
    <div className={style.conteiner}>
      <p>ИП Сидорова Александра Михайловна</p>
      <div className={className}></div>
    </div>
  );
};
