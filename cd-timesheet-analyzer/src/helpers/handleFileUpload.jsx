import * as XLSX from 'xlsx';
const handleFileUpload = (event,setWorkbook) => {
    if(event.target.files){
    const file = event.target.files[0];
    const reader = new FileReader();
    if(event.target.files[0]){
        reader.readAsArrayBuffer(file);
    }
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data,{ type: 'array' });
        setWorkbook(workbook);
    };
}
}

export default handleFileUpload;