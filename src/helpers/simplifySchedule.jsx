import * as XLSX from 'xlsx';
import hoursToDecimal from './hoursToDecimal';
import encodeCell from './encodeCell';


const calculateHours = (sheet, row) => {
    let start = sheet[encodeCell(row, 1)].v;
    let end = sheet[encodeCell(row, 2)].v;


    return hoursToDecimal(end) - hoursToDecimal(start);
}
const simplifySchedule = (scheduleExcel, setSimplifiedSchedule) => {
    if (!scheduleExcel.Sheets ||
        !scheduleExcel.Sheets["All Employees"] ||
        scheduleExcel.Sheets["All Employees"]["F1"].v != "Users") {
        alert("Invalid Schedule File")
        return ;

    }
    const scheduleMap = {};
    const sheet = scheduleExcel.Sheets["All Employees"];
    const dimensions = XLSX.utils.decode_range(sheet["!ref"]);
    for (let i = 1; i <= dimensions.e.r; i++) {
        const studentName = sheet[encodeCell(i, 5)].v;
        if (!scheduleMap[studentName]) {
            scheduleMap[studentName] = 0;
        }

        scheduleMap[studentName] += calculateHours(sheet, i)

    }
    setSimplifiedSchedule(scheduleMap);

}

export default simplifySchedule;