import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';

const style = {
    styleButton: {
        backgroundColor: 'transparent',
        width: '2.7rem',
        height: '1.9rem',
        border: '1px solid white',
        color: 'white',
        fontSize: '1.5rem',
        borderRadius: '.3rem',
        marginLeft: 'auto',
        padding: '0.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
function BurgerCar() {
    return (
        <button style={style.styleButton}>
            <CiMenuBurger />
        </button>
    )
}

export default BurgerCar