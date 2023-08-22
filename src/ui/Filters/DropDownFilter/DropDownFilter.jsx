import React from "react";
import style from "./DropDownFilter.module.css";

export const DropDownFilter = ({ data = [], handler }) => {
  const render = data.map((item, index) => (
    <option onChange={handler} key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <form className={style.form}>
      <select className={style.alltype} id="AllTypes">
        {render}
      </select>
    </form>
  );
};
