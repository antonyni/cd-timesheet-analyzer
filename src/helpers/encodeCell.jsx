import * as XLSX from 'xlsx'
const encodeCell = (row, column) => {
    return XLSX.utils.encode_cell({ r: row, c: column });
}

export default encodeCell;