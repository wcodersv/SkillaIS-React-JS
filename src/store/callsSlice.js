import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронное действие (thunk) для загрузки данных меню
export const fetchCalls = createAsyncThunk("calls/fetchCalls", async () => {
  // Отправляем POST-запрос к API для получения данных меню
  const response = await fetch(
    "https://64df4c2a71c3335b258267fa.mockapi.io/employees",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  // Преобразуем ответ в формат JSON и возвращаем полученные данные
  const calls = await response.json();
  return calls;
});

// Создаем слайс (часть состояния) для меню
const callsSlice = createSlice({
  name: "calls", // Имя слайса
  initialState: {
    calls: [], // Начальное состояние: пустой массив для данных меню
  },
  reducers: {}, // Редьюсеры для обычных действий (не асинхронных)
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalls.pending, (state) => {
        // Обработчик для статуса "запрос в процессе"
        state.status = "loading"; // Устанавливаем статус загрузки
        state.error = null; // Сбрасываем ошибку
      })
      .addCase(fetchCalls.fulfilled, (state, action) => {
        // Обработчик для успешного завершения запроса
        state.status = "succeeded"; // Устанавливаем статус успешного завершения
        state.calls = action.payload; // Записываем полученные данные в состояние
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        // Обработчик для ошибки при запросе
        state.status = "failed"; // Устанавливаем статус ошибки
        state.error = action.error.message; // Записываем сообщение об ошибке
      });
  },
});

export default callsSlice.reducer; // Экспортируем редьюсер из слайса
