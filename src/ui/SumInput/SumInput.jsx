import React from "react";
import s from "./SumInput.module.css";

export const SumInput = ({ sum = 3580 }) => {
  return (
    <div className={s.default}>
      <input type="number" placeholder={sum} />
      <p>₽</p>
    </div>
  );
};
