import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { subDays, subMonths, subYears, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import style from "./FilterCalendar.module.css";

export const FilterCalendar = ({ filterCalendar }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [selectedOption, setSelectedOption] = useState("3 дня"); // Состояние выбранной опции
  const [selectedDate, setSelectedDate] = useState(null); // Состояние выбранной даты
  const [startDateRange, setStartDateRange] = useState(null); // Начальная дата диапазона
  const [endDateRange, setEndDateRange] = useState(null); // Конечная дата диапазона
  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // Определяет, виден ли календарь

  // Обработчик изменения опции
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false); // Скрыть опции после выбора
    setDatePickerVisible(!isDatePickerVisible); // Переключить видимость календаря
    setStartDateRange(null); // Сбросить начальную дату диапазона
    setEndDateRange(null); // Сбросить конечную дату диапазона

    let newStartDate;
    let newEndDate;

    // Определение новой даты в зависимости от выбранной опции
    switch (option) {
      case "3 дня":
        newStartDate = subDays(new Date(), 3);
        newEndDate = new Date(); // Сегодняшняя дата
        break;
      case "Неделя":
        newStartDate = subDays(new Date(), 7);
        newEndDate = new Date();
        break;
      case "Месяц":
        newStartDate = subMonths(new Date(), 1);
        newEndDate = new Date();
        break;
      case "Год":
        newStartDate = subYears(new Date(), 1);
        newEndDate = new Date();
        break;
      default:
        newStartDate = null;
        newEndDate = null;
    }

    setStartDateRange(newStartDate);
    setEndDateRange(newEndDate);
  };

  // Обработчик изменения пользовательской даты
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

  // Обработчик выбора диапазона дат
  const handleDateRange = () => {
    // Обновить выбранную опцию с диапазоном дат в формате "Начало-Конец"
    setSelectedOption(
      `${format(startDateRange, "dd.MM.yyyy")}-${format(
        endDateRange,
        "dd.MM.yyyy",
      )}`,
    );
    filterCalendar(startDateRange, endDateRange);

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
                    {selectedOption !== "3 дня" &&
                    selectedOption !== "Неделя" &&
                    selectedOption !== "Месяц" &&
                    selectedOption !== "Год"
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
