// Импорт необходимых зависимостей
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"; // Импорт редьюсера для меню
import callsReducer from "./callsSlice";

// Создание и настройка Redux Store
export default configureStore({
  reducer: {
    menu: menuReducer, // Подключение редьюсера для меню к состоянию
    calls: callsReducer,
  },
});
