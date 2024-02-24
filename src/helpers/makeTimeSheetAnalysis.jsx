import * as ExcelJS from 'exceljs'
import * as FileSaver from 'file-saver'
import hoursToDecimal from './hoursToDecimal';
import getDateFromString from './getDateFromString';
import decimalToHours from './decimalToHours';
import getWeekBefore from './getWeekBefore';

const makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted) => {
    const workbook = new ExcelJS.Workbook();
    let hoursWorkedMap = {};
    hoursWorkedMap.total = 0;

    const timeSheet = timesheetExcel.getWorksheet("All Employees");

    let firstName = timeSheet.getCell(2, 1).value;
    let lastName = timeSheet.getCell(2, 2).value
    let currentIntern = firstName + " " + lastName;

    for (let row = 2; row <= timeSheet.rowCount; row++) {

        const tempFirstName = timeSheet.getCell(row, 1).value;
        const tempLastName = timeSheet.getCell(row, 2).value;
        if (tempFirstName &&
            (tempFirstName + " " + tempLastName != currentIntern)) {
            currentIntern = tempFirstName + " " + tempLastName;
            firstName = tempFirstName;
            lastName = tempLastName
        }

        const weekName = getDateFromString(timeSheet.getCell(row, 5).value);
        const weekSchedule = simplifiedSchedule[weekName];

        if (weekSchedule && weekSchedule[currentIntern]) {
            if (!hoursWorkedMap[weekName]) {
                setUpNewSheet(hoursWorkedMap, weekName, workbook);
            }

            const currentWeek = hoursWorkedMap[weekName];
            if (!currentWeek[currentIntern]) {
                const currentInternData = {
                    fullName: currentIntern,
                    firstName: firstName,
                    lastName: lastName,

                }
                const workBookData = {
                    workbook: workbook,
                    weekName: weekName,
                    timeSheet: timeSheet,
                    currentWeek: currentWeek,
                    hoursWorkedMap: hoursWorkedMap,
                    simplifiedSchedule: simplifiedSchedule,
                }

                populateRow(workBookData, currentInternData, percentageAccepted, row);
                // currSheet.getCell(2, 9).value = hoursWorkedMap[weekName].total;
                // currSheet.getCell(2, 10).value = simplifiedSchedule[weekName].totalScheduledHours;
                // currSheet.getCell(2, 11).value = (hoursWorkedMap[weekName].total / simplifiedSchedule[weekName].totalScheduledHours * 100).toFixed(2);
            }

        }
    }
    workbook.eachSheet((worksheet) => {
        const currWeek = worksheet.name;

        for (let row = 2; row <= worksheet.rowCount; row++) {
            const firstName = worksheet.getCell(row, 1).value;
            const lastName = worksheet.getCell(row, 2).value;
            const fullName = firstName + ' ' + lastName;
            processChangeFromPreviousWeek(currWeek, worksheet, fullName, row, hoursWorkedMap);
        }
    })


    workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data]);
        FileSaver.saveAs(blob, "Timesheet Analysis.xlsx");
    });

}

const setUpNewSheet = (hoursWorkedMap, weekName, workbook) => {
    hoursWorkedMap[weekName] = {};
    hoursWorkedMap[weekName].total = 0;
    const sheet = workbook.addWorksheet(weekName);
    sheet.views = [{}];
    sheet.properties.defaultColWidth = 15;
    sheet.properties.defaultRowHeight = 20;
    setUpColumns(sheet);
}

