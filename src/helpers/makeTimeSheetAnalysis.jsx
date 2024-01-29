import * as XLSX from 'xlsx'
import * as ExcelJS from 'exceljs'
import * as FileSaver from 'file-saver'
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
            const minutesSimplified = Math.round(decimalHoursScheduled % 1 * 60);
            const minutesHoursScheduled = (minutesSimplified == 0 ?
                "00" :
                (minutesSimplified < 10 ?
                    "0" :
                    "") + minutesSimplified
            );
            const normalHoursScheduled = parseInt(hourHoursScheduled) + ":" + minutesHoursScheduled;
            const normalHoursWorked = sheet[encodeCell(row, 15)].v == "" ? "00:00" : sheet[encodeCell(row, 15)].v;
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
    let percentColumn = 4;
    let range = XLSX.utils.decode_range(differenceSheet["!ref"]);
    // for(let row = 1; row  <= range.e.r;row++){
    //     const percent = parseFloat(differenceSheet[encodeCell(row,percentColumn)].v);
    //     if(percent <= 80){
    //         differenceSheet[encodeCell(row,percentColumn)].s={
    //             fill: {
    //               patternType: "solid",
    //               fgColor: { rgb: "111111" }
    //             }
    //             };
    //     }
    // }
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, differenceSheet, "Analysis");
//    XLSX.writeFile(newWorkbook, 'Timesheet Analysis.xlsx');
    const exceldata = XLSX.write(newWorkbook,{ type: 'buffer', bookType: 'xlsx' });

    const wb = new ExcelJS.Workbook();
    wb.xlsx.load(exceldata).then(()=>{
        wb.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data]); 
            FileSaver.saveAs(blob, "Timesheet Analysis.xlsx");
           });
    })
    // fetch('Timesheet Analysis (7).xlsx')
    // .then(function (response) {
    //     return response.arrayBuffer();
    // })
    // .then(function (buffer) {
    //     const wb = new ExcelJS.Workbook();
    //     return wb.xlsx.load(buffer);
    // })
    // .then(function (workbook) {
    //     // console.log(workbook);
    //     // Continue with further processing here
    // })
    // .catch(function (error) {
    //     console.error('Error:', error);
    // });
}

export default makeTimesheetAnalysis;