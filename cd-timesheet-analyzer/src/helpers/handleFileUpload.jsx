import * as XLSX from 'xlsx';
const handleFileUpload = (event) => {
    if(event.target.files){
    const file = event.target.files[0];
    const reader = new FileReader();
    if(event.target.files[0]){
        reader.readAsArrayBuffer(file);
    }
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data,{ type: 'array' });
        console.log(workbook);
        // Access sheets and process data as needed.
    };
}
}

export default handleFileUpload;