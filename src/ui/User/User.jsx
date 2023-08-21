import React, { useState } from "react";
import style from "./User.module.css";
import "./User.css";

export const User = () => {
  const [userSelect, setUserSelect] = useState(true);
  return (
    <div className={style.avatars}>
      <div className={style.image}></div>
      {
        <div
          className={userSelect ? "select_drop" : "select_up"}
          onClick={() => setUserSelect(!userSelect)}
        ></div>
      }
    </div>
  );
};
