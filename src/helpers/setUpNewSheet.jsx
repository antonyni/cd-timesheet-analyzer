import setUpColumns from "./setUpColumns";
const setUpNewSheet = (weekName, workbook, percentageAccepted) => {
    const sheet = workbook.addWorksheet(weekName);
    sheet.views = [{}];
    sheet.properties.defaultColWidth = 15;
    sheet.properties.defaultRowHeight = 20;
    setUpColumns(sheet, percentageAccepted);
    return sheet;
}

export default setUpNewSheet;