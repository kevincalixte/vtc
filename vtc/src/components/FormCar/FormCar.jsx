import React from 'react'
import './FormCar.css'

const style = {
    styleBase: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        maxWidth: '95%',
        height: '12rem',
        margin: '10rem 0 auto auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    styleSelect: {
        width: '98%',
        backgroundColor: '#F2F2F2',
        padding: '0.5rem',
        borderRadius: '.2rem',
        border: 'none',
        marginTop: '.5rem'
    },
    styleOption1: {

    },
    styleInput: {
        width: '98%',
        padding: '0.5rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid #ccc',
        borderRadius: '.2rem'
    },
    styleButton: {
        width: '100%',
        padding: '0.6rem',
        color: '#FFFFFF',
        backgroundColor: 'rgba(87, 177, 87, 0.8)',
        border: 'none',
    }
}
function FormCar() {
    return (
        <div style={style.styleBase}>
            <select style={style.styleSelect}>
                <option style={style.styleOption1}>Adresse de départ</option>
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
            <button className='buttonValid' style={style.styleButton}>Valider ma recherche</button>
        </div>
    )
}

export default FormCar