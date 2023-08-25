import React from "react";
import plus from "./image/plus.svg";
import style from "./ButtonAddOrder.module.css";

export const ButtonAddOrder = () => {
  return (
    <div className={style.active}>
      Добавить заказ
      <img src={plus} alt="" />
    </div>
  );
};
