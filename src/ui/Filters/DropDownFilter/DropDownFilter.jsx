import React from "react";
import s from "./DropDownFilter.module.css";

export const DropDownFilter = ({ name = "Все типы" }) => {
  return (
    <form action="">
      <label htmlFor="Types">{name}</label>
      <select className={s.alltype} id="AllTypes">
        <option value="#"></option>
      </select>
    </form>
  );
};
