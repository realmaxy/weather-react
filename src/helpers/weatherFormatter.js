import giveDate from "./dateFormatter"

export const weatherFormatter = (data) => {
    const {
        current: {
            temp_c, temp_f, humidity, feelslike_c, feelslike_f, wind_kph: windSpeed, precip_mm: precipication, pressure_mb: pressure,
            condition: {text: weatherStatus, icon}},
        location: {
            name: cityLocation,
            localtime
        }
    } = data

    const weather = {
        temperature: {
            C: {
                temp_c,
                feelslike_c
            },
            F: {
                temp_f, 
                feelslike_f
            }
        },
        location: {
            cityLocation,
            localtime,
        },
        humidity,
        windSpeed,
        precipication,
        pressure,
    }

    weather.location.localtime = giveDate(weather.location.localtime)

    return weather
}