import { useSelector } from "react-redux"
import CityInfo from "./components/CityInfo/CityInfo"
import Header from "./components/Header/Header"
import PopupSetCity from "./components/PopUp/PopupSetCity"

function App() {

  const popUp = useSelector(state => state.trackingCities.popUpIsOpen)

  return ( 
    <div>
      {
        (popUp)?
        (
        <div>
          {(popUp)?(<PopupSetCity/>):null}
        </div>
        )
        :
        (
        <div className="w-5/6 m-auto flex flex-col justify-center pb-5">
          <Header logo='header-logo'/>
          <CityInfo/>
        </div>
        )
      }
    </div>
  )
}

export default App
