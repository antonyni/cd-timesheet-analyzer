const makeTaMap = (taExcel, setTaMap) => {
    const sheet = taExcel.getWorksheet("Map");
    const taMap = {};
    for(let row = 2; row <= sheet.rowCount; row++){
        const intern = sheet.getCell(row,1).value;
        const ta = sheet.getCell(row,2).value
        taMap[intern] = ta; 
    }
    setTaMap(taMap);
}

export default makeTaMap;

