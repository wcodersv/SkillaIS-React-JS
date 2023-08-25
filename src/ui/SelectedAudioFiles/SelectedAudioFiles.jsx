import React from "react";
import style from "./SelectedAudioFiles.module.css";
import ButtonClose from "../ButtonClose";
import ButtonDownload from "../ButtonDownload";

export const SelectedAudioFiles = () => {
  return (
    <div className={style.body}>
      <label className={style.select}>
        Выбрано <span>2 аудиофайла</span>
      </label>
      <label className={style.selectall}>
        Выбрать все <span>310</span>
      </label>
      <label className={style.recognize}>Распознать</label>
      <ButtonDownload />
      <ButtonClose />
    </div>
  );
};
