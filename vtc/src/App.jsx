import HomeCar from './components/homeCar/homeCar.jsx'
import BurgerCar from './components/BurgerCar/BurgerCar.jsx'
import TitleCar from './components/TitleCar/TitleCar.jsx'
import FormCar from './components/FormCar/FormCar.jsx'
import LineCar from './components/LineCar/LineCar.jsx'
import LineResults from './components/LineResults/LineResults.jsx'
import ContactCar from './components/ContactCar/ContactCar.jsx'
import './App.css'
import cars from "../public/assets/data/cars.json"
import { CiGlass } from 'react-icons/ci'

function App() {

  return (
    <>
      <header>
        <HomeCar>
          <BurgerCar></BurgerCar>
          <TitleCar></TitleCar>
          <FormCar></FormCar>
        </HomeCar>

      </header>

      <main>
        <LineResults></LineResults>
        {cars.map((value) => (
          <LineCar key={value.id} value={value}></LineCar>
        ))}
      </main>

      <footer>
        <ContactCar></ContactCar>
      </footer>
    </>
  )
}

export default App
