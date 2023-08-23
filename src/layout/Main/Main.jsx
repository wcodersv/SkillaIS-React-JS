import React, { useState } from "react";
import style from "./Main.module.css";
import UserPanel from "../../component/UserPanel";
import FilterPanel from "../../component/FilterPanel";
import CallGrid from "../../component/CallGrid";
// import Profile from "../../component/Profile";
import Calls from "../../component/Calls";
import ButtonBalanceIcon from "../../ui/ButtonBalanceIcon";
import FilterCalendar from "../../component/FilterCalendar";

export const Main = () => {
  const [value, setValue] = useState(""); // Состояние для хранения значения фильтрации Input (FindCall)
  const [selectedStartDate, setSelectedStartDate] = useState(null); // Состояние начальной даты диапазона (FilterCalendar)
  const [selectedEndDate, setSelectedEndDate] = useState(null); // Состояние конечной даты диапазона (FilterCalendar)

  // Обработчик изменения значения фильтрации
  const changer = (evt) => {
    setValue(evt.target.value);
  };

  // Обработчик изменения даты диапазона
  const handleDateRangeChange = (startDate, endDate) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  return (
    <main className={style.body}>
      <UserPanel />
      {/* <Profile /> */}
      <div className={style.main}>
        <div className={style.additional_filtering}>
          <ButtonBalanceIcon />
          <FilterCalendar handleDateRangeChange={handleDateRangeChange} />
        </div>
        <FilterPanel handler={changer} value={value} />

        <CallGrid>
          <Calls
            value={value}
            startDate={selectedStartDate}
            endDate={selectedEndDate}
          />
        </CallGrid>
      </div>
    </main>
  );
};
