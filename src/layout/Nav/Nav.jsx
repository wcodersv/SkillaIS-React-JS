import React from "react";
import style from "./Nav.module.css";
import time from "../../icons/chart-timeline-variant.svg";
import order from "../../icons/orders-24px.svg";
import mail from "../../icons/mail_outline-24px.svg";
import calls from "../../icons/calls-24px.svg";
import people from "../../icons/people-24px.svg";
import document from "../../icons/documents-24px.svg";
import pidentity from "../../icons/perm_identity_black_24dp.svg";
import briefcase from "../../icons/briefcase-outline.svg";
import library from "../../icons/local_library_black_24dp.svg";
import settings from "../../icons/settings-24px.svg";
import PayButton from "../../ui/PayButton";
import AddOrderButton from "../../ui/AddOrderButton";

export const Nav = () => {
  return (
    <nav className={style.body}>
      <div className={style.logo}>
        <a href="/">
          <img src="../../logo.svg" alt="Логотип" />
        </a>
      </div>
      <div className={style.navigation}>
        <ul>
          <li>
            <img src={time} alt="Итоги" />
            <a href="#">Итоги</a>
          </li>
          <li>
            <img src={order} alt="Заказы" />
            <a href="#">Заказы</a>
          </li>
          <li>
            <img src={mail} alt="Сообщения" />
            <a href="#">Сообщения</a>
          </li>
          <li>
            <img src={calls} alt="Звонки" />
            <a href="#">Звонки</a>
          </li>
          <li>
            <img src={people} alt="Контрагенты" />
            <a href="#">Контрагенты</a>
          </li>
          <li>
            <img src={document} alt="Документы" />
            <a href="#">Документы</a>
          </li>
          <li>
            <img src={pidentity} alt="Исполнители" />
            <a href="#">Исполнители</a>
          </li>
          <li>
            <img src={briefcase} alt="Отчеты" />
            <a href="#">Отчеты</a>
          </li>
          <li>
            <img src={library} alt="База знаний" />
            <a href="#">База знаний</a>
          </li>
          <li>
            <img src={settings} alt="Настройки" />
            <a href="#">Настройки</a>
          </li>
        </ul>
      </div>
      <div className={style.btn}>
        <AddOrderButton />
        <PayButton />
      </div>
    </nav>
  );
};
