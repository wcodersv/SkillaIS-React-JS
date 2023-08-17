import React from "react";
import style from "./Balance.module.css";

export const Balance = () => {
  return (
    <div className={style.balanceElem}>
      <p className={style.balanceText}>Баланс:</p>
      <p className={style.balanceSum}>272</p>
      <p className={style.balanceRUR}>₽</p>
      <div className={style.balanceIMG}></div>
    </div>
  );
};
