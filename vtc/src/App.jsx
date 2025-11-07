import './App.css'
import HomeCar from './components/homeCar/homeCar.jsx'
import BurgerCar from './components/BurgerCar/BurgerCar.jsx'
import TitleCar from './components/TitleCar/TitleCar.jsx'
import FormCar from './components/FormCar/FormCar.jsx'
import LineCar from './components/LineCar/LineCar.jsx'
import LineResults from './components/LineResults/LineResults.jsx'

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
        <LineCar></LineCar>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
