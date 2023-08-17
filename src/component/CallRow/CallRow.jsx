import React from "react";
import style from "./CallRow.module.css";
import IncomingCall from "../../ui/TableComponents/IconCall/IncomingCall";
import Avatar1 from "../../ui/TableComponents/Avatar1";
import WebIcon from "../../ui/WebIcon";
import StatusAssessment from "../../ui/StatusAssessment";
import DotRaiting from "../../ui/DotRating";

export const CallRow = ({ data }) => {
  return (
    <div className={style.gridrow}>
      <IncomingCall />
      <p>19:00</p>
      <div className={style.employees}>
        <Avatar1 />
        <div className={style.block}></div>
        <WebIcon />
      </div>
      <p>+7 (987) 567-17-12</p>
      <p className={style.source}>Rabota.ru</p>
      <div className={style.grade}>
        <DotRaiting />
        <StatusAssessment />
      </div>
      <p>00:40</p>
    </div>
  );
};
