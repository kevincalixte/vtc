import React from 'react'
import { CiMenuBurger } from 'react-icons/ci';

const style = {
    styleBase: {
        width: '2.7rem',
        border: '1px solid white',
        fontSize: '1.5rem',
        borderRadius: '.3rem',
        // color: 'white',
        marginLeft: 'auto',
        textAlign: 'center',
    },
    styleButton: {
        // backgroundColor: 'transparent',
    }
}
function BurgerCar() {
    return (
        <div style={style.styleBase}>
            <button style={style.Button}>
                <CiMenuBurger></CiMenuBurger>
            </button>
        </div>
    )
}

export default BurgerCar