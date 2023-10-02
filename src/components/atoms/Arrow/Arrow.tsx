import React from 'react'
import arrowIcon from '../../../assets/arrow-navigate.png'


type TArrow = {
    style?: { transform: string }
}
const Arrow = ({ style }: TArrow) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img width='60%' style={style} src={arrowIcon} alt='arrow-icon' />
        </div>
    )
}

export default Arrow
