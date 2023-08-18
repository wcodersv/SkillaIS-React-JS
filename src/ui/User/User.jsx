import React, { useState } from "react";
import style from "./User.module.css";
import "./User.css";
// import Profile from "../../component/Profile";

export const User = () => {
  const [flag, setFlag] = useState(true);
  // const changeColor = () => {
  //   return console.log("hello");
  // };
  return (
    <div className={style.avatars}>
      <div className={style.image}></div>
      {
        <div
          className={flag ? "select_drop" : "select_up"}
          onClick={() => setFlag(!flag)}
        ></div>
      }
    </div>
  );
};
