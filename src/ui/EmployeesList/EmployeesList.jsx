import React, { useState } from "react";
import style from "./EmployeesList.module.css";
import Avatar from "../TableComponents/Avatar1";

export const EmployeesList = ({ data, handler, selectedValue }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [isFiltered, setIsFiltered] = useState(false); // Состояние для стилей, на активный
  const [lastName, setLastName] = useState("");

  const handleOptionClick = (item) => {
    handler(item);
    setIsFiltered(true);
    setOptionsVisible(false); // Закрыть выпадающий список после выбора
  };

  return (
    <div className={style.container}>
      {/* Активный элемент */}
      <div
        className={`${isFiltered ? style.filtered : style.header}`}
        onClick={() => {
          setOptionsVisible(!isOptionsVisible);
        }}
      >
        {`${selectedValue} ${lastName}`}
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
                setIsFiltered(false);
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
