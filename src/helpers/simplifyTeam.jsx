
const simplifyTeam = (teamExcel, setTeamMap) => {
    const sheet = teamExcel.getWorksheet("Sheet1");
    const teamMap = {};
    const rowCount = sheet.rowCount;
    for (let row = 1; row <= rowCount ; row++){
        const firstName = sheet.getCell(row, 1).value;
        const lastName = sheet.getCell(row,2).value;
        teamMap[firstName + " " + lastName] = sheet.getCell(row,3).value;
    }
    setTeamMap(teamMap);

}

export default simplifyTeam;