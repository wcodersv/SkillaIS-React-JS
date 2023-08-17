import React from "react";
import style from "./CallGrid.module.css";

export const CallGrid = ({ children }) => {
  return (
    <div className={style.body}>
      <div className={style.gridheader}>
        <p>Тип</p>
        <p>Время</p>
        <p>Сотрудник</p>
        <p>Звонок</p>
        <p>Источник</p>
        <p>Оценка</p>
        <p>Длительность</p>
      </div>
      {children}
      <div className={style.gridfooter}></div>
    </div>
  );
};
