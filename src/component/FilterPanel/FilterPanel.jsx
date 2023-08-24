import React from "react";
import style from "./FilterPanel.module.css";
import { DropDownFilter } from "../../ui/Filters/DropDownFilter/DropDownFilter";
import { FindCall } from "../../ui/FindCall/FindCall";
import { useSelector } from "react-redux";

export const FilterPanel = ({ handler, value }) => {
  const employeesData = useSelector((state) => state.calls.calls);
  const employees = employeesData.map((item) => item.name);

  return (
    <div className={style.panel}>
      <FindCall handler={handler} value={value} />
      <div className={style.filters}>
        {/* Фильтр для типов звонков */}
        <DropDownFilter
          data={["Все типы", "Входящие", "Исходящие"]}
          handler={setSelectedCallType}
          selectedValue={selectedCallType}
        />

        {/* Фильтр по сотрудникам */}
        <EmployeesList
          data={[...uniqueFilteredEmployees]}
          handler={(selected) => setSelectedExecutor(selected)}
          selectedValue={selectedExecutor}
        />

        {/* НЕТ ИНФОРМАЦИИ В API */}
        {/* Фильтр для видов звонков */}
        {/* <DropDownFilter
          data={[
            "Все звонки",
            "Звонки от исполнителей",
            "Звонки от заказчиков",
          ]}
        /> */}

        {/* Фильтр для источников звонков */}
        <DropDownFilter
          data={["Все источники", "Facebook", "Google", "Balloons", "Yandex"]}
        />

        {/* Фильтр для оценок звонков */}
        <DropDownFilter
          data={["Все оценки", ...rateSet]}
          handler={(selected) => setSelectedRating(selected)}
          selectedValue={selectedRating}
        />

        {/* НЕТ ИНФОРМАЦИИ В API */}
        {/* Фильтр для ошибок звонков */}
        {/* <DropDownFilter data={["Все ошибки", "Отклоненные", "Очень плохо"]} /> */}
      </div>
    </div>
  );
};
