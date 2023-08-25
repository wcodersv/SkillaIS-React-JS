import React from "react";
import style from "./InputSum.module.css";

export const InputSum = ({ sum = 3580 }) => {
  return (
    <div className={style.default}>
      <input type="number" placeholder={sum} className={style.input} />
      <p className={style.price}>₽</p>
    </div>
  );
};
