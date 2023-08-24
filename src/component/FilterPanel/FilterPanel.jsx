import React from "react";
import style from "./FilterPanel.module.css";
import { DropDownFilter } from "../../ui/Filters/DropDownFilter/DropDownFilter";
import { FindCall } from "../../ui/FindCall/FindCall";
import { useSelector } from "react-redux";
import EmployeesList from "../../ui/EmployeesList";
import RatingList from "../../ui/RatingList/";

export const FilterPanel = ({
  handleInputChange,
  handleResetFilters,
  value,
  selectedCallType,
  setSelectedCallType,
  selectedExecutor,
  setSelectedExecutor,
  selectedSource,
  setSelectedSource,
  selectedRating,
  setSelectedRating,
  filtersActive,
}) => {
  // Получаем данные о записях из Redux-состояния
  const dataCalls = useSelector((state) => state.calls.calls);
  // Извлекаем имена сотрудников из данных
  const employeesSet = new Set(
    dataCalls
      .filter((item) => item.name && item.avatar && item.lastname)
      .map(({ name, avatar, lastname }) =>
        JSON.stringify({ name, avatar, lastname }),
      ),
  );

  const uniqueFilteredEmployees = Array.from(employeesSet)
    .map((str) => JSON.parse(str))
    .sort((a, b) => a.name.localeCompare(b.name));

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

        {/* Фильтр по сотрудникам */}
        <EmployeesList
          data={[...uniqueFilteredEmployees]}
          handler={(selected) => setSelectedExecutor(selected)}
          selectedValue={selectedExecutor}
        />

        {/* Фильтр для источников звонков */}
        <DropDownFilter
          data={["Все источники", ...sourceSet]}
          handler={(selected) => setSelectedSource(selected)}
          selectedValue={selectedSource}
        />

        {/* Фильтр для оценок звонков */}
        <RatingList
          data={[...rateSet]}
          handler={(selected) => setSelectedRating(selected)}
          selectedValue={selectedRating}
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

        {/* НЕТ ИНФОРМАЦИИ В API */}
        {/* Фильтр для ошибок звонков */}
        {/* <DropDownFilter data={["Все ошибки", "Отклоненные", "Очень плохо"]} /> */}
      </div>
    </div>
  );
};
