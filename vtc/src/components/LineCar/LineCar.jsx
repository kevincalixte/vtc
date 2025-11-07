import React from 'react'
import LeftButtonCar from '../LeftButtonCar/LeftButtonCar'
import RightButtonCar from '../RightButtonCar/RightButtonCar'
import ButtonCar from '../ButtonCar/ButtonCar'
import SlideCar from '../SlideCar/SlideCar'

const style = {
    styleBase: {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
    },
    styleLeft: {
        width: '70vw',
        display: 'flex',
        alignItems: 'center',
    },
    styleRight: {
        display: 'flex',    
        justifyContent: 'center',
        alignItems: 'center'
    }
}
function LineCar() {
    return (
        <div style={style.styleBase}>
            <div style={style.styleLeft}>
                <LeftButtonCar></LeftButtonCar>
                <SlideCar></SlideCar>
                <RightButtonCar></RightButtonCar>
            </div>
            <div style={style.styleRight}>
                <ButtonCar></ButtonCar>
            </div>
        </div>
    )
}

export default LineCar