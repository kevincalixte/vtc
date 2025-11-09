import React from 'react'

const style = {
    styleBase: {
        backgroundColor: 'white',
        color: '#9299A1',
        width: '100vw',
        heigth: '20rem',
        padding: '1rem',
        position: 'absolute',
        marginTop: '1rem',
    },
    styleMenuCarList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        fontSize: '.9rem',
    }
}

const menuItems = ["Louer une voiture", "Louer un utilitaire", "Réserver un chauffeur", "Découvrez nos agences", "Mon Compte", "Contact"]

function MenuCar() {
    return (
        <div className='MenuCar' style={style.styleBase}>
            <ul style={style.styleMenuCarList}>
                {
                    menuItems.map((item, index) => (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MenuCar