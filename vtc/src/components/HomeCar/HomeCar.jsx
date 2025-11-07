import React from 'react'
import backgroundImg from '../../assets/img/background1.jpg'

const style = {
    styleBase: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'left',
        // backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
        padding: '.5rem .8rem 0 0',
    }
}
function HomeCar({ children }) {
    return (
        <div style={style.styleBase}>
            {children}
        </div>
    )
}

export default HomeCar