import { daysOfWeek } from "../constants";

const getLocalDayOfWeek = (localDayOfMonth) => {
    const date = new Date()
    const dayOfWeek = date.getDay()
    const dayOfMounth = date.getDate()
    const x = Math.abs(localDayOfMonth - dayOfMounth)

    switch (Number(localDayOfMonth)) {
        case dayOfMounth - x:
            if(dayOfWeek >= x ) {
                return daysOfWeek[dayOfWeek - x]
            }
            else {
                return dayOfWeek[6 - x - dayOfWeek]
            }
        case dayOfMounth: 
            return daysOfWeek[dayOfWeek]
        case dayOfMounth + x:
            if(dayOfWeek === 6) {
                return daysOfWeek[0 + x - 1]
            }
            else {
                return daysOfWeek[dayOfWeek + x]
            }
    }
}



export default getLocalDayOfWeek