import React from "react";
import style from "./InputSearch.module.css";
import ButtonClose from "../ButtonClose";
import SearchTool from "../SearchTool";

export const InputSearch = () => {
  return (
    <>
      <div className={style.magnifier}>
        <SearchTool />
      </div>
      <div className={style.button}>
        <ButtonClose />
      </div>
      <input className={style.search} placeholder="Поиск по звонкам"></input>
    </>
  );
};
