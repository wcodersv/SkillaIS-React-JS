import React from "react";
import style from "./FilterPanel.module.css";
import { DropDownFilter } from "../../ui/Filters/DropDownFilter/DropDownFilter";
import { FindCall } from "../../ui/FindCall/FindCall";
import { useSelector } from "react-redux";

export const FilterPanel = ({
  handleInputChange,
  handleResetFilters,
  value,
  selectedCallType,
  setSelectedCallType,
  setSelectedExecutor,
  setSelectedSource,
  setSelectedRating,
  filtersActive,
}) => {
  // Получаем данные о записях из Redux-состояния
  const dataCalls = useSelector((state) => state.calls.calls);

  // Извлекаем имена сотрудников из данных
  const employees = new Set(
    dataCalls.map((item) => item.name).filter((item) => item),
  );
  // Извлекаем источники звонков из данных
  const sourceSet = new Set(
    dataCalls.map((item) => item.source).filter((item) => item),
  );

  // Извлекаем оценки звонков из данных
  const rateSet = new Set(
    dataCalls.map((item) => item.rate).filter((item) => item),
  );

  return (
    <div className={style.panel}>
      {/* Компонент для поиска звонка */}
      <FindCall handler={handleInputChange} value={value} />

      {/* Кнопка Сбросить фильтры */}
      {filtersActive && (
        <div className={style.btnContainer} onClick={handleResetFilters}>
          <button className={style.btnReset}>Сбросить фильтры</button>
          <span className={style.spanReset} />
        </div>
      )}

      <div className={style.filters}>
        {/* Фильтр для типов звонков */}
        <DropDownFilter
          data={["Все типы", "Входящие", "Исходящие"]}
          handler={setSelectedCallType}
          selectedValue={selectedCallType}
        />

        {/* Фильтр для исполнителей */}
        <DropDownFilter
          data={["Все сотрудники", ...employees]}
          handler={(selected) => setSelectedExecutor(selected)}
        />

        {/* Фильтр для видов звонков */}
        <DropDownFilter
          data={[
            "Все звонки",
            "Звонки от исполнителей",
            "Звонки от заказчиков",
          ]}
        />

        {/* Фильтр для источников звонков */}
        <DropDownFilter
          data={["Все источники", ...sourceSet]}
          handler={(selected) => setSelectedSource(selected)}
        />

        {/* Фильтр для оценок звонков */}
        <DropDownFilter
          data={["Все оценки", ...rateSet]}
          handler={(selected) => setSelectedRating(selected)}
        />

        {/* Фильтр для ошибок звонков */}
        <DropDownFilter data={["Все ошибки", "Отклоненные", "Очень плохо"]} />
      </div>
    </div>
  );
};
