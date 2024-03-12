import setUpNewSheet from "./setUpNewSheet";
import colorPercentageCell from "./colorPercentageCell";
const makeSheets = (workbook, hoursWorkedMap, percentageAccepted, taMap) => {
    console.log(hoursWorkedMap);
    Object.keys(hoursWorkedMap).forEach((weekName) => {
        const sheet = setUpNewSheet(weekName, workbook, percentageAccepted);

        Object.keys(hoursWorkedMap[weekName].interns).forEach((intern) => {
            console.log(weekName);
            const currentInternData = hoursWorkedMap[weekName].interns[intern];
            const firstName = currentInternData.firstName ? currentInternData.firstName : intern.split(' ')[0];
            const lastName = currentInternData.lastName ? currentInternData.lastName : intern.split(' ').slice(1).join(' ');
            sheet.addRow({
                firstName: firstName[0].toUpperCase() + firstName.slice(1),
                lastName: lastName[0].toUpperCase() + lastName.slice(1),
                hoursWorked: currentInternData.normalHoursWorked,
                hoursScheduled: currentInternData.normalHoursScheduled,
                percentWorked: currentInternData.percentageDifference == 0 ? "0" : currentInternData.percentageDifference,
                changeFromPreviousWeek: currentInternData.changeFromPreviousWeek,
                ta: taMap[firstName + " " + lastName],
                
            })
            colorPercentageCell(sheet, percentageAccepted);

        })
        sheet.getCell(2,8).value = hoursWorkedMap[weekName].total.percentageAcceptedNumbers.percentageDifference;
        sheet.getCell(2,9).value = hoursWorkedMap[weekName].total.totalHoursWorked;
        sheet.getCell(2,10).value = hoursWorkedMap[weekName].total.totalHoursScheduled;
        sheet.getCell(2,11).value = hoursWorkedMap[weekName].total.percentageDifference;
        sheet.getCell(2,12).value = hoursWorkedMap[weekName].total.changeFromPreviousWeek;

    })

}

export default makeSheets;