import React from "react";
import style from "./CallRow.module.css";
import IncomingCall from "../../ui/TableComponents/IconCall/IncomingCall";
import OutgoingCall from "../../ui/TableComponents/IconCall/OutgoingCall";
import Avatar1 from "../../ui/TableComponents/Avatar1";
import WebIcon from "../../ui/WebIcon";
import StatusAssessment from "../../ui/StatusAssessment";
import DotRaiting from "../../ui/DotRating";

export const CallRow = ({
  source,
  time,
  avatar,
  number: phoneNumber,
  duration,
  status,
  direction,
}) => {
  return (
    <div className={style.gridrow}>
      {/* Определение иконки направления звонка */}
      {direction === "incoming" ? <IncomingCall /> : <OutgoingCall />}

      {/* Отображение времени звонка */}
      <p>{time}</p>

      {/* Блок для информации о сотрудниках */}
      <div className={style.employees}>
        {/* Отображение аватара сотрудника */}
        <Avatar1 img={avatar} />
        {/* Пустой блок (возможно, для дополнительных элементов) */}
        <div className={style.block}></div>
        {/* Иконка веб-сайта (возможно, какой-то статус) */}
        <WebIcon />
      </div>

      {/* Отображение номера телефона */}
      <p>{phoneNumber}</p>

      {/* Отображение источника звонка */}
      <p className={style.source}>{source}</p>

      {/* Отображение оценки статуса */}
      <div className={style.grade}>
        {/* Отображение точечной оценки (возможно, рейтинг) */}
        <DotRaiting rate={status} />
        {/* Отображение текстовой оценки статуса */}
        <StatusAssessment rate={status} text={status} />
      </div>

      {/* Отображение длительности звонка */}
      <p className={style.duration}>{duration}</p>
    </div>
  );
};
