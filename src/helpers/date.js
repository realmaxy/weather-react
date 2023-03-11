import monthFormatter from "./montFormatter";

// Потом брать из fetch

let today = new Date();
let now = today.toLocaleString();
let month = now.slice(3, 5)
let day = now.slice(0, 2)
let time = now.slice(12, 17)

const giveDate = () => {
    return {
        month: monthFormatter(month, 'RU'),
        day: day,
        time: time
    }
}

export default giveDate