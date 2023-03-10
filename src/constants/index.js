export const navbarTogglers = [
    {
        id: 'degreeToggle',
        firstButton: 'C',
        secondButton: 'F'
    },
    {
        id: 'langToggle',
        firstButton: 'RU',
        secondButton: 'EN'
    }
]

export const glassStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
}

export const moreDetails = [
    {
        id: 'wind', 
        EN: {
            text: 'Wind Speed',
            additional: 'm/s'
        },
        RU: {
            text: 'Скорость ветра',
            additional: 'м/c'
        }
    },
    {
        id: 'humidity', 
        EN: {
            text: 'Air humidity',
            additional: '%'
        },
        RU: {
            text: 'Влажность воздуха',
            additional: '%'
        }
    },{
        id: 'pressure', 
        EN: {
            text: 'Pressure',
            additional: 'mm'
        },
        RU: {
            text: 'Давление',
            additional: 'мм.рт.ст.'
        }
    },{
        id: 'precipications', 
        EN: {
            text: 'Precipication probabylity',
            additional: '%'
        },
        RU: {
            text: 'Вероятность осадков',
            additional: '%'
        }
    },
]