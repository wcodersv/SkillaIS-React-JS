import React from "react";
import style from "./Partnership.module.css";

export const Partnership = () => {
  return (
    <>
      <div className={style.partnership}>
        <form action="">
          <label className={style.label}>
            ИП Сидорова Александра Михайловна
          </label>
          <select className={style.select}>
            <option value="#"></option>
          </select>
        </form>
      </div>
    </>
  );
};
