import React from "react";
import style from "./ExitError.module.css";
import { Link } from "react-router-dom";

export const ExitError = () => {
  return (
    <div className={style.error}>
      <Link to="/" style={{ textDecoration: "none" }}>
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
          <div className={style.row}>
            The current request will be terminated.
          </div>
          <div className={style.row}>&nbsp;</div>
          <div className={style.row}>* Click to go to main page.</div>
          <div className={style.row}>&nbsp;</div>
          <div className={style.centered}>
            Click to go to main page to continue...
            <span className={style.blink}>&#9608;</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
