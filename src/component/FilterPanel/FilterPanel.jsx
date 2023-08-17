import React from "react";
import style from "./FilterPanel.module.css";
import { DropDownFilter } from "../../ui/Filters/DropDownFilter/DropDownFilter";
import { FindCall } from "../../ui/FindCall/FindCall";

export const FilterPanel = () => {
  return (
    <div className={style.panel}>
      <FindCall />
      <div className={style.filters}>
        <DropDownFilter name="Все типы" />
        <DropDownFilter name="Все сотрудники" />
        <DropDownFilter name="Все звонки" />
        <DropDownFilter name="Все источники" />
        <DropDownFilter name="Все оценки" />
        <DropDownFilter name="Все ошибки" />
      </div>
    </div>
  );
};
