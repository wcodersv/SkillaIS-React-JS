import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuSlice";
import callsReducer from "./reducers/callsSlice";

// Создание и настройка Redux Store
export default configureStore({
  reducer: {
    menu: menuReducer, // Подключение редьюсера для меню к состоянию
    calls: callsReducer,
  },
});