const setUpColumns = (worksheet) => {
    const firstName = worksheet.getColumn(1);
    firstName.header = "First Name";
    firstName.key = "firstName";

    const lastName = worksheet.getColumn(2);
    lastName.header = "Last Name";
    lastName.key = "lastName";

    const hoursWorked = worksheet.getColumn(3);
    hoursWorked.header = "Hours Worked";
    hoursWorked.key = "hoursWorked";

    const hoursScheduled = worksheet.getColumn(4);
    hoursScheduled.header = "Hours Scheduled";
    hoursScheduled.key = "hoursScheduled";


    const percentWorked = worksheet.getColumn(5);
    percentWorked.header = "Percent Worked";
    percentWorked.key = "percentWorked";

    const changeFromPreviousWeek = worksheet.getColumn(6);
    changeFromPreviousWeek.header = "Percent Change from Last Week";
    changeFromPreviousWeek.key = "changeFromPreviousWeek";
    changeFromPreviousWeek.width = 25;

    const taAssigned = worksheet.getColumn(7);
    taAssigned.header = "TA";
    taAssigned.key = "ta";

    const totalWorked = worksheet.getColumn(9);
    totalWorked.header = "Total Worked";
    totalWorked.key = "totalWorked";

    const totalScheduled = worksheet.getColumn(10);
    totalScheduled.header = "Total Scheduled";
    totalScheduled.key = "totalScheduled";

    const totalPercentWorked = worksheet.getColumn(11);
    totalPercentWorked.header = "Percent Worked";
    totalPercentWorked.key = "totalPercentWorked";

    const totalPercentChange = worksheet.getColumn(12);
    totalPercentChange.header = "Total Percent Change from Last Week";
    totalPercentChange.key = "totalPercentChange";
    totalPercentChange.width = 30;


}

const populateRow = (workBookData, currentInternData, percentageAccepted, row) => {
    const currSheet = workBookData.workbook.getWorksheet(workBookData.weekName);

    const [normalHoursWorked, normalHoursScheduled, percentageDifference] = processHoursData(row, workBookData.timeSheet, workBookData.currentWeek, currentInternData.fullName, workBookData.weekName, workBookData.simplifiedSchedule);


    currSheet.addRow({
        firstName: currentInternData.firstName,
        lastName: currentInternData.lastName,
        hoursWorked: normalHoursWorked,
        hoursScheduled: normalHoursScheduled,
        percentWorked: percentageDifference,

    })

    colorPercentageCell(currSheet, percentageAccepted);

}

const processHoursData = (row, timeSheet, currentWeek, currentIntern, weekName, simplifiedSchedule) => {
    const potentialWorkHours = timeSheet.getCell(row, 15).value;
    const workHours = potentialWorkHours ? potentialWorkHours : "00:00";

    currentWeek[currentIntern] = { hoursWorked: hoursToDecimal(workHours) };
    const decimalHoursScheduled = simplifiedSchedule[weekName][currentIntern];
    const normalHoursScheduled = decimalToHours(decimalHoursScheduled);

    const normalHoursWorked = workHours;
    const decimalHoursWorked = hoursToDecimal(normalHoursWorked);
    currentWeek.total += decimalHoursWorked;
    const percentageDifference = (decimalHoursWorked / decimalHoursScheduled * 100).toFixed(2);
    currentWeek[currentIntern].percentageDifference = percentageDifference;
    return [normalHoursWorked, normalHoursScheduled, percentageDifference];
}

const processChangeFromPreviousWeek = (currWeek, worksheet, fullName, row, hoursWorkedMap) => {
    const prevWeek = getWeekBefore(currWeek);
    let percentageDifferenceOfPreviousWeek;
    if (hoursWorkedMap[prevWeek] && hoursWorkedMap[prevWeek][fullName]) {
        percentageDifferenceOfPreviousWeek = hoursWorkedMap[prevWeek][fullName].percentageDifference;
    }
    const percentageDifferenceOfCurrentWeek = hoursWorkedMap[currWeek][fullName].percentageDifference;
    let differenceFromWeeks = percentageDifferenceOfPreviousWeek ?
        (percentageDifferenceOfCurrentWeek - percentageDifferenceOfPreviousWeek).toFixed(2) : "";

    const currCell = worksheet.getCell(row, 6);
    currCell.value = differenceFromWeeks;

    if (currCell <= -15) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (currCell > 15) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8042f58d' }
        };
    }

    return differenceFromWeeks;
}

const colorPercentageCell = (currSheet, percentageAccepted) => {
    const currCell = currSheet.getCell(currSheet.rowCount, 5)
    if (parseFloat(currCell) < percentageAccepted) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (parseFloat(currCell) > 100) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8042f58d' }
        };
    }
}


export default makeTimesheetAnalysis;