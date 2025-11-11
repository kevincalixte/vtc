import React from 'react'
import agenceImg from '../../../public/assets/img/agence.jpg'

const style = {
    styleBase: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem',
        gap: '6rem',
    },
    styleImg: {
        width: '12rem',
    },
    styleInfos: {}

}
function ContactCar() {
    return (

        <div className='ContactCar' style={style.styleBase}>
            <div style={style.styleImg}>
                <img src={agenceImg} alt="" />
            </div>
            <div style={style.styleInfos}>
                <ul>
                    <li>Notre agence de <span style={{fontWeight:'bold'}}>Paris</span></li>
                    <li>300 Boulevard de Vaugirard, 75015, Paris</li>
                    <li>Ouvert 7j/7j de 09h à 13h et de 14h à 20h</li>
                    <li>01 49 78 21 33</li>
                    <li>contact@vtc.com</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactCar