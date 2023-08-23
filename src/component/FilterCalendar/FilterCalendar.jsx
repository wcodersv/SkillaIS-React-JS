import React, { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { addDays, addWeeks, addMonths, addYears, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import style from "./FilterCalendar.module.css";

export const FilterCalendar = () => {
  const callListData = useSelector((state) => state.calls.calls);

  console.log("FilterCalendar", callListData);
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [selectedOption, setSelectedOption] = useState("3 дня"); // Состояние выбранной опции
  const [selectedDate, setSelectedDate] = useState(null); // Состояние выбранной даты
  const [startDateRange, setStartDateRange] = useState(null); // Начальная дата диапазона
  const [endDateRange, setEndDateRange] = useState(null); // Конечная дата диапазона
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // Обработчик изменения опции
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false); // Скрываем опции после выбора
    setDatePickerVisible(!isDatePickerVisible);
    setStartDateRange(null); // Создаем копию объекта даты
    setEndDateRange(null); // Очищаем конечную дату

    let newDate;

    // Определение новой даты в зависимости от выбранной опции
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
    if (startDateRange == null) {
      setStartDateRange(new Date(date)); // Создаем копию объекта даты
    } else if (endDateRange == null) {
      if (new Date(date) < startDateRange) {
        setStartDateRange(new Date(date)); // Создаем копию объекта даты
        setEndDateRange(new Date(startDateRange)); // Создаем копию объекта даты
      } else {
        setEndDateRange(new Date(date)); // Создаем копию объекта даты
      }
    } else {
      setStartDateRange(null); // Создаем копию объекта даты
      setEndDateRange(null); // Очищаем конечную дату
    }

    setSelectedDate(date);
  };

  const handleDateRange = () => {
    setSelectedOption(
      `${format(startDateRange, "dd.MM.yyyy")}-${format(
        endDateRange,
        "dd.MM.yyyy",
      )}`,
    );
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    <div className={style.custom_select}>
      <div className={style.select_header}>
        <button className={`${style.btn_arrow} ${style.arrow_left}`}></button>
        <div className={style.container}>
          <span className={style.icon_calendar} />

          {/* Выпадающий список */}
          <div
            className={style.select}
            onClick={() => setOptionsVisible(!isOptionsVisible)}
          >
            <span>{selectedOption}</span>
            {isOptionsVisible && (
              <div className={style.options}>
                {/* Предустановленные варианты диапазонов */}
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
                <p
                  className={style.option}
                  onClick={() => handleOptionChange("Выбрать даты")}
                >
                  Указать даты
                </p>
                {/* Пользовательский ввод дат */}
                <p className={style.option}>
                  <span
                    className={style.dateRange}
                    onClick={() => handleOptionChange("Выбрать даты")}
                  >
                    {selectedOption !== "3 дня"
                      ? selectedOption
                      : "__.__.__-__.__.__"}
                  </span>
                  <span className={style.icon_calendar} />
                </p>
              </div>
            )}
          </div>
        </div>

        <button className={`${style.btn_arrow} ${style.arrow_right}`}></button>
      </div>

      {/* Отображение выбора пользовательской даты */}
      {selectedOption === "Выбрать даты" && isDatePickerVisible && (
        <div className={style.datePickerWrapper}>
          <DatePicker
            selected={selectedDate} // Выбранная пользователем дата
            onChange={handleCustomDateChange} // Обработчик изменения даты
            startDate={startDateRange} // Начальная дата для диапазона (одиночная дата)
            endDate={endDateRange} // Конечная дата для диапазона (одиночная дата)
            inline={isDatePickerVisible} // Режим встроенного отображения
            className={style.customDatePicker} // Применяемый класс стилей для DatePicker
          />
          <button onClick={handleDateRange} className={style.btn_ok}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};
