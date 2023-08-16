import React from "react";
import style from "./UserPanel.module.css";

export const UserPanel = () => {
  const getWeekDay = (date) => {
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    return days[date.getDay()];
  };

  // const date = new Date;
  const date = new Date();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  return (
    <div className={style.conteiner}>
      <p>
        {getWeekDay(date)}, {day} {month}
      </p>
    </div>
  );
};
