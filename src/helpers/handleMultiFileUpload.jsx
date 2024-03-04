import * as ExcelJS from 'exceljs'
import { ReadableWebToNodeStream } from "readable-web-to-node-stream";

const handleMultiFileUpload = async (event, setWorkbook) => {
    if (event.target.files) {
        const workbookArray = [];
        const workbook = new ExcelJS.Workbook();
        const fileArray = event.target.files;
        console.log(fileArray[0])
        const stream = new ReadableWebToNodeStream(
        
            fileArray[0].stream()
        );
        console.log(stream);
        await workbook.csv.read(stream);
        const worksheet = workbook.worksheets[0];
        console.log(worksheet.getCell(1,1).value);

    }
}

export default handleMultiFileUpload;