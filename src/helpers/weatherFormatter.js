import giveDate from "./dateFormatter"
import { pressureFormatter } from "./precipicationFormatter"
import { windSpeedFormatter } from "./windSpeedFormatter"

export const weatherFormatter = (data) => {
    const {
        current: {
            temp_c, temp_f, humidity, feelslike_c, feelslike_f, wind_kph: wind, precip_mm: precipications, pressure_mb: pressure,
            condition: {text: weatherStatus, icon}},
        location: {
            name: cityLocation,
            localtime
        }
    } = data

    const weather = {
        temperature: {
            temp_c,
            temp_f,
            feelslike_c,
            feelslike_f
        },
        location: {
            cityLocation,
            localtime,
        },
        humidity,
        wind,
        precipications,
        pressure,
        weatherStatus,
        icon
    }

    weather.location.localtime = giveDate(weather.location.localtime)
    weather.wind = windSpeedFormatter(wind)
    weather.pressure = pressureFormatter(pressure)

    return weather
}