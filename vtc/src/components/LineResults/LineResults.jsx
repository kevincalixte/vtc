import React from 'react'
import ResultsCar from '../ResultsCar/ResultsCar.jsx'
import SortCar from '../SortCar/SortCar.jsx'

const style = {
    styleBase: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 1rem',
    },

}
function LineResults() {
    return (
        <div className='LineResults' style={style.styleBase}>
            <ResultsCar></ResultsCar>
            <SortCar></SortCar>
        </div>
    )
}

export default LineResults