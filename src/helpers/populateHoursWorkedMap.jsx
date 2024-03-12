import getDateFromString from "./getDateFromString";
import processHoursData from "./processHoursData";
const populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted, taMap) => {
    const timeSheet = timesheetExcel.getWorksheet("All Employees");

    let firstName = timeSheet.getCell(2, 1).value;
    let lastName = timeSheet.getCell(2, 2).value;
    let currentIntern = firstName + " " + lastName;
    for (let row = 2; row <= timeSheet.rowCount; row++) {

        const tempFirstName = timeSheet.getCell(row, 1).value;
        const tempLastName = timeSheet.getCell(row, 2).value;
        if (tempFirstName &&
            (tempFirstName + " " + tempLastName != currentIntern)) {
            currentIntern = tempFirstName + " " + tempLastName;
            firstName = tempFirstName;
            lastName = tempLastName;
        }
        const date = timeSheet.getCell(row, 6).value;
        if (date) {
            const weekName = getDateFromString(timeSheet.getCell(row, 6).value);

            if (hoursWorkedMap[weekName]) {
                const currentWeek = hoursWorkedMap[weekName].interns;

                if (currentWeek[currentIntern] && currentWeek[currentIntern].normalHoursWorked == "00:00") {
                    currentWeek[currentIntern].firstName = firstName;
                    currentWeek[currentIntern].lastName = lastName;
                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted, taMap);
                }
            }
        }
    }

}

export default populateHoursWorkedMap;