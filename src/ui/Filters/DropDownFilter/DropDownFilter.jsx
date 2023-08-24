import React, { useState } from "react";
import style from "./DropDownFilter.module.css";

export const DropDownFilter = ({ data = [], handler, selectedValue }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке

  const handleOptionClick = (value) => {
    handler(value);
    setOptionsVisible(false); // Закрыть выпадающий список после выбора
  };

  const isActiveFilter =
    selectedValue !== "Все типы" && selectedValue !== "Все источники"; // Здесь проверяем, активен ли фильтр

  return (
    <div className={style.container}>
      {/* Активный элемент */}
      <div
        className={`${isActiveFilter ? style.filtered : style.header}`}
        onClick={() => {
          setOptionsVisible(!isOptionsVisible);
        }}
      >
        {selectedValue}
        <div
          className={isOptionsVisible ? style.select_up : style.select_drop}
        ></div>
      </div>
      {/* Опции */}
      {isOptionsVisible && (
        <div className={style.options}>
          {data.map((item, index) => (
            <div
              key={`${index}-dropdownfilter`}
              className={`${style.option} ${
                selectedValue === item ? style.selected : ""
              }`}
              onClick={() => {
                handleOptionClick(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
