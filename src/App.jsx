import CityInfo from "./components/CityInfo/CityInfo"
import Header from "./components/Header/Header"
import { glassStyle, moreDetails} from "./constants"



// const langFormatter = (constantsObject, langMode) => {
//     for(let key of constantsObject.keys) {
//         if (key === langMode) {
//             return constantsObject.key
//         }
//     }
// }

// console.log(langFormatter(moreDetails, 'RU'))

console.log(moreDetails.map(item => console.log(item)))

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
