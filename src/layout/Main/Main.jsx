import React from 'react'
import style from './Main.module.css'

export const Main = ({ children }) => {
  return (
    <div className={style.body}>{ children }</div>
  )
}
