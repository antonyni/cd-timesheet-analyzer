import * as DateHelper from 'date-fns'
const getDateFromString = (dateString) => {
    const currentDate = new Date(dateString);
    const startOfWeek = DateHelper.startOfWeek(currentDate).toLocaleDateString();
    const endOfWeek = DateHelper.endOfWeek(currentDate).toLocaleDateString();
    return [startOfWeek,endOfWeek];
}

export default getDateFromString;