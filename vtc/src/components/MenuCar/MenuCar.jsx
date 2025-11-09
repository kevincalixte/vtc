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
function MenuCar() {
    return (
        <div className='MenuCar' style={style.styleBase}>
            <ul style={style.styleMenuCarList}>
                <li><a href="">Louer une voiture</a></li>
                <li><a href="">Louer un utilitaire</a></li>
                <li><a href="">Réserver un chauffeur</a></li>
                <li><a href="">Découvrez nos agences</a></li>
                <li><a href="">Mon compte</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

export default MenuCar