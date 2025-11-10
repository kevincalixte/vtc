import React from 'react'
import carImg from '../../assets/img/vehicule1.png'

const style = {
    styleImg: {
        backgroundImage: `url(${carImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '12rem',
        flex: '1',
    }
}
function SlideCar({carImg}) {
    return (
        <div className='SlideCar' style={style.styleImg}>
            {/* BACKGROUND IMAGE */}
        </div>
    )
}

export default SlideCar