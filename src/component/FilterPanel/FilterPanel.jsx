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
        <DropDownFilter data={["Все типы", "Входящие", "Исходящие"]} />
        <DropDownFilter data={["Все исполнители", ...employees]} />
        <DropDownFilter
          data={[
            "Все звонки",
            "Звонки от исполнителей",
            "Звонки от заказчиков",
          ]}
        />
        <DropDownFilter
          data={["Все источники", "Facebook", "Google", "Balloons", "Yandex"]}
        />
        <DropDownFilter data={["Все оценки", "Хорошо", "Плохо", "Средне"]} />
        <DropDownFilter data={["Все ошибки", "Отклоненные", "Очень плохо"]} />
      </div>
    </div>
  );
};
