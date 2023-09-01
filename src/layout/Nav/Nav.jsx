import React from "react";
import { useSelector } from "react-redux";
import style from "./Nav.module.css";
import ButtonPay from "../../ui/ButtonPay";
import ButtonAddOrder from "../../ui/ButtonAddOrder";

// Импортируем иконки для разных пунктов меню
import time from "../../icons/chart-timeline-variant.svg";
import order from "../../icons/orders-24px.svg";
import mail from "../../icons/mail_outline-24px.svg";
import calls from "../../icons/calls-24px-menu.svg";
import people from "../../icons/people-24px.svg";
import document from "../../icons/documents-24px.svg";
import pidentity from "../../icons/perm_identity_black_24dp.svg";
import briefcase from "../../icons/briefcase-outline.svg";
import library from "../../icons/local_library_black_24dp.svg";
import settings from "../../icons/settings-24px.svg";
import logo from "./image/logo.svg";

export const Nav = () => {
  // Получаем данные меню из Redux-состояния
  const menuData = useSelector((state) => state.menu.menu);

  // Объект с иконками для каждого пункта меню
  const imgIcon = {
    Итоги: time,
    Заказы: order,
    Сообщения: mail,
    Звонки: calls,
    Контрагенты: people,
    Документы: document,
    Исполнители: pidentity,
    Отчеты: briefcase,
    "База знаний": library,
    Настройки: settings,
    Банк: document,
  };

  return (
    <nav className={style.body}>
      <div className={style.logo}>
        {/* логотип */}
        <a href="skillaIS/">
          <img src={logo} alt="Логотип" />
        </a>
      </div>
      <div className={style.navigation}>
        {/* Отображаем пункты меню на основе данных из menuData */}
        <ul>
          {menuData.map((menu) =>
            menu.name !== "Звонки" ? (
              <li key={`menu-${menu.name}`}>
                <img src={imgIcon[menu.name]} alt="" />
                <a href={menu.url}>{menu.name}</a>
              </li>
            ) : (
              <li key={`menu-${menu.name}`} className={style.active_menu}>
                <img src={imgIcon[menu.name]} alt="" />
                <a href="/">{menu.name}</a>
                <div className={style.activeelem}></div>
              </li>
            ),
          )}
        </ul>
      </div>
      {/* Кнопки "Добавить заказ" и "Оплатить" */}
      <div className={style.btn}>
        <ButtonAddOrder />
        <ButtonPay />
      </div>
    </nav>
  );
};
