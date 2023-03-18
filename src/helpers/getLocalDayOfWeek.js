import { daysOfWeek } from "../constants";

const getLocalDayOfWeek = (localDayOfMonth) => {
    const date = new Date()
    const dayOfWeek = date.getDay()
    const dayOfMount = date.getDate()
    

    switch (Number(localDayOfMonth)) {
        case dayOfMount - 1:
            if(dayOfWeek === 0) {
                return daysOfWeek[dayOfWeek - 1]
            }
            else return daysOfWeek[dayOfWeek - 1]
        case dayOfMount: 
            return daysOfWeek[dayOfWeek]
        case dayOfMount + 1:
            if (dayOfWeek === 6) {
                return daysOfWeek[0]
            }
            else return daysOfWeek[dayOfMount + 1]
    }
}



export default getLocalDayOfWeek