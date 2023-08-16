import React from 'react'
import plus from './plus.svg'
import s from './AddOrderButton.module.css'

export const AddOrderButton = () => {
  return (
    <div className={s.active}>Добавить заказ<img src={plus} alt="" /></div>
  )
}
