import * as DateHelper from 'date-fns'
const getDateFromString = (dateString) => {
    const currentDate = new Date(dateString);
    const startOfWeek = DateHelper.startOfWeek(currentDate);
    const endOfWeek = DateHelper.endOfWeek(currentDate);
    return (startOfWeek.getMonth() + 1) + '-' + startOfWeek.getDate() + '-' + startOfWeek.getFullYear() + " to " +
        (endOfWeek.getMonth() + 1) + '-' + endOfWeek.getDate() + '-' + endOfWeek.getFullYear();
}

export default getDateFromString;