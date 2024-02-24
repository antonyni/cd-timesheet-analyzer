import hoursToDecimal from './hoursToDecimal';
import * as ExcelJS from 'exceljs'
import getDateFromString from './getDateFromString';


const calculateHours = (untrimmedHoursString) => {
    console.log(typeof untrimmedHoursString);

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
    scheduleMap["total"] = {};
    scheduleMap.total.totalScheduledHours = 0;
    const rowCount = sheet.rowCount;
    let currentIntern = sheet.getCell(2, 1).value;
    for (let i = 2; i <= rowCount; i++) {

        const firstAndLastName = sheet.getCell(i, 1).value;
        if (firstAndLastName && firstAndLastName != currentIntern) {
            currentIntern = firstAndLastName;
        }

        const currentDateString = sheet.getCell(i, 5).value;
        const weekName = getDateFromString(currentDateString);
        if (!scheduleMap[weekName]) {
            scheduleMap[weekName] = {};
            scheduleMap[weekName].totalScheduledHours = 0;
        }

        const currentWeekMap = scheduleMap[weekName];

        const hoursString = sheet.getCell(i, 6).value;
        const hoursThisShift = calculateHours(hoursString);
        currentWeekMap.totalScheduledHours += hoursThisShift;
        scheduleMap.total.totalScheduledHours  += hoursThisShift;
        currentWeekMap[currentIntern] =
            (currentWeekMap[currentIntern] ?
                currentWeekMap[currentIntern]
                : 0) + hoursThisShift;
        scheduleMap.total[currentIntern] =
            (scheduleMap.total[currentIntern] ?
                scheduleMap.total[currentIntern]
                : 0) + hoursThisShift;
    }

    console.log(scheduleMap);
    setSimplifiedSchedule(scheduleMap);

}

export default simplifySchedule;