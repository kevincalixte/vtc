import React from 'react'
import { FaCaretLeft } from "react-icons/fa";

const style = {
    styleButton: {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '2rem',
    }
}
function LeftButtonCar() {
    return (
        <button style={style.styleButton}><FaCaretLeft></FaCaretLeft></button>
    )
}

export default LeftButtonCar