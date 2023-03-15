import monthFormatter from "./montFormatter";

const giveDate = (date) => {
    
    const month = date.slice(5, 7)
    const day = date.slice(8, 10)
    const time = date.slice(11, 16)

    return {
        month: monthFormatter(month, 'RU'),
        day: day,
        time: time
    }
}

export default giveDate