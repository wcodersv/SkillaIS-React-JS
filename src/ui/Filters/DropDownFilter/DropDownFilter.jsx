import React from "react";
import style from "./DropDownFilter.module.css";

export const DropDownFilter = ({ data = [], handler, selectedValue }) => {
  return (
    <form className={style.form}>
      <select
        className={style.alltype}
        id="AllTypes"
        value={selectedValue}
        onChange={(e) => handler(e.target.value)}
      >
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
};
