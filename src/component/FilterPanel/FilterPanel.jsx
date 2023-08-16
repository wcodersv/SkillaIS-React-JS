import React from "react";
import { DropDownFilter } from "../../ui/Filters/DropDownFilter/DropDownFilter";
import s from "./FilterPanel.module.css";
import { FindCall } from "../../ui/FindCall/FindCall";

export const FilterPanel = () => {
  return (
    <div className={s.panel}>
      <FindCall />
      <div className={s.filters}>
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
