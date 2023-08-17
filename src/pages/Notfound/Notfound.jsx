import React from "react";
import styles from "./Notfound.module.css";

export const Notfound = () => {
  return (
    <div>
      <div id={styles.background}></div>
      <div className={styles.top}>
        <h1 className={styles.title_header}>404</h1>
        <h3 className={styles.title_header3}>page not found</h3>
      </div>
      <div className={styles.container}>
        <div className={styles["ghost-copy"]}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
        </div>
        <div className={styles.ghost}>
          <div className={styles.face}>
            <div className={styles.eye}></div>
            <div className={styles["eye-right"]}></div>
            <div className={styles.mouth}></div>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.description}>
          Boo, looks like a ghost stole this page!
        </p>
      </div>

      <div className={styles.footer}>
        <p>
          made by <a href="https://codepen.io/juliepark"> julie</a>
        </p>
      </div>
    </div>
  );
};
