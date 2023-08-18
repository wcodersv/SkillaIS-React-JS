import React, { useEffect } from "react";
import "./styles/global.css";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menuSlice";
import Layout from "../layout/Layout";
import { fetchFilters } from "../store/filtersSlice";

/**
 * Application entrypoint
 * @return {Page} Main page
 */
function App() {
  const TOKEN = "testtoken";
  const dispatch = useDispatch();

  // Используем useEffect для загрузки данных меню после монтирования компонента
  useEffect(() => {
    dispatch(fetchMenu({ TOKEN })); // Передаем TOKEN в виде объекта
  }, [dispatch, TOKEN]);
  dispatch(fetchFilters());

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
