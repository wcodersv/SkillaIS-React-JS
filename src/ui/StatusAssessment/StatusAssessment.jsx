import React from "react";
import style from "./StatusAssessment.module.css";

export const StatusAssessment = ({ rate, text }) => {
  let callRate = style.great;
  let textRange = "";

  if (rate === "good") {
    callRate = style.great;
    textRange = "Отлично";
  } else if (rate === "bad") {
    callRate = style.bad;
    textRange = "Плохо";
  } else if (rate === "soso") {
    callRate = style.good;
    textRange = "Хорошо";
  } else if (rate === "rejected") {
    callRate = style.rejected;
    textRange = "Отклоненный";
  } else {
    callRate = style.other_range;
    textRange = text;
  }

  return (
    <>
      <p className={callRate}>{textRange}</p>
    </>
  );
};
