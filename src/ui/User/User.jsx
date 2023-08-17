import React from "react";
import style from "./User.module.css";

export const User = () => {
  return (
    <>
      <div className={style.avatars}>
        <div className={style.image}></div>
        <form action="">
          <select className={style.select}>
            <option value="#"></option>
          </select>
        </form>
      </div>
    </>
  );
};
