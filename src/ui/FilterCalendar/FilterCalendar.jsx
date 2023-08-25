import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { subDays, subMonths, subYears, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import style from "./FilterCalendar.module.css";

export const FilterCalendar = ({
  handleDateRangeChange,
  selectedStartDate,
}) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [selectedOption, setSelectedOption] = useState("3 дня"); // Состояние выбранной опции
  const [selectedDate, setSelectedDate] = useState(null); // Состояние выбранной даты
  const [startDateRange, setStartDateRange] = useState(null); // Начальная дата диапазона
  const [endDateRange, setEndDateRange] = useState(null); // Конечная дата диапазона
  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // Видимость календаря
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0); // Индекс выбранной опции
  const [selectedDateRangeText, setSelectedDateRangeText] = useState(""); // Текст выбранного диапазона дат
  const [isFiltered, setIsFiltered] = useState(false); // Состояние для стилей, на активный

  // Варианты опций
  const options = ["3 дня", "Неделя", "Месяц", "Год", "Выбрать даты"];

  useEffect(() => {
    if (selectedStartDate === null) {
      setOptionsVisible(false);
      setSelectedOption("3 дня");
      setSelectedDate(null);
      setStartDateRange(null);
      setEndDateRange(null);
      setSelectedOptionIndex(0);
      setSelectedDateRangeText("");
      setIsFiltered(false);
    }
  }, [selectedStartDate]);

  // Переключение на следующую опцию - Вправо кнопка
  const nextOption = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
    setSelectedOption(options[(selectedOptionIndex + 1) % options.length]);
    handleOptionChange(options[(selectedOptionIndex + 1) % options.length]);
    setSelectedDateRangeText(""); // Сброс текста выбранного диапазона дат
  };

  // Переключение на предыдущую опцию - Влево кнопка
  const prevOption = () => {
    setSelectedOptionIndex(
      (prevIndex) => (prevIndex - 1 + options.length) % options.length,
    );
    setSelectedOption(
      options[(selectedOptionIndex - 1 + options.length) % options.length],
    );
    handleOptionChange(
      options[(selectedOptionIndex - 1 + options.length) % options.length],
    );
    setSelectedDateRangeText("");
  };

  // !Обработчик изменения опции
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setOptionsVisible(false); // Скрыть опции после выбора
    setDatePickerVisible(option === "Выбрать даты"); // Показать календарь, если выбрана опция "Выбрать даты"
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
    handleDateRangeChange(newStartDate, newEndDate);

    setSelectedOption(option);
    setSelectedOptionIndex(options.indexOf(option));
    setIsFiltered(true);
  };

  // !Обработчик изменения пользовательской даты
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

  // ! Обработчик выбора диапазона дат
  const handleDateRange = () => {
    let rangeText = "";

    if (startDateRange && endDateRange) {
      rangeText = `${format(startDateRange, "dd.MM.yyyy")} - ${format(
        endDateRange,
        "dd.MM.yyyy",
      )}`;
    } else if (startDateRange) {
      rangeText = `${format(startDateRange, "dd.MM.yyyy")} - __.__.__`;
    } else if (endDateRange) {
      rangeText = `__.__.__ - ${format(endDateRange, "dd.MM.yyyy")}`;
    } else {
      rangeText = "Выбрать даты";
    }

    setSelectedDateRangeText(rangeText);

    handleDateRangeChange(startDateRange, endDateRange);
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    <div className={style.custom_select}>
      <div className={style.select_header}>
        {/* Кнопка влево */}
        <button
          className={`${style.btn_arrow} ${style.arrow_left}`}
          onClick={prevOption}
        ></button>

        {/* Выпадающий список */}
        <div className={style.container}>
          <span className={style.icon_calendar} />
          <div
            className={style.select}
            onClick={() => setOptionsVisible(!isOptionsVisible)}
          >
            {/* Активный элемент - шапка */}
            <span className={`${isFiltered ? style.filtered : ""}`}>
              {selectedOption === "Выбрать даты"
                ? ""
                : options[selectedOptionIndex]}
              {selectedDateRangeText}
            </span>
            {/* Опции */}
            {isOptionsVisible && (
              <div className={style.options}>
                {/* Предустановленные варианты диапазонов */}
                {options.map((option) => (
                  <p
                    key={option}
                    className={style.option}
                    onClick={() => handleOptionChange(option)}
                  >
                    {option}
                  </p>
                ))}
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
                      ? selectedDateRangeText
                      : "__.__.__-__.__.__"}
                  </span>
                  <span className={style.icon_calendar} />
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Кнопка вправо */}
        <button
          className={`${style.btn_arrow} ${style.arrow_right}`}
          onClick={nextOption}
        ></button>
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
          <button
            onClick={() => {
              handleDateRange();
              handleDateRangeChange(startDateRange, endDateRange);
            }}
            className={style.btn_ok}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};
