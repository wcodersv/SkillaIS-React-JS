import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMenu } from "../store/menuSlice";
import "./styles/global.css";
import Layout from "../layout/Layout";

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

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
