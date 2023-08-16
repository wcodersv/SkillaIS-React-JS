import React from 'react'
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.body}>
            <ul>
                <li>Итоги</li>
                <li>Заказы</li>
                <li>Сообщения</li>
                <li>Звонки</li>
                <li>Контрагенты</li>
                <li>Документы</li>
                <li>Исполнители</li>
                <li>Отчеты</li>
                <li>База знаний</li>
                <li>Настройки</li>
            </ul>

        </nav>
    )
}
