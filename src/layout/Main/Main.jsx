import React, { useState } from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
import Calls from "../../component/Calls";
import ButtonBalanceIcon from "../../ui/ButtonBalanceIcon";
import FilterCalendar from "../../component/FilterCalendar";

export const Main = () => {
  const [value, setValue] = useState(""); // Состояние для хранения значения фильтрации Input (FindCall)
  const [selectedStartDate, setSelectedStartDate] = useState(null); // Состояние начальной даты диапазона (FilterCalendar)
  const [selectedEndDate, setSelectedEndDate] = useState(null); // Состояние конечной даты диапазона (FilterCalendar)
  const [selectedCallType, setSelectedCallType] = useState("Все типы"); // Состояние для фильтра по Типу звонка
  const [selectedExecutor, setSelectedExecutor] = useState("Все сотрудники"); // Состояние для фильтра по Исполнителям
  const [selectedSource, setSelectedSource] = useState("Все источники"); // Состояние для фильтра по Источнику
  const [selectedRating, setSelectedRating] = useState("Все оценки"); // Состояние для фильтра по Оценкам

  // Обработчик изменения значения фильтрации
  const handleInputChange = (evt) => {
    setValue(evt.target.value);
    console.log(evt.target.value);
  };

  // Обработчик изменения даты диапазона
  const handleDateRangeChange = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const hasActiveFilters =
    value !== "" ||
    selectedStartDate !== null ||
    selectedEndDate !== null ||
    selectedCallType !== "Все типы" ||
    selectedExecutor !== "Все сотрудники" ||
    selectedSource !== "Все источники" ||
    selectedRating !== "Все оценки";

  const handleResetFilters = () => {
    setValue("");
    setSelectedStartDate(null);
    setSelectedEndDate(null);
    setSelectedCallType("Все типы");
    setSelectedExecutor("Все сотрудники");
    setSelectedSource("Все источники");
    setSelectedRating("Все оценки");
  };

  return (
    <main className={style.body}>
      <UserPanel />
      <div className={style.main}>
        <div className={style.additional_filtering}>
          <ButtonBalanceIcon />
          <FilterCalendar handleDateRangeChange={handleDateRangeChange} />
        </div>
        <FilterPanel
          handleResetFilters={handleResetFilters}
          handleInputChange={handleInputChange}
          value={value}
          selectedCallType={selectedCallType}
          setSelectedCallType={setSelectedCallType}
          selectedExecutor={selectedExecutor}
          setSelectedExecutor={setSelectedExecutor}
          selectedSource={selectedSource}
          setSelectedSource={setSelectedSource}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          filtersActive={hasActiveFilters} // Передаем флаг активных фильтров в FilterPanel
        />

        <CallGrid>
          <Calls
            value={value}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            selectedCallType={selectedCallType}
            selectedExecutor={selectedExecutor}
            selectedSource={selectedSource}
            selectedRating={selectedRating}
          />
        </CallGrid>
      </div>
    </main>
  );
};
