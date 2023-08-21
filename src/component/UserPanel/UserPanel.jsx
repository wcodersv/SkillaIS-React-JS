import React from "react";
import style from "./UserPanel.module.css";
import Magnifier from "../../ui/Magnifier";
import User from "../../ui/User";
import { useSelector } from "react-redux";
import Partnership from "../../ui/Partnership";
import { ProgressBarCom } from "../../ui/ProgressBar/ProgressBarCom";

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

  const callListData = useSelector((state) => state.calls.calls);
  const acceptedCalls = callListData.filter(
    (item) => item.rate === "good" || item.rate == "soso",
  );
  const conversionCalls = callListData.filter((item) => item.rate === "good");
  const newCallsAndQuality = (acceptedCalls.length / callListData.length) * 100;
  const callsQuality = (conversionCalls.length / callListData.length) * 100;
  return (
    <div className={style.container}>
      <p className={style.date}>
        {getWeekDay(date)}, {day} {getMonth(date)}
      </p>
      <ProgressBarCom
        progress={newCallsAndQuality}
        currentCalls={acceptedCalls.length}
        totalCalls={callListData.length}
        text={"Новые звонки"}
      />
      <ProgressBarCom
        persent={Math.floor(newCallsAndQuality)}
        progress={newCallsAndQuality}
        color="yellow"
        prs="persent"
        text={"Качество разговоров"}
      />
      <ProgressBarCom
        persent={Math.floor(callsQuality)}
        progress={callsQuality}
        color="red"
        prs="persent"
        text={"Конверсия в заказ"}
      />
      <div className={style.magnifier}>
        <Magnifier />
      </div>
      <div className={style.partnership}>
        <Partnership />
      </div>
      <div className={style.userlk}>
        <User />
      </div>
    </div>
  );
};
