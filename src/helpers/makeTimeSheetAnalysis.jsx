// import * as ExcelJS from 'exceljs'
// import * as FileSaver from 'file-saver'
// import hoursToDecimal from './hoursToDecimal';
// const makeTimesheetAnalysis = (timesheetExcel, simplifiedSchedule, percentageAccepted) => {
//     const sheet = timesheetExcel["Sheets"]["All Employees"];
//     const dimensions = XLSX.utils.decode_range(sheet["!ref"]);
//     let difference = [];
//     for (let row = 1; row <= dimensions.e.r; row++) {
//         if (sheet[encodeCell(row, 0)] == "")
//             continue;
//         const firstAndLastName = sheet[encodeCell(row, 0)].v + " " + sheet[encodeCell(row, 1)].v;
//         if (simplifiedSchedule[firstAndLastName]) {
//             const decimalHoursScheduled = simplifiedSchedule[firstAndLastName]
//             const hourHoursScheduled = ((decimalHoursScheduled / 1) < 10 ? "0" : "") + decimalHoursScheduled / 1;
//             const minutesSimplified = Math.round(decimalHoursScheduled % 1 * 60);
//             const minutesHoursScheduled = (minutesSimplified == 0 ?
//                 "00" :
//                 (minutesSimplified < 10 ?
//                     "0" :
//                     "") + minutesSimplified
//             );
//             const normalHoursScheduled = parseInt(hourHoursScheduled) + ":" + minutesHoursScheduled;
//             const normalHoursWorked = sheet[encodeCell(row, 15)].v == "" ? "00:00" : sheet[encodeCell(row, 15)].v;
//             const decimalHoursWorked = hoursToDecimal(normalHoursWorked);
//             const percentageDifference = decimalHoursWorked / decimalHoursScheduled * 100;
//             difference.push(
//                 {
//                     "First Name": sheet[encodeCell(row, 0)].v,
//                     "Last Name": sheet[encodeCell(row, 1)].v,
//                     "Hours Worked": normalHoursWorked,
//                     "Hours Scheduled": normalHoursScheduled,
//                     "Percent Worked": percentageDifference.toFixed(2),
//                 }
//             )
//         }
//     }
//     const differenceSheet = XLSX.utils.json_to_sheet(difference);
//     const newWorkbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(newWorkbook, differenceSheet, "Analysis");
//     const exceldata = XLSX.write(newWorkbook, { type: 'buffer', bookType: 'xlsx' });
//     const wb = new ExcelJS.Workbook();

//     wb.xlsx.load(exceldata).then(() => {
//         let worksheet = wb.getWorksheet('Analysis');
//         const numRows = worksheet.rowCount;
//         for (let currRow = 2; currRow <= numRows; currRow++) {
//             worksheet.getRow(currRow).height = 20;
//             const currCell = worksheet.getCell(currRow, 5)
//             if (parseFloat(currCell) < percentageAccepted) {
//                 currCell.fill = {
//                     type: 'pattern',
//                     pattern: 'solid',
//                     fgColor: { argb: '80e76060' }
//                 };
//             }
//             if(parseFloat(currCell) > 100){
//                 currCell.fill = {
//                     type: 'pattern',
//                     pattern: 'solid',
//                     fgColor: { argb: '8042f58d' }
//                 };
//             }

//         }
//         worksheet.views = [{}];
//         worksheet.properties.defaultColWidth = 15;
//         worksheet.properties.defaultRowHeight = 20;
//         wb.xlsx.writeBuffer().then(data => {
//             const blob = new Blob([data]);
//             FileSaver.saveAs(blob, "Timesheet Analysis.xlsx");
//         });
//     })
// }

// const makeAttendanceMessage = (firstName, lastName,hoursWorked,hoursScheduled,percentageWorked) => {
//     return (
//         "Hello " + firstName + " " + lastName + ",\n\n" +
//         "We are writing to address your attendance during the internship program at Code Differently. This past week, " +
//         "your attendance percentage stands at " + percentageWorked +"%, reflecting " + hoursWorked + " hours worked out of " + hoursScheduled + " hours scheduled. \n\n" +
//         "Consistent attendance is critical to your success in the program and reflects your commitment to your professional development. Your attendance record will be shared with New Castle County, our employer partner. \n\n" + 
//         "Improving your attendance is vital for your continued participation in the program and potential employment opportunities. Please prioritize attendance and communicate any challenges promptly.\n\n" + 
//         "Thank you for your attention to this matter. \n\n" +
//         "Best regards,\n\n" + 
//         "Code Differently"
//     );
// }
// export default makeTimesheetAnalysis;