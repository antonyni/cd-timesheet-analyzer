import hoursToDecimal from "./hoursToDecimal";
import decimalToHours from "./decimalToHours";

const processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted, taMap) => {
    const normalHoursWorked = timeSheet.getCell(row, 16).value ? timeSheet.getCell(row, 16).value : "0:00";
    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked;

    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];
    const decimalHoursWorked = hoursToDecimal(normalHoursWorked);

    const ta = timeSheet.getCell(row,3).value;
    if(!taMap[currentIntern] && ta){
        taMap[currentIntern] = ta;
    }

    hoursWorkedMap[weekName].total.totalHoursWorked += decimalHoursWorked;
    const totalInternHoursWorked = hoursWorkedMap.total.interns[currentIntern].normalHoursWorked;
    hoursWorkedMap[weekName].total.percentageDifference = (hoursWorkedMap[weekName].total.totalHoursWorked / hoursWorkedMap[weekName].total.totalHoursScheduled * 100).toFixed(2);

    hoursWorkedMap.total.interns[currentIntern].normalHoursWorked = decimalToHours(hoursToDecimal(totalInternHoursWorked) + decimalHoursWorked);

    hoursWorkedMap.total.interns[currentIntern].percentageDifference = (hoursToDecimal(hoursWorkedMap.total.interns[currentIntern].normalHoursWorked)
        / hoursToDecimal(hoursWorkedMap.total.interns[currentIntern].normalHoursScheduled) * 100).toFixed(2);
    hoursWorkedMap.total.total.totalHoursWorked += decimalHoursWorked;
    hoursWorkedMap.total.total.percentageDifference = (hoursWorkedMap.total.total.totalHoursWorked / hoursWorkedMap.total.total.totalHoursScheduled * 100).toFixed(2);

    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);
    hoursWorkedMap[weekName].interns[currentIntern].percentageDifference = percentageDifference;
    if (percentageDifference < percentageAccepted) {
        hoursWorkedMap[weekName].total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;
        if (weekName != "total") {
            hoursWorkedMap.total.total.percentageAcceptedNumbers.numberBelowPercentageAccepted++;
        }

    }
}

export default processHoursData;