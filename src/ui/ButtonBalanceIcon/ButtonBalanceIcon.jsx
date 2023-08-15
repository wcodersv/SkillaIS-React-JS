import React from 'react';
import style from './ButtonBalanceIcon.module.css'

export const ButtonBalanceIcon = () => {
    return (
        <>
            <label className={style.button}>
                Баланс: <span>272 ₽</span>
            </label>
        </>
    )
}
