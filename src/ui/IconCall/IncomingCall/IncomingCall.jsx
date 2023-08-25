import React from "react";
import style from "./IncomingCall.module.css";

export const IncomingCall = () => {
  // return <div className="incoming decline"></div>;
  return <div className={`${style.incoming} ${style.decline}`}></div>;
};
