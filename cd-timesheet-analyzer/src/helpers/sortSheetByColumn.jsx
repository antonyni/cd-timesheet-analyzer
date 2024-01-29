import * as XLSX from 'xlsx';
const sortSheetByColumn = (sheet,column) => {
    const data = XLSX.utils.sheet_to_json(sheet);
    data.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        // Handle the case where one of the values is an empty string
        if (valueA === '' && valueB === '') {
            return 0; // Leave them in the same order
        } else if (valueA === '') {
            return 1; // Place the empty value at the bottom
        } else if (valueB === '') {
            return -1; // Place the empty value at the bottom
        } else {
            return valueA.localeCompare(valueB); // Compare non-empty values
        }
    });
    return XLSX.utils.json_to_sheet(data);
}

export default sortSheetByColumn;