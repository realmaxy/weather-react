import { useSelector } from "react-redux"
import CityInfo from "./components/CityInfo/CityInfo"
import Header from "./components/Header/Header"
import PopupSetCity from "./components/PopUp/PopupSetCity"

function App() {

  const popUp = useSelector(state => state.trackingCities.popUpIsOpen)

  return ( 
    <div>
      <div>
        {(popUp)?(<PopupSetCity/>):null}
      </div>
      <div className="w-5/6 m-auto flex flex-col justify-center">
        <Header logo='header-logo'/>
        <CityInfo/>
      </div>
    </div>
  )
}

export default App
