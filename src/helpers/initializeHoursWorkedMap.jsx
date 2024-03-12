import decimalToHours from "./decimalToHours";

const initializeHoursWorkedMap = (hoursWorkedMap, simplifiedSchedule) => {
    Object.keys(simplifiedSchedule).forEach((weekName) => {
        if (!hoursWorkedMap[weekName]) {
            hoursWorkedMap[weekName] = {
                total: {
                    totalHoursWorked: 0,
                    totalHoursScheduled: 0,
                    percentageAcceptedNumbers: {
                        numberBelowPercentageAccepted: 0,
                        totalNumberOfPercentages: 0,
                    },
                },
                interns: {

                }
            };
        }

        Object.keys(simplifiedSchedule[weekName].interns).forEach((intern) => {
            const decimalHoursScheduled = simplifiedSchedule[weekName].interns[intern];
            const normalHoursScheduled = decimalToHours(decimalHoursScheduled);
            hoursWorkedMap[weekName].total.percentageAcceptedNumbers.totalNumberOfPercentages++;
            if (weekName != "total") {
                hoursWorkedMap.total.total.percentageAcceptedNumbers.totalNumberOfPercentages++;
            }

            if (!hoursWorkedMap[weekName].interns[intern]) {
                hoursWorkedMap[weekName].interns[intern] = {};
            }

            const currIntern = hoursWorkedMap[weekName].interns[intern];
            currIntern.normalHoursWorked = "00:00";
            currIntern.normalHoursScheduled = normalHoursScheduled;
            currIntern.percentageDifference = 0;
        })
        hoursWorkedMap[weekName].total.totalHoursScheduled = simplifiedSchedule[weekName].totalHoursScheduled;
    })
}

export default initializeHoursWorkedMap;