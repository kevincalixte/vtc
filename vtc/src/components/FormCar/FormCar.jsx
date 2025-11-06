import React from 'react'

const style = {
    styleBase: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        maxWidth: '95%',
        height: '12rem',
        margin: '10rem 0 auto auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    styleSelect: {
        width: '98%',
        backgroundColor: '#F2F2F2',
        padding: '0.5rem',
        borderRadius: '.2rem',
        border: 'none'
    },
    styleOption1: {

    },
    styleInput: {
        width: '98%',
        padding: '0.5rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #ccc',
        borderRadius: '.2rem',
        color: '#333',
        colorScheme: 'light'
    },
    styleButton: {
        width: '100%',
        padding: '0.7rem',
        color: '#FFFFFF',
        backgroundColor: '#57B157',
        border: 'none'
    }
}
function FormCar() {
    return (
        <div style={style.styleBase}>
            <select style={style.styleSelect}>
                <option disabled style={style.styleOption1}>Adresse de départ</option>
            </select>
            <input
                type="date"
                style={style.styleInput}
                placeholder="Sélectionnez une date"
            />
            <input
                type="date"
                style={style.styleInput}
                placeholder="Sélectionnez une date"
            />
            <button style={style.styleButton}>Valider ma recherche</button>
        </div>
    )
}

export default FormCar