import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import style from "./ProgressBarCom.module.css";

export const ProgressBarCom = ({
  color = "green",
  progress,
  totalCalls,
  currentCalls,
  persent = 50,
  text,
  prs = "numbers",
}) => {
  const colors = {
    green: "#28A879",
    yellow: "#FFD500",
    red: "#EA1A4F",
  };

  let currentColor = colors.green;
  if (color === "red") {
    currentColor = colors.red;
  } else if (color === "yellow") {
    currentColor = colors.yellow;
  }
  return (
    <div className={style.progressbar}>
      <div className={style.text}>
        {text}
        <div style={{ color: currentColor }} className={style.textgreen}>
          {prs === "numbers" ? (
            <p>
              {currentCalls} из {totalCalls} шт
            </p>
          ) : (
            <p>{persent}%</p>
          )}
        </div>
      </div>
      <ProgressBar
        completed={progress}
        bgColor={currentColor}
        height="6px"
        width="156px"
        labelAlignment="center"
        isLabelVisible={false}
        labelColor="t"
        margin="7px 0 0 0"
      />
    </div>
  );
};
