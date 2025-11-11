import React from 'react'

function SlideCar({images}) {
        
    const style = {
        styleImg: {
            backgroundImage: `url(${images.center})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '12rem',
            flex: '1',
        }
    }
    return (
        <div className='SlideCar' style={style.styleImg}>
            {/* BACKGROUND IMAGE */}
        </div>
    )
}

export default SlideCar