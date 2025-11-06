import React from 'react'

const style = {
    styleBase: {
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        paddingTop: '1rem',
    }
}
function TitleCar() {
  return (
    <div style={style.styleBase}>
    <h1>Bienvenue à bord</h1>
    <p>Location de voiture 24h/24 et 7j/7</p>
    </div>
  )
}

export default TitleCar