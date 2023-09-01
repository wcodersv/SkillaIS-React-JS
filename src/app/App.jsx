import React, { useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import { useDispatch } from "react-redux";
import Layout from "../layout/Layout";
import { fetchMenu } from "../store/reducers/menuSlice";
import { fetchCalls } from "../store/reducers/callsSlice";
import Notfound from "../pages/Notfound";
import ExitError from "../pages/ExitPage";

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

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
    },
    {
      path: "/exit",
      element: <ExitError />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
