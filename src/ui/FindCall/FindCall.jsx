import React from "react";
import s from "./FindCall.module.css";
import searchIcon from "./search.svg";

export const FindCall = ({
  placeHolder = "Поиск по звонкам",
  value,
  handler,
}) => {
  return (
    <div className={s.findcall}>
      <img className={s.image} src={searchIcon} alt="" />
      <input
        type="text"
        onChange={handler}
        placeholder={placeHolder}
        value={value}
      />
    </div>
  );
};
