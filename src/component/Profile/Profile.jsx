import React from "react";
import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={style.profile}>
      <p className={style.name}>Упоров Кирилл.</p>
      <div className={style.job_city}>
        <p>Директор</p>
        <div className={style.circle}></div>
        <p>Санкт-Петербург</p>
      </div>
      <div className={style.text}>
        <div className={style.number_icon}></div>
        <p>8 (800) 333-17-21</p>
      </div>
      <div className={style.text}>
        <div className={style.mail_icon}></div>
        <p>hi@skilla.ru</p>
      </div>
      <div className={style.line}></div>
    </div>
  );
};
