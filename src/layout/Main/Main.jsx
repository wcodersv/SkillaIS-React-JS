import React from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
import CallRow from "../../component/CallRow";

export const Main = () => {
  return (
    <main className={style.body}>
      <UserPanel />
      <FilterPanel />
      <CallGrid>
        <CallRow />
        <CallRow />
      </CallGrid>
    </main>
  );
};
