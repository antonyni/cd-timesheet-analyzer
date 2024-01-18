'use client'
import * as XLSX from 'xlsx';
const UploadExcel = () => {
    let file = {};
    let reader = {};
    let workbooks = {};
    const handleFileUpload = (event, type) => {

        file[type] = event.target.files[0];
        reader[type] = new FileReader();

        reader[type].onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            workbooks[type] = workbook;
            // Access sheets and process data as needed.
        };
        reader[type].readAsArrayBuffer(file[type]);
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
        console.log(workbooks["book"]);
        XLSX.writeFileXLSX(workbooks["book"], "UpdatedBook.xlsx");





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