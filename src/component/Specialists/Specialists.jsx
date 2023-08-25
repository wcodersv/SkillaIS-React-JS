import React from "react";
import style from "./Specialists.module.css";
import ProfileImage from "../../ui/ProfileImage";

export const Specialists = ({ avatar, name, lastname }) => {
  return (
    <div className={style.hover}>
      <div className={style.list}>
        <ProfileImage img={avatar} />
        <div className={style.text}>
          {name} {lastname}
        </div>
        <a className={style.entrance} href="/exit"></a>
      </div>
    </div>
  );
};
