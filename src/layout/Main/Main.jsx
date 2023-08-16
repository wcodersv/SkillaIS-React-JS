import React from 'react'
import style from './Main.module.css'
import {HeaderMain} from "./HeaderMain/HeaderMain"

export const Main = () => {
  return (
    <div className={style.body}>
      <HeaderMain />
    </div>
  )
}
