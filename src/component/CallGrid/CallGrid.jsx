import React from "react";
import "./CallGrid.css";

export const CallGrid = ({ children }) => {
  return (
    <>
      <div className="grid_header">
        <p className="type_title">Тип</p>
        <p className="time_title">Время</p>
        <p className="employee_title">Сотрудник</p>
        <p className="call_title">Звонок</p>
        <p className="source_title">Источник</p>
        <p className="grade_title">Оценка</p>
        <p className="duration_title">Длительность</p>
      </div>
      <div className="callgrid">{children}</div>
      <div className="grid_footer"></div>
    </>
  );
};
