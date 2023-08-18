import React from "react";
import style from "./CallRow.module.css";
import IncomingCall from "../../ui/TableComponents/IconCall/IncomingCall";
import Avatar1 from "../../ui/TableComponents/Avatar1";
import WebIcon from "../../ui/WebIcon";
import StatusAssessment from "../../ui/StatusAssessment";
import DotRaiting from "../../ui/DotRating";

export const CallRow = ({ time, avatar, number: phoneNumber, duration }) => {
  return (
    <div className={style.gridrow}>
      <IncomingCall />
      <p>{time}</p>
      <div className={style.employees}>
        <Avatar1 img={avatar} />
        <div className={style.block}></div>
        <WebIcon />
      </div>
      <p>{phoneNumber}</p>
      <p className={style.source}>Rabota.ru</p>
      <div className={style.grade}>
        <DotRaiting />
        <StatusAssessment />
      </div>
      <p className={style.duration}>{duration}</p>
    </div>
  );
};
