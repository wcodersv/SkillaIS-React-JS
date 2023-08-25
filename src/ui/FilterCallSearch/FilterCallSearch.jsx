import React from "react";
import style from "./FilterCallSearch.module.css";
import searchIcon from "./image/search.svg";

export const FilterCallSearch = ({
  placeHolder = "Поиск по звонкам",
  value,
  handler,
}) => {
  return (
    <div className={style.findcall}>
      <img className={style.image} src={searchIcon} alt="" />
      <input
        type="text"
        onChange={handler}
        placeholder={placeHolder}
        value={value}
      />
    </div>
  );
};
