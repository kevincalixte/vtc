import React from 'react'

const style = {
    styleBase: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        maxWidth: '95%',
        padding: '.5rem 0 0 0',
        margin: '10rem 0 0 2rem'
    },
    styleForm: {
        width: '98%',
        gap: '0.5rem',
    },
    styleSelect: {
        width: '98%',
        backgroundColor: '#F2F2F2',
        padding: '0.5rem',
        borderRadius: '.2rem',
        border: 'none',
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
        marginTop: '0.5rem',
    }
}
function FormCar() {
    return (
        <>

            <div className='FormCar' style={style.styleBase}>

                <div className='FormCarForm' style={style.styleForm}>

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
                </div>
                <button className='FormCarButton' style={style.styleButton}>Valider ma recherche</button>

            </div>

        </>
    )
}

export default FormCar