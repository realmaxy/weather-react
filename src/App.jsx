import CityInfo from "./components/CityInfo/CityInfo"
import Header from "./components/Header/Header"
import { glassStyle } from "./constants" // потом убрать
import UserInfo from "./helpers/userInfo"

function App() {

  const info = new UserInfo();

  async function getInfo() {
    console.log(await info.position(), await info.ip())
  }

  getInfo()

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
