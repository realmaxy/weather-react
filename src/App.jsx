import { useSelector } from "react-redux"
import CityInfo from "./components/CityInfo/CityInfo"
import Header from "./components/Header/Header"
import PopupSetCity from "./components/PopUp/PopupSetCity"
import TrackingCities from "./components/TrackingCities/TrackingCities"

function App() {

  const popUp = useSelector(state => state.trackingCities.popUpIsOpen)


  return ( 
    <>
      <div>
        {(popUp)?(<PopupSetCity/>):null}
      </div>
      <div className="w-screen h-screen bg-gradient-to-tl from-pink-400 to-indigo-500">
        <div className="w-5/6 m-auto flex flex-col justify-center">
         <Header logo='header-logo'/>
         <CityInfo/>
         <TrackingCities/>
        </div>
      </div>
    </>
  )
}

export default App
