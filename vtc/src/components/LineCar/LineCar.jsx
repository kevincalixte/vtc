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
        borderBottom: '3px solid #F4F4F4',
        paddingBottom: '4rem'

    },
    styleLeft: {
        width: '50vw',
        display: 'flex',
        alignItems: 'center',
    },
    styleRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: ' 0 1rem 0 auto ',
    },
    styleText: {
        display: 'none',
        flexDirection: 'column',
        gap: '.5rem',
    },
    styleTextAndButton: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
        alignItems: 'center',
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

            <div className='LineCarTextAndButton' style={style.styleTextAndButton}>
                <div className='LineCarText' style={style.styleText}>
                    <BrandCar></BrandCar>
                    <DescriptionCar></DescriptionCar>
                    <PriceCar></PriceCar>
                </div>
                <div className='LineCarButton' style={style.styleRight}>
                    <ButtonCar></ButtonCar>
                </div>
            </div>

        </div>
    )
}

export default LineCar