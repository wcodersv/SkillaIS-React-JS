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
      {direction === "incoming" ? <IncomingCall /> : <OutgoingCall />}
      <p>{time}</p>
      <div className={style.employees}>
        <Avatar1 img={avatar} />
        <div className={style.block}></div>
        <WebIcon />
      </div>
      <p>{phoneNumber}</p>
      <p className={style.source}>{source}</p>
      <div className={style.grade}>
        <DotRaiting rate={status} />
        <StatusAssessment rate={status} text={status} />
      </div>
      <p className={style.duration}>{duration}</p>
    </div>
  );
};
