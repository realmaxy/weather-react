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
        },
        forecast: {
            forecastday
        }
    } = data

    const [today] = forecastday

    const today0 = today.hour[0]
    const today3 = today.hour[3]
    const today6 = today.hour[6]
    const today9 = today.hour[9]
    const today12 = today.hour[12]
    const today15 = today.hour[15]
    const today18 = today.hour[18]
    const today21 = today.hour[21]

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
        icon, 
        forecastday,
        today: [
            [
                today0,
                today3
            ],
            [
                today6,
                today9
            ],
            [
                today12,
                today15
            ],
            [
                today18,
                today21
            ],
        ]
    }

    weather.location.localtime = giveDate(weather.location.localtime)
    weather.wind = windSpeedFormatter(wind)
    weather.pressure = pressureFormatter(pressure)

    return weather
}