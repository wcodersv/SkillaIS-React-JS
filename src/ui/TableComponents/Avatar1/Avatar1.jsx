import React from "react";
import "./Avatar1.css";

export const Avatar = ({ img }) => {
  return (
    <div className="avatar">
      <img src={img} alt="avatar" />
    </div>
  );
};
