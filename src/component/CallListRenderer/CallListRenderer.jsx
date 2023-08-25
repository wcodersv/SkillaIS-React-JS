import React from "react";
import { useSelector } from "react-redux";
import CallDetails from "../CallDetails";
import style from "./CallListRenderer.module.css";

export const CallListRenderer = ({
  value,
  startDate,
  endDate,
  selectedCallType,
  selectedExecutor,
  selectedSource,
  selectedRating,
}) => {
  // Получаем текущую дату и время
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const now = `${year}-${month}-${day} ${hour}:${min}`;

  // Получаем данные о звонках из Redux
  const callListData = useSelector((state) => state.calls.calls);

  // Добавляем примерные данные о звонках для демонстрации с сегодняшним днем
  const resultData = [
    ...callListData,
    {
      avatar:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      id: "93af7aae-4f4d-444a-aa77-65186a93243",
      time: now,
      name: "Evans",
      lastname: "Spears",
      source: "Banana Company",
      duration: "2:56",
      rate: "good",
      phone: "+7(980)723-132-277",
      calldirect: "incoming",
      profession: "operator",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      id: "93af7aae-4f4d-444a-aa77-65186a986597",
      time: now,
      name: "Pitter",
      lastname: "Parker",
      source: "Yota",
      duration: "3:23",
      rate: "good",
      phone: "+7(980)788-132-297",
      calldirect: "outcoming",
      profession: "operator",
    },
  ];

  const filteredCalls = resultData
    .filter((item) => {
      // Фильтрация по датам
      if (startDate && endDate) {
        const callTime = new Date(item.time);
        return callTime >= startDate && callTime <= endDate;
      }
      return true;
    })
    .filter((item) => {
      // Фильтрация по типу звонка
      if (selectedCallType === "Входящие") {
        return item.calldirect === "incoming";
      } else if (selectedCallType === "Исходящие") {
        return item.calldirect === "outcoming";
      }
      return true; // Показать все типы при выборе "Все типы"
    })
    .filter((item) => {
      // Фильтрация по имени, источнику и номеру телефона
      return (
        (item.name && item.name.toLowerCase().trim().includes(value.trim())) ||
        (item.source &&
          item.source.toLowerCase().trim().includes(value.trim())) ||
        (item.phone && item.phone.toLowerCase().trim().includes(value.trim()))
      );
    })
    .filter((item) => {
      // Фильтрация по исполнителю
      if (selectedExecutor !== "Все сотрудники") {
        return item.name === selectedExecutor;
      }
      return true; // Показать все исполнителей при выборе "Все сотрудники"
    })
    .filter((item) => {
      // Фильтрация по источнику звонка
      if (selectedSource !== "Все источники") {
        return item.source === selectedSource;
      }
      return true;
    })
    .filter((item) => {
      // Фильтрация по оценке звонка
      if (selectedRating !== "Все оценки") {
        return item.rate === selectedRating;
      }
      return true;
    })
    .sort((a, b) => {
      // Сортировка отфильтрованных звонков по времени в обратном порядке
      return new Date(b.time) - new Date(a.time);
    });

  // Объект для группировки записей по датам
  const groupedCalls = {};

  // Группируем звонки по датам
  filteredCalls.forEach((item) => {
    if (!item.time) {
      return;
    }

    // Извлекаем дату из времени звонка
    const callDate = item.time.substr(0, 10);

    // Создаем массив для данной даты, если его нет
    if (!groupedCalls[callDate]) {
      groupedCalls[callDate] = [];
    }
    groupedCalls[callDate].push(item);
  });

  return (
    <>
      {/* Отображаем звонки сгруппированные по датам */}
      {Object.keys(groupedCalls).map((date) => (
        <div key={date}>
          {/* Выводим дату с количеством звонков */}
          <h2
            className={style.title}
            style={date === `${year}-${month}-${day}` ? { marginTop: "0" } : {}}
          >
            {/* Заголовок даты, если дата совпадает с сегодняшним днем, выводим "Сегодня" */}
            {date === `${year}-${month}-${day}` ? "Сегодня" : date}
            <sup className={style.sup}>{groupedCalls[date].length}</sup>
          </h2>

          {/* Отображаем детали каждого звонка */}
          {groupedCalls[date].map((item) => (
            <CallDetails
              source={item.source}
              key={item.id}
              avatar={item.avatar}
              number={item.phone}
              time={item.time ? item.time.substr(11, 5) : ""}
              duration={item.duration}
              status={item.rate}
              direction={item.calldirect}
            />
          ))}
        </div>
      ))}
    </>
  );
};
