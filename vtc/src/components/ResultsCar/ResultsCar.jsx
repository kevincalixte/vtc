import React from 'react'

const style = {
    styleP: {
        fontSize: '1.4rem',
        fontWeight: '600',
    },
    styleSpan: {
        fontWeight: '400',
    }
}
function ResultsCar() {
    return (
        <div>
            <p style={style.styleP}>7 <span style={style.styleSpan}>résultats</span> </p>
        </div>
    )
}

export default ResultsCar