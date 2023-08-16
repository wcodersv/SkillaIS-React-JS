import React from "react";
import IncomingCall from "../../ui/TableComponents/IconCall/IncomingCall";
import Avatar1 from "../../ui/TableComponents/Avatar1";
import DotRaiting from "../../ui/DotRating";
import WebIcon from "../../ui/WebIcon";

import "./CallRow.css";
import StatusAssessment from "../../ui/StatusAssessment";

export const CallRow = () => {
  return (
    <div className="call_wrapper">
      <div className="type">
        <IncomingCall />
      </div>
      <p className="time">19:00</p>
      <div className="employee_avatar">
        <Avatar1 />
      </div>
      <div className="webicon">
        <WebIcon />
      </div>
      <p className="phone">+7 (987) 567-17-12</p>
      <p className="source">Rabota.ru</p>
      <div className="status_raiting">
        <DotRaiting></DotRaiting>
        <StatusAssessment />
      </div>
      <p className="duration">00:40</p>
    </div>
  );
};
