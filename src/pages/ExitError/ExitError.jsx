import React from "react";
import style from "./ExitError.module.css";

export const ExitError = () => {
  return (
    <div className={style.error}>
      <div className={style.notfound}>
        <div className={style.centered}>
          <span className={style.inverted}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          &nbsp;
        </div>
        <div className={style.centered}>
          <span className={style.inverted}>&nbsp;4&nbsp;0&nbsp;4&nbsp;</span>
          <span className={style.shadow}>&nbsp;</span>
        </div>
        <div className={style.centered}>
          <span className={style.inverted}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className={style.shadow}>&nbsp;</span>
        </div>
        <div className={style.centered}>
          &nbsp;
          <span className={style.shadow}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div className={style.row}>&nbsp;</div>
        <div className={style.row}>
          A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.
        </div>
        <div className={style.row}>The current request will be terminated.</div>
        <div className={style.row}>&nbsp;</div>
        <div className={style.row}>
          * Press any key to return to the previous page.
        </div>
        <div className={style.row}>
          * Press CTRL+ALT+DEL to restart your computer. You will
        </div>
        <div className={style.row}>
          &nbsp;&nbsp;lose any unsaved information in all applications.
        </div>
        <div className={style.row}>&nbsp;</div>
        <div className={style.centered}>
          Press any key to continue...
          <span className={style.blink}>&#9608;</span>
        </div>
      </div>
    </div>
  );
};
