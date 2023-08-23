import React, { useState } from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
import Calls from "../../component/Calls";
import ButtonBalanceIcon from "../../ui/ButtonBalanceIcon";
import FilterCalendar from "../../ui/FilterCalendar";

export const Main = () => {
  const [value, setValue] = useState("");

  const changer = (evt) => {
    setValue(evt.target.value);
    console.log(value);
  };

  return (
    <main className={style.body}>
      <UserPanel />
      <div className={style.main}>
        <div className={style.additional_filtering}>
          <ButtonBalanceIcon />
          <FilterCalendar />
        </div>
        <FilterPanel handler={changer} value={value} />

        <CallGrid>
          <Calls value={value} />
        </CallGrid>
      </div>
    </main>
  );
};
