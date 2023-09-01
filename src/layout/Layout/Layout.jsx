import React from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import style from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.content}>
        <Main />
        <Footer />
      </div>
    </>
  );
};
