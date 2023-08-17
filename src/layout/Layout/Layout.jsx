import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import style from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={style.content}>
        {children}
        <Footer />
      </div>
    </>
  );
};
