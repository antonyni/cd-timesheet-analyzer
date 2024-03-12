import getWeekBefore from "./getWeekBefore";

const processChangeFromPreviousWeek = (hoursWorkedMap) => {
    Object.keys(hoursWorkedMap).forEach((date) => {
        const workWeekPercentages = hoursWorkedMap[date].total.percentageAcceptedNumbers;

        workWeekPercentages.percentageDifference = ((workWeekPercentages.totalNumberOfPercentages - workWeekPercentages.numberBelowPercentageAccepted)
            / workWeekPercentages.totalNumberOfPercentages * 100).toFixed(2);
        if (date != "total") {
            const weekBefore = getWeekBefore(date);
            if (hoursWorkedMap[weekBefore]) {
                Object.keys(hoursWorkedMap[date].interns).forEach((intern) => {
                    hoursWorkedMap[date].interns[intern].changeFromPreviousWeek = parseFloat(hoursWorkedMap[date].interns[intern].percentageDifference) -
                        parseFloat((hoursWorkedMap[weekBefore].interns[intern])?(hoursWorkedMap[weekBefore].interns[intern].percentageDifference):"0").toFixed(2);

                })
                hoursWorkedMap[date].total.changeFromPreviousWeek = parseFloat(hoursWorkedMap[date].total.percentageDifference) -
                    parseFloat((hoursWorkedMap[weekBefore].total)?(hoursWorkedMap[weekBefore].total.percentageDifference):"0").toFixed(2);
            }
        }
    })
}

export default processChangeFromPreviousWeek;