import React from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
import Profile from "../../component/Profile";
import Calls from "../../component/Calls";

export const Main = () => {
  return (
    <main className={style.body}>
      <UserPanel />
      <Profile />
      <div className={style.main}>
        <FilterPanel />
        <CallGrid>
          <Calls />
        </CallGrid>
      </div>
    </main>
  );
};
