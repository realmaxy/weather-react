const API_KEY = import.meta.env.VITE_REACT_API_KEY 

const fetchWeather = async (city) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`)
    const data = await response.json()

    return data
}

export default fetchWeather