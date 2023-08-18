import React from "react";
import style from "./UserPanel.module.css";
import Magnifier from "../../ui/Magnifier";
import User from "../../ui/User";
import Partnership from "../../ui/Partnership";

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

  const getMonth = (date) => {
    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];

    return months[date.getMonth()];
  };
  const date = new Date();
  const day = new Date().getDate();
  return (
    <div className={style.conteiner}>
      <p className={style.date}>
        {getWeekDay(date)}, {day} {getMonth(date)}
      </p>
      <div className={style.magnifier}>
        <Magnifier />
      </div>

      <Partnership />
      <User />
    </div>
  );
};
