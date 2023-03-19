import getDayOfWeek from "./getLocalDayOfWeek";

const giveDate = (date) => {

    const month = date.slice(5, 7)
    const day = date.slice(8, 10)
    const time = date.slice(11, 16)

    return {
        month: month,
        day: day,
        time: time,
        dayOfWeek: getDayOfWeek(day)
    }
}

export default giveDate