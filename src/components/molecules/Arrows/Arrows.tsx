import React from 'react'
import Arrow from '../../atoms/Arrow/Arrow';

interface IArrows {
    // eslint-disable-next-line no-unused-vars
    handleClick: (arrowDirection: string) => void;
}
const Arrows = ({ handleClick }: IArrows) => {
    return (
        <div>
            <a onClick={() => handleClick('arrow-up')} style={{ cursor: 'pointer', userSelect: 'none', margin: '20px' }} >
                <Arrow style={{
                    transform: 'scaleY(-1)'
                }} />
            </a>
            <a onClick={() => handleClick('arrow-down')} style={{ cursor: 'pointer', userSelect: 'none', margin: '20px' }}>
                <Arrow />
            </a>
        </div>
    )
}

export default Arrows
