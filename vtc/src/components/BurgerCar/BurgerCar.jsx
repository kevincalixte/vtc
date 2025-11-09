import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import MenuCar from '../MenuCar/MenuCar';

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
        justifyContent: 'center',
    }
}

function BurgerCar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    return (
        <>
            <button style={style.styleButton} onClick={toggleMenu}>
                <CiMenuBurger />
            </button>

            {isMenuOpen && (
                <>
                    <MenuCar />
                </>
            )}
        </>
    )
}

export default BurgerCar