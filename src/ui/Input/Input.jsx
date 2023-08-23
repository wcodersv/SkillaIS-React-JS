import React from "react";
import style from "./Input.module.css";
import CloseButton from "../CloseButton";
import Magnifier from "../Magnifier";

export const Input = () => {
  return (
    <>
      <div className={style.magnifier}>
        <Magnifier />
      </div>
      <div className={style.button}>
        <CloseButton />
      </div>
      <input className={style.search} placeholder="Поиск по звонкам"></input>
    </>
  );
};
