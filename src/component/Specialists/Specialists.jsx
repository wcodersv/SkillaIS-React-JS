import React from "react";
import style from "./Specialists.module.css";
import Avatar from "../../ui/TableComponents/Avatar1";

export const Specialists = ({ avatar, name, lastname }) => {
  return (
    <div>
      <div className={style.list}>
        <Avatar img={avatar} />
        <div>
          {name} {lastname}
        </div>
      </div>
    </div>
  );
};
