import React from "react";
import plus from "./image/alert.svg";
import style from "./ButtonPay.module.css";

export const ButtonPay = () => {
  return (
    <div className={style.active}>
      Оплата
      <img src={plus} alt="" />
    </div>
  );
};
