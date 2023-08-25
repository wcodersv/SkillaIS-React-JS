import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронное действие (thunk) для загрузки данных звонков
export const fetchCalls = createAsyncThunk("calls/fetchCalls", async () => {
  // Отправляем GET-запрос к API для получения данных звонков
  const response = await fetch(
    "https://64df4c2a71c3335b258267fa.mockapi.io/employees",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const calls = await response.json();
  return calls;
});

const callsSlice = createSlice({
  name: "calls",
  initialState: {
    calls: [],
  },
  reducers: {},
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

export default callsSlice.reducer;
