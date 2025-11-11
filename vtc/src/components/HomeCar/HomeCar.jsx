import React, { useEffect, useState } from 'react'
import background1 from '../../../public/assets/img/background1.jpg'
import background2 from '../../../public/assets/img/background2.jpg'
import background3 from '../../../public/assets/img/background3.jpg'

const images = [background1, background2, background3]

function HomeCar({ children }) {

    // FONCTION CHANGEMENT BACKGROUND IMAGE

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentIndex((prevIndex) => {

                return (prevIndex + 1) % images.length
            })
        }, 10000)

        return () => clearInterval(interval)
    }, [])


    const style = {
        styleBase: {
            backgroundImage: `url(${images[currentIndex]})`, // Image change selon currentIndex
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '70vh',
            padding: '.5rem .8rem 0 0',
            transition : 'background-image 1s ease-in-out',
        }
    }

    return (
        <div className="HomeCar" style={style.styleBase}>
            {children}
        </div>
    )
}

export default HomeCar