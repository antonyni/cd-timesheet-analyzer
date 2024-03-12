import hoursToDecimal from './hoursToDecimal';
import * as ExcelJS from 'exceljs'
import getDateFromString from './getDateFromString';


const calculateHours = (untrimmedHoursString) => {

    let stringLength = untrimmedHoursString.length;
    let hoursString = untrimmedHoursString.substring(stringLength - 12, stringLength - 7);

    return hoursToDecimal(hoursString);
}
const simplifySchedule = (scheduleExcel, setSimplifiedSchedule) => {

    // if (!scheduleExcel.worksheets ||
    //     scheduleExcel.getWorkSheet("Sheet 1")) {
    //     alert("Invalid Schedule File");
    //     return;
    // }

    const sheet = scheduleExcel.getWorksheet("Sheet 1");
    const scheduleMap = {};
    scheduleMap.total = {
        totalHoursScheduled:0,
        interns:{},
    };
    const rowCount = sheet.rowCount;
    let currentIntern = sheet.getCell(2, 1).value;
    for (let i = 2; i <= rowCount; i++) {

        const firstAndLastName = sheet.getCell(i, 1).value;
        if (firstAndLastName && firstAndLastName != currentIntern) {
            currentIntern = firstAndLastName;
        }

        const currentDateString = sheet.getCell(i, 5).value;
        if (currentDateString && currentIntern) {
            const weekName = getDateFromString(currentDateString);
            if (!scheduleMap[weekName]) {
                scheduleMap[weekName] = {
                    totalHoursScheduled:0,
                    interns:{},
                };
            }

            const currentWeekMap = scheduleMap[weekName];

            const hoursString = sheet.getCell(i, 6).value;
            const hoursThisShift = calculateHours(hoursString);
            currentWeekMap.totalHoursScheduled += hoursThisShift;
            scheduleMap.total.totalHoursScheduled += hoursThisShift;
            currentWeekMap.interns[currentIntern] =
                (currentWeekMap.interns[currentIntern] ?
                    currentWeekMap.interns[currentIntern]
                    : 0) + hoursThisShift;
            scheduleMap.total.interns[currentIntern] =
                (scheduleMap.total.interns[currentIntern] ?
                    scheduleMap.total.interns[currentIntern]
                    : 0) + hoursThisShift;
        }

    }
    setSimplifiedSchedule(scheduleMap);

}

export default simplifySchedule;