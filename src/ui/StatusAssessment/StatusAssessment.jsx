/* eslint-disable react/react-in-jsx-scope */
import s from "./StatusAssessment.module.css";

export const StatusAssessment = ({ rate, text }) => {
  let callRate = s.great;

  if (rate === "good") {
    callRate = s.great;
  } else if (rate === "bad") {
    callRate = s.bad;
  } else if (rate === "soso") {
    callRate = s.good;
  } else {
    callRate = s.rejected;
  }

  return (
    <>
      <p className={callRate}>{text}</p>
    </>
  );
};
