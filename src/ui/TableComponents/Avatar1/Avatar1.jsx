import React from "react";
import AvatarImg from "./avatar.png";
import "./Avatar1.css";

export const Avatar = ({ avatar }) => {
  return (
    <div className="avatar">
      <img src={AvatarImg} alt="avatar" />
    </div>
  );
};
