import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, addWeeks, addMonths, addYears } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import style from "./FilterCalendar.module.css";

export const FilterCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("3 дня");
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Добавлено состояние для опций

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false); // Скрываем опции после выбора

    let newDate;

    switch (option) {
      case "3days":
        newDate = addDays(new Date(), 3);
        break;
      case "1week":
        newDate = addWeeks(new Date(), 1);
        break;
      case "1month":
        newDate = addMonths(new Date(), 1);
        break;
      case "1year":
        newDate = addYears(new Date(), 1);
        break;
      default:
        newDate = null;
    }

    setSelectedDate(newDate);
  };

  const handleCustomDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOption("custom");
  };

  return (
    <div className={style.custom_select}>
      <div className={style.select_header}>
        <button className={`${style.btn_arrow} ${style.arrow_left}`}></button>
        <div className={style.container}>
          <span className={style.icon_calendar} />

          {/* Select */}
          <div
            className={style.select}
            onClick={() => setOptionsVisible(!isOptionsVisible)}
          >
            <span>{selectedOption}</span>
            {isOptionsVisible && (
              <div className={style.options}>
                <p
                  className={style.option}
                  onClick={() => handleOptionChange("3 дня")}
                >
                  3 дня
                </p>
                <p
                  className={style.option}
                  onClick={() => handleOptionChange("Неделя")}
                >
                  Неделя
                </p>
                <p
                  className={style.option}
                  onClick={() => handleOptionChange("Месяц")}
                >
                  Месяц
                </p>
                <p
                  className={style.option}
                  onClick={() => handleOptionChange("Год")}
                >
                  Год
                </p>
                <div
                  className={style.option}
                  onClick={() => handleOptionChange("custom")}
                >
                  Указать даты
                </div>
              </div>
            )}
          </div>
        </div>

        <button className={`${style.btn_arrow} ${style.arrow_right}`}></button>
      </div>

      {selectedOption === "custom" && (
        <DatePicker
          selected={selectedDate}
          onChange={handleCustomDateChange}
          startDate={selectedDate}
          endDate={selectedDate}
          inline
        />
      )}
    </div>
  );
};
