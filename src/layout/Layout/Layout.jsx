import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "../../pages/Notfound";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import style from "./Layout.module.css";

export const Layout = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Notfound />,
    },
  ]);

  return (
    <>
      <Header />
      <div className={style.content}>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
};
