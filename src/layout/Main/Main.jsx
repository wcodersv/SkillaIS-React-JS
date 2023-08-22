import React from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
// import Profile from "../../component/Profile";
import Calls from "../../component/Calls";
import ButtonBalanceIcon from "../../ui/ButtonBalanceIcon";
import FilterCalendar from "../../ui/FilterCalendar";

export const Main = () => {
  return (
    <main className={style.body}>
      <UserPanel />
      {/* <Profile /> */}
      <div className={style.main}>
        <div className={style.additional_filtering}>
          <ButtonBalanceIcon />
          <FilterCalendar />
        </div>
        <FilterPanel />
        <CallGrid>
          <Calls />
        </CallGrid>
      </div>
    </main>
  );
};
