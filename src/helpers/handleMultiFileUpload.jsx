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
        await workbook.xlsx.read(stream);
        const worksheet = workbook.worksheets[0];
        console.log(worksheet.getCell(1,1).value);


        // for(const file of fileArray){
        //     const reader = new FileReader();
        // if (file) {
        //     reader.readAsArrayBuffer(event.target.files[0]);
        // }
        // reader.onload = (e) => {
        //     const data = new Uint8Array(e.target.result);
        //     const workbook = new ExcelJS.Workbook();
        //     workbook.xlsx.load(data).then(()=>{
        //         console.log(workbook);
        //         workbookArray.push(workbook);
        //     })
        // };

        // }

    }
}

export default handleMultiFileUpload;