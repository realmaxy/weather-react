const API_KEY = import.meta.env.VITE_REACT_API_KEY 

const fetchWeather = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    const data = await response.json()
    const result = await data
}

export default fetchWeather