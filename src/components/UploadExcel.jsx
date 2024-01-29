'use client'
import * as XLSX from 'xlsx'
const UploadExcel = () => {
    console.log(XLSX.utils.encode_cell({c:0,r:0}));


    let workbooks = {};
    const handleFileUpload = (event, type) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            workbooks[type] = workbook;
            console.log(workbooks);
            // Access sheets and process data as needed.
        };
        reader.readAsArrayBuffer(file);
    };
    const downloadFile = (test) => {
        let currNum = 2;
        let book = workbooks["book"]["Sheets"]["Jan 8 (Week 2)"];
        let googleOneToFour = workbooks["google"]["Sheets"]["Monday-Friday 1-4pm"];
        let googleFourToSeven = workbooks["google"]["Sheets"]["Monday-Friday 4-7pm"];
        let googleAlt = workbooks["google"]["Sheets"]["Alternative Schedule"]
        let studentMap = {};
        console.log(workbooks);
        let currNumGoogle = 3;

        while (book["A" + currNum]) {
            studentMap[book["A" + currNum].v.toLowerCase().trim() + book["B" + currNum].v.toLowerCase().trim()] = "H" + currNum;
            currNum++;
        }
        while (googleOneToFour["D" + currNumGoogle]) {
            let studentName = googleOneToFour["D" + currNumGoogle].v.toLowerCase().trim() + googleOneToFour["E" + currNumGoogle].v.toLowerCase().trim()
            let position = studentMap[studentName];
            book[position] = { t: 's', v: '1-4pm', r: '<t>1-4pm</t>', h: '1-4pm', w: '1-4pm' };
            currNumGoogle++;
        }
        currNumGoogle = 3;
        while (googleFourToSeven["D" + currNumGoogle]) {
            let studentName = googleFourToSeven["D" + currNumGoogle].v.toLowerCase().trim() + googleFourToSeven["E" + currNumGoogle].v.toLowerCase().trim()
            let position = studentMap[studentName];
            book[position] = { t: 's', v: '4-7pm', r: '<t>4-7pm</t>', h: '4-7pm', w: '4-7pm' };
            currNumGoogle++;
        }
        currNumGoogle = 3;
        while (googleAlt["D" + currNumGoogle]) {
            let studentName = (googleAlt["D" + currNumGoogle].v.toLowerCase().trim() + googleAlt["E" + currNumGoogle].v.toLowerCase().trim());
            let position = studentMap[studentName];
            let schedule = googleAlt["I"+currNumGoogle].v;
            book[position] = { t: 's', v: schedule, r: '<t>'+schedule+'</t>', h: schedule, w:schedule };
            currNumGoogle++;

        }
        console.log(book);
        console.log(XLSX.utils.encode_cell({r:2,c:3}));
        console.log(XLSX.utils.decode_range(book['!ref']));
    





    }
    return (
        <main>
            <h1>book file</h1>
            <input type="file" onChange={event => handleFileUpload(event, "book")} />
            <h1>google doc sheet</h1>
            <input type="file" onChange={event => handleFileUpload(event, "google")} />
            <button style={{ width: "100px", height: "100px", backgroundColor: "white" }} onClick={event => downloadFile("hi")}>
                <h1 style={{ color: "black" }}>make file</h1>
            </button>
        </main>
    )
}

export default UploadExcel;