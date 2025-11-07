import React from 'react'
import LeftButtonCar from '../LeftButtonCar/LeftButtonCar'
import RightButtonCar from '../RightButtonCar/RightButtonCar'
import ButtonCar from '../ButtonCar/ButtonCar'
import SlideCar from '../SlideCar/SlideCar'
import TitleCar from '../TitleCar/TitleCar'
import DescriptionCar from '../DescriptionCar/DescriptionCar'
import PriceCar from '../PriceCar/PriceCar'
import BrandCar from '../BrandCar/BrandCar'

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
        marginLeft: '1rem',
    },
    styleRight: {
        display: 'flex',
        alignItems: 'center',
        margin: ' 0 1rem 0 auto ',
    },
    styleText: {
        display: 'none',
        flexDirection: 'column',
        gap: '.5rem',
  
    }
}
function LineCar() {
    return (
        <div className='LineCar' style={style.styleBase}>
            <div className='LineCarImg' style={style.styleLeft}>
                <LeftButtonCar></LeftButtonCar>
                <SlideCar></SlideCar>
                <RightButtonCar></RightButtonCar>
            </div>
            <div className='LineCarText' style={style.styleText}>
                <BrandCar></BrandCar>
                <DescriptionCar></DescriptionCar>
                <PriceCar></PriceCar>
            </div>
            <div className='LineCarButton' style={style.styleRight}>
                <ButtonCar></ButtonCar>
            </div>
        </div>
    )
}

export default LineCar