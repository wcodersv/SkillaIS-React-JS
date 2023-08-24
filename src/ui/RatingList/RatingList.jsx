import React, { useEffect, useState } from "react";
import style from "./RatingList.module.css";
import DotRaiting from "../DotRating";
import StatusAssessment from "../StatusAssessment";

export const RatingList = ({ data, handler, selectedValue }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false); // Состояние видимости опций в выпадающем списке
  const [text, setText] = useState("Все оценки"); // Текст для отображения выбранной оценки, изначально "Все оценки"

  // Обработчик выбора опции из списка
  const handleOptionClick = (value) => {
    handler(value); // Обновление выбранной оценки
    setText("Все оценки"); // Сброс текста после выбора
    setOptionsVisible(false); // Закрыть выпадающий список после выбора
  };

  // Проверка активности фильтрации по оценке
  const isActiveFilter = selectedValue !== "Все оценки";

  // Используем useEffect для обновления состояния text при изменении isActiveFilter
  useEffect(() => {
    if (!isActiveFilter) {
      setText("Все оценки");
    }
  }, [isActiveFilter]);

  return (
    <div className={style.container}>
      {/* Активный элемент */}
      <div
        className={`${isActiveFilter ? style.filtered : style.header}`}
        onClick={() => {
          setOptionsVisible(!isOptionsVisible);
        }}
      >
        {text}
        <div
          className={isOptionsVisible ? style.select_up : style.select_drop}
        ></div>
      </div>
      {/* Опции */}
      {isOptionsVisible && (
        <div className={style.options}>
          <div
            key={`all-range-${Date.now()}`}
            className={style.all_rangelist}
            onClick={() => {
              handleOptionClick("Все оценки");
              setText("Все оценки");
            }}
          >
            Все оценки
          </div>

          {data.map((item, index) => (
            <div
              key={`${index}-${Date.now()}`}
              className={`${style.option} ${
                selectedValue === item ? style.selected : ""
              }`}
              onClick={(event) => {
                const optionText = event.currentTarget.textContent;
                handleOptionClick(item);
                setText(optionText);
              }}
            >
              <DotRaiting rate={item} />
              <StatusAssessment rate={item} text={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
