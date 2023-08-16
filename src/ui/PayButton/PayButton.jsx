import React from "react";
import plus from "./alert.svg";
import s from "./PayButton.module.css";

export const PayButton = () => {
  return (
    <div className={s.active}>
      Оплата
      <img src={plus} alt="" />
    </div>
  );
};
