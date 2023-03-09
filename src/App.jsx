import CityInfo from "./components/CityInfo"
import Header from "./components/Header"
import { glassStyle } from "./constants"

function App() {
  return ( 
    <div className="w-screen h-screen bg-gradient-to-tl from-pink-400 to-indigo-500">
      <div className="w-5/6 m-auto">
        <Header logo='header-logo'/>
        <CityInfo/>
        <div className="h-44 w-full mt-10 " style ={glassStyle}></div>
      </div>
    </div>
  )
}

export default App
