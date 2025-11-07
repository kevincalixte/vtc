import React from 'react'

const style = {
    styleButton: {
        padding: '.4rem',
        backgroundColor: '#3E8F3E',
        color: 'white',
        border: '1px solid #3E8F3E',
        borderRadius: '.2rem',
    }
}
function ButtonCar() {
  return (
    <button style={style.styleButton}>Réserver et Payer</button>
  )
}

export default ButtonCar