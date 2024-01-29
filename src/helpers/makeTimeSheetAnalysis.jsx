import * as XLSX from 'xlsx'
import sortSheetByColumn from './sortSheetByColumn';
import encodeCell from './encodeCell';
import hoursToDecimal from './hoursToDecimal';
const makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule) => {
    const sheet = timesheetExcel["Sheets"]["All Employees"];
    const dimensions = XLSX.utils.decode_range(sheet["!ref"]);
    let difference = [];
    for (let row = 1; row <= dimensions.e.r; row++) {
        if (sheet[encodeCell(row, 0)] == "")
            continue;
        const firstAndLastName = sheet[encodeCell(row, 0)].v + " " + sheet[encodeCell(row, 1)].v;
        if (simplifiedSchedule[firstAndLastName]) {
            const decimalHoursScheduled = simplifiedSchedule[firstAndLastName]
            const hourHoursScheduled = ((decimalHoursScheduled / 1) < 10 ? "0" : "") + decimalHoursScheduled / 1;
            const minutesSimplified = Math.round(decimalHoursScheduled%1*60);
            const minutesHoursScheduled = (minutesSimplified == 0 ?
                "00" :
                (minutesSimplified < 10 ? 
                    "0"  :
                    "") + minutesSimplified
            );
            const normalHoursScheduled = parseInt(hourHoursScheduled) + ":" + minutesHoursScheduled;
            const normalHoursWorked = sheet[encodeCell(row, 15)].v=="" ? "00:00" : sheet[encodeCell(row, 15)].v;
            const decimalHoursWorked = hoursToDecimal(normalHoursWorked);
            const percentageDifference = decimalHoursWorked / decimalHoursScheduled * 100;
            difference.push(
                {
                    "First Name": sheet[encodeCell(row, 0)].v,
                    "Last Name": sheet[encodeCell(row, 1)].v,
                    "Hours Worked": normalHoursWorked,
                    "Hours Scheduled": normalHoursScheduled,
                    "Percent Worked": percentageDifference.toFixed(2),
                }
            )
        }
    }
    const differenceSheet = XLSX.utils.json_to_sheet(difference);
    differenceSheet['!cols'] = [
        { wch: 20 }, 
        { wch: 20 }, 
        { wch: 20 },
        { wch: 20 },
        { wch: 15 },
    ];
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook,differenceSheet,"Analysis");
    console.log(differenceSheet);
    XLSX.writeFile(newWorkbook, 'Timesheet Analysis.xlsx');
}

export default makeTimesheetAnalysis;