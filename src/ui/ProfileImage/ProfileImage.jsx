import React from "react";
import style from "./ProfileImage.module.css";

export const ProfileImage = ({ img }) => {
  return (
    <div className={style.avatar}>
      <img src={img} alt="avatar" />
    </div>
  );
};
