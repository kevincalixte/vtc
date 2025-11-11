import React, { use, useEffect } from 'react'
import { FaCaretRight } from "react-icons/fa";
import cars from "../../assets/data/cars.json"

const style = {
  styleButton: {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '2rem',
  }
}

const handlerClick = () => {
  cars.map((value, index) => {
    console.log(value.brand)
  });
}

function RightButtonCar() {
  return (
    <button onClick={handlerClick} className="RightButtonCar" style={style.styleButton}><FaCaretRight></FaCaretRight></button>
  )
}

export default RightButtonCar