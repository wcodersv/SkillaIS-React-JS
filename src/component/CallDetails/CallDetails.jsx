import React from "react";
import style from "./CallDetails.module.css";
import IncomingCall from "../../ui/IconCall/IncomingCall";
import OutgoingCall from "../../ui/IconCall/OutgoingCall";
import ProfileImage from "../../ui/ProfileImage";
import IconWeb from "../../ui/IconWeb";
import RatingDescription from "../../ui/RatingDescription";
import RatingIndicator from "../../ui/RatingIndicator";

export const CallDetails = ({
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
        <ProfileImage img={avatar} />
        {/* Пустой блок (возможно, для дополнительных элементов) */}
        <div className={style.block}></div>
        {/* Иконка веб-сайта (возможно, какой-то статус) */}
        <IconWeb />
      </div>

      {/* Отображение номера телефона */}
      <p>{phoneNumber}</p>

      {/* Отображение источника звонка */}
      <p className={style.source}>{source}</p>

      {/* Отображение оценки статуса */}
      <div className={style.grade}>
        {/* Отображение точечной оценки */}
        <RatingIndicator rate={status} />
        {/* Отображение текстовой оценки статуса */}
        <RatingDescription rate={status} text={status} />
      </div>

      {/* Отображение длительности звонка */}
      <p className={style.duration}>{duration}</p>
    </div>
  );
};
