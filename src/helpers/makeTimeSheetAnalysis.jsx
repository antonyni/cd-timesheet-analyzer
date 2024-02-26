import * as ExcelJS from 'exceljs'
import * as FileSaver from 'file-saver'
import hoursToDecimal from './hoursToDecimal';
import getDateFromString from './getDateFromString';
import decimalToHours from './decimalToHours';
import getWeekBefore from './getWeekBefore';

const makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted, taMap) => {
    const workbook = new ExcelJS.Workbook();
    const hoursWorkedMap = {
        total: {
            total: {
                totalHoursWorked: 0,
                totalHoursScheduled: 0,
                percentageAcceptedNumbers: {
                    numberBelowPercentageAccepted: 0,
                    totalNumberOfPercentages: 0,
                },
            },
            interns: {

            },
        },

    };

    initializeHoursWorkedMap(hoursWorkedMap, simplifiedSchedule);
    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted);
    processChangeFromPreviousWeek(hoursWorkedMap);
    makeSheets(workbook, hoursWorkedMap, percentageAccepted, taMap);

    workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data]);
        FileSaver.saveAs(blob, "Timesheet Analysis.xlsx");
    });

}

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

const populateHoursWorkedMap = (timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted) => {
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
        const date = timeSheet.getCell(row, 5).value;
        if (date) {
            const weekName = getDateFromString(timeSheet.getCell(row, 5).value);

            if (hoursWorkedMap[weekName]) {
                const currentWeek = hoursWorkedMap[weekName].interns;

                if (currentWeek[currentIntern] && currentWeek[currentIntern].normalHoursWorked == "00:00") {
                    currentWeek[currentIntern].firstName = firstName;
                    currentWeek[currentIntern].lastName = lastName;
                    processHoursData(row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted);
                }
            }
        }
    }

}

const setUpNewSheet = (weekName, workbook, percentageAccepted) => {
    const sheet = workbook.addWorksheet(weekName);
    sheet.views = [{}];
    sheet.properties.defaultColWidth = 15;
    sheet.properties.defaultRowHeight = 20;
    setUpColumns(sheet, percentageAccepted);
    return sheet;
}

const setUpColumns = (worksheet, percentageAccepted) => {
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

    const percentAboveAccepted = worksheet.getColumn(8);
    percentAboveAccepted.header = "Percentage above " + percentageAccepted;
    percentAboveAccepted.key = "percentAboveAccepeted";
    percentAboveAccepted.width = 20;


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

const makeSheets = (workbook, hoursWorkedMap, percentageAccepted, taMap) => {

    Object.keys(hoursWorkedMap).forEach((weekName) => {
        const sheet = setUpNewSheet(weekName, workbook, percentageAccepted);

        Object.keys(hoursWorkedMap[weekName].interns).forEach((intern) => {
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
                ta: taMap[intern],
                
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

const processHoursData = (row, timeSheet, hoursWorkedMap, currentIntern, weekName, simplifiedSchedule, percentageAccepted) => {
    const normalHoursWorked = timeSheet.getCell(row, 15).value ? timeSheet.getCell(row, 15).value : "0:00";

    hoursWorkedMap[weekName].interns[currentIntern].normalHoursWorked = normalHoursWorked;

    const decimalHoursScheduled = simplifiedSchedule[weekName].interns[currentIntern];
    const decimalHoursWorked = hoursToDecimal(normalHoursWorked);


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

const processChangeFromPreviousWeek = (hoursWorkedMap) => {
    Object.keys(hoursWorkedMap).forEach((date) => {
        const workWeekPercentages = hoursWorkedMap[date].total.percentageAcceptedNumbers;

        workWeekPercentages.percentageDifference = ((workWeekPercentages.totalNumberOfPercentages - workWeekPercentages.numberBelowPercentageAccepted)
            / workWeekPercentages.totalNumberOfPercentages * 100).toFixed(2);
        if (date != "total") {
            const weekBefore = getWeekBefore(date);
            if (hoursWorkedMap[weekBefore]) {
                Object.keys(hoursWorkedMap[date].interns).forEach((intern) => {
                    hoursWorkedMap[date].interns[intern].changeFromPreviousWeek = (parseFloat(hoursWorkedMap[date].interns[intern].percentageDifference) -
                        parseFloat(hoursWorkedMap[weekBefore].interns[intern].percentageDifference)).toFixed(2);

                })
                hoursWorkedMap[date].total.changeFromPreviousWeek = (parseFloat(hoursWorkedMap[date].total.percentageDifference) -
                    parseFloat(hoursWorkedMap[weekBefore].total.percentageDifference)).toFixed(2);
            }
        }
    })
}

const colorPercentageCell = (currSheet, percentageAccepted) => {
    const currCell = currSheet.getCell(currSheet.rowCount, 5)
    const changeFromPreviousWeek = currSheet.getCell(currSheet.rowCount, 6)
    if (parseFloat(currCell.value) < percentageAccepted) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (parseFloat(currCell.value) > 100) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8042f58d' }
        };
    }
    if (parseFloat(changeFromPreviousWeek.value) < -15) {
        changeFromPreviousWeek.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (parseFloat(changeFromPreviousWeek.value) > 15) {
        changeFromPreviousWeek.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8042f58d' }
        };
    }
}


export default makeTimesheetAnalysis;