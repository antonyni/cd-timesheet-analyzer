import * as ExcelJS from 'exceljs'

const handleFileUploadExcelJS = (event, setWorkbook) => {
    if (event.target.files) {
        const file = event.target.files[0];
        const reader = new FileReader();
        if (event.target.files[0]) {
            reader.readAsArrayBuffer(file);
        }
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = new ExcelJS.Workbook();
            workbook.xlsx.load(data).then(()=>{
                setWorkbook(workbook);
            })
        };

    }
}

export default handleFileUploadExcelJS;