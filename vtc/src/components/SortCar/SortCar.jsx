import React from 'react'

const style = {
    styleSelect: {
        padding: '0.4rem',
        marginTop: '1rem',
        backgroundColor: '#FCFCFC',
        boder: '1px solid #CCCCCC',
        borderRadius: '.2rem'
    }
}
function SortCar() {
    return (
        <select className='SortCar' style={style.styleSelect}>
            <option value="">Prix croissant</option>
        </select>
    )
}

export default SortCar