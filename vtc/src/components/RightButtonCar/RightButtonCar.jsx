import React from 'react'
import { FaCaretRight } from "react-icons/fa";

const style = {
    styleButton: {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '2rem',
    }
}
function RightButtonCar() {
  return (
    <button style={style.styleButton}><FaCaretRight></FaCaretRight></button>
  )
}

export default RightButtonCar