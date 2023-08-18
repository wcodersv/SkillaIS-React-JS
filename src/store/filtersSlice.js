import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронное действие (thunk) для загрузки данных меню
export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async () => {
    // Отправляем POST-запрос к API для получения данных меню
    const response = await fetch("https://api.skilla.ru/mango/getList", {
      method: "POST",
      headers: {
        Authorization: `Bearer testtoken`, // Передаем токен в заголовке
      },
    });
    // Преобразуем ответ в формат JSON и возвращаем полученные данные
    const filters = await response.json();
    return filters;
  },
);

// Создаем слайс (часть состояния) для меню
const filtersSlice = createSlice({
  name: "filters", // Имя слайса
  initialState: {
    filters: [], // Начальное состояние: пустой массив для данных меню
  },
  reducers: {}, // Редьюсеры для обычных действий (не асинхронных)
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        // Обработчик для статуса "запрос в процессе"
        state.status = "loading"; // Устанавливаем статус загрузки
        state.error = null; // Сбрасываем ошибку
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        // Обработчик для успешного завершения запроса
        state.status = "succeeded"; // Устанавливаем статус успешного завершения
        state.filters = action.payload; // Записываем полученные данные в состояние
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        // Обработчик для ошибки при запросе
        state.status = "failed"; // Устанавливаем статус ошибки
        state.error = action.error.message; // Записываем сообщение об ошибке
      });
  },
});

export default filtersSlice.reducer; // Экспортируем редьюсер из слайса
