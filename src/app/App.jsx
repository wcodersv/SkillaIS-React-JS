import React, { useEffect } from "react";
import "./styles/global.css";
import { useDispatch } from "react-redux";
import Layout from "../layout/Layout";
import { fetchMenu } from "../store/reducers/menuSlice";
import { fetchCalls } from "../store/reducers/callsSlice";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  const TOKEN = "testtoken";
  const dispatch = useDispatch();

  // Используем useEffect для загрузки данных после монтирования компонента
  useEffect(() => {
    dispatch(fetchMenu({ TOKEN })); // Передаем TOKEN в виде объекта
    dispatch(fetchCalls());
  }, [dispatch]);

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
