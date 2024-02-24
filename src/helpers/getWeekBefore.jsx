const getWeekBefore = (weekName) => {
    let firstDayOfWeek = new Date(weekName.split('to')[0]);
    let firstDay = firstDayOfWeek.getDate();
    let firstMonth = firstDayOfWeek.getMonth();
    let firstYear = firstDayOfWeek.getFullYear();
    let firstDayOfWeekBefore = new Date(firstYear, firstMonth, firstDay - 7);
    let lastDayOfWeekBefore = new Date(firstYear, firstMonth, firstDay - 1);

    return (firstDayOfWeekBefore.getMonth() + 1) + '-' + firstDayOfWeekBefore.getDate() + '-' + firstDayOfWeekBefore.getFullYear() + " to "
    + (lastDayOfWeekBefore.getMonth() + 1) + '-' + lastDayOfWeekBefore.getDate() + '-' + lastDayOfWeekBefore.getFullYear();
}

export default getWeekBefore;