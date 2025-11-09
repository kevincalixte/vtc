import React from 'react'
import vehiculeImg from '../../assets/img/vehicule1.png'

const style = {
    styleImg: {
        backgroundImage: `url(${vehiculeImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '12rem',
        flex: '1',
    }

}
function SlideCar() {
    return (
        <div className='SlideCar' style={style.styleImg}>
            {/* BACKGROUND IMAGE */}
        </div>
    )
}

export default SlideCar