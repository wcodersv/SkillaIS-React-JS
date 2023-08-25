import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронное действие (thunk) для загрузки данных меню
export const fetchMenu = createAsyncThunk(
  "menu/fetchMenu",
  async ({ TOKEN }) => {
    // Отправляем POST-запрос к API для получения данных меню
    const response = await fetch("https://api.skilla.ru/partnership/getMenu", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`, // Передаем токен в заголовке
      },
    });

    const menu = await response.json();
    return menu;
  },
);

const menuSlice = createSlice({
  name: "menu", // Имя слайса
  initialState: {
    menu: [],
  },
  reducers: {}, // Редьюсеры для обычных действий (не асинхронных)
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        // Обработчик для статуса "запрос в процессе"
        state.status = "loading"; // Устанавливаем статус загрузки
        state.error = null; // Сбрасываем ошибку
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        // Обработчик для успешного завершения запроса
        state.status = "succeeded"; // Устанавливаем статус успешного завершения
        state.menu = action.payload; // Записываем полученные данные в состояние
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        // Обработчик для ошибки при запросе
        state.status = "failed"; // Устанавливаем статус ошибки
        state.error = action.error.message; // Записываем сообщение об ошибке
      });
  },
});

export default menuSlice.reducer;
