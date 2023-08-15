import React, { useState } from 'react'
import defaultRating from './Default.svg'
import middleRating from './middleRating.svg'
import badRating from './badRating.svg'

export const Rating = ({ state = 'default' }) => {

    let style = defaultRating

    if (state === 'default') {
        style = defaultRating
    } else if (state==='middle') {
        style = middleRating
    } else {
        style = badRating
    }

        return (
            <img src={style} alt="" />
        )
}
