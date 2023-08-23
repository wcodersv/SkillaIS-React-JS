import React from "react";
import style from "./Specialists.module.css";
import Avatar from "../../ui/TableComponents/Avatar1";
import LogoutButton from "../../ui/LogoutButton";

export const Specialists = ({ avatar, name, lastname }) => {
  return (
    <div className={style.hover}>
      <div className={style.list}>
        <Avatar img={avatar} />
        <div className={style.text}>
          {name} {lastname}
        </div>
        <a className={style.entrance} href="#">
          <LogoutButton />
        </a>
      </div>
    </div>
  );
};
