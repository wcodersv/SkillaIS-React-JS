import React, { useState } from "react";
import style from "./EmployeesList.module.css";
import Avatar from "../TableComponents/Avatar1";

export const EmployeesList = ({ data, handler, selectedValue }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [lastName, setLastName] = useState("");

  const handleOptionClick = (item) => {
    handler(item);
    setLastName(""); // Сбрасываем имя сотрудника при выборе опции
    setOptionsVisible(false); // Закрыть выпадающий список после выбора
  };

  const isActiveFilter = selectedValue !== "Все сотрудники"; // Здесь проверяем, активен ли фильтр

  return (
    <div className={style.container}>
      {/* Активный элемент */}
      <div
        className={`${isActiveFilter ? style.filtered : style.header}`}
        onClick={() => {
          setOptionsVisible(!isOptionsVisible);
        }}
      >
        {`${selectedValue} ${lastName}`}
        <div
          className={isOptionsVisible ? style.select_up : style.select_drop}
        ></div>
      </div>
      {/* Опции */}
      {isOptionsVisible && (
        <div className={style.options}>
          <div
            key={"all-employeeslist"}
            className={style.all_employeeslist}
            onClick={() => {
              {
                setLastName("");
                handleOptionClick("Все сотрудники");
              }
            }}
          >
            Все сотрудники
          </div>

          {data.map((item, index) => (
            <div
              key={`${index}-employeeslist`}
              className={`${style.option} ${
                selectedValue === item ? style.selected : ""
              }`}
              onClick={() => {
                setLastName(`${item.lastname ? item.lastname[0] : ""}.`);
                handleOptionClick(item.name);
              }}
            >
              <div className={style.avatar}>
                <Avatar img={item.avatar} />
              </div>

              {`${item.name} ${item.lastname ? item.lastname[0] : ""}.`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
