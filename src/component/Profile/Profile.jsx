import React from "react";
import style from "./Profile.module.css";
import Specialists from "../Specialists";
import { useSelector } from "react-redux";

export const Profile = () => {
  const data = useSelector((state) => state.calls.calls);
  return (
    <div className={style.profile}>
      <a className={style.exit} href="/exit"></a>
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
      <p className={style.specialists}>Операторы</p>
      {data
        .filter((el) => el.profession === "operator")
        .slice(0, 3)
        .map((el, i) => (
          <Specialists
            key={i}
            avatar={el.avatar}
            name={el.name}
            lastname={el.lastname}
          />
        ))}
      <p className={style.specialists}>Логисты</p>
      {data
        .filter((el) => el.profession === "logistic")
        .slice(0, 3)
        .map((el, i) => (
          <Specialists
            key={i}
            avatar={el.avatar}
            name={el.name}
            lastname={el.lastname}
          />
        ))}
      <p className={style.specialists}>Бухгалтеры</p>
      {data
        .filter((el) => el.profession === "accountant")
        .slice(0, 3)
        .map((el, i) => (
          <Specialists
            key={i}
            avatar={el.avatar}
            name={el.name}
            lastname={el.lastname}
          />
        ))}
    </div>
  );
};
