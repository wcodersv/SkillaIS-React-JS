import React from "react";
import "./BlueButton.css";

const sizes = {
  l: "large",
  s: "small",
};

const backgroundColors = {
  solid: "blue",
  transperent: "transperent",
  non: "non",
};

//* Размеры: s (small)/ l (large)
//* solid (полная заливка фона)
//* transperent (белый фон с синим бордером)
//* non (без фона, только текст)

export const BlueButton = ({
  children = "Подключить",
  size = "s",
  background = "solid",
  handler,
}) => {
  const rootClass = ["btn", sizes[size], backgroundColors[background]];
  return (
    <div onClick={handler} className={rootClass.join(" ")}>
      {children}
    </div>
  );
};
