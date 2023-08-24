import React, { useState } from "react";
import style from "./DropDownFilter.module.css";

export const DropDownFilter = ({ data = [], handler, selectedValue }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке

  const handleOptionClick = (value) => {
    handler(value);
    setOptionsVisible(false); // Закрыть выпадающий список после выбора
  };

  return (
    <div className={style.container}>
      {/* Активный элемент */}
      <div
        className={style.header}
        onClick={() => {
          handleOptionClick(selectedValue);
          setOptionsVisible(!isOptionsVisible);
        }}
      >
        {selectedValue}
      </div>
      {/* Опции */}
      {isOptionsVisible && (
        <div className={style.options}>
          {data.map((item, index) => (
            <div
              key={index}
              className={`${style.option} ${
                selectedValue === item ? style.selected : ""
              }`}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
