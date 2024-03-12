import * as ExcelJS from 'exceljs'
import * as FileSaver from 'file-saver'
import initializeHoursWorkedMap from './initializeHoursWorkedMap';
import populateHoursWorkedMap from './populateHoursWorkedMap';
import makeSheets from './makeSheets';
import processChangeFromPreviousWeek from './processChangeFromPreviousWeek';

const makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted) => {
    const taMap = {};
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
    populateHoursWorkedMap(timesheetExcel, hoursWorkedMap, simplifiedSchedule, percentageAccepted, taMap);
    processChangeFromPreviousWeek(hoursWorkedMap);
    makeSheets(workbook, hoursWorkedMap, percentageAccepted, taMap);
    console.log(hoursWorkedMap);
    workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data]);
        FileSaver.saveAs(blob, "Timesheet Analysis.xlsx");
    });

}

export default makeTimesheetAnalysis;