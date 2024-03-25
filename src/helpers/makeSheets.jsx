import setUpNewSheet from "./setUpNewSheet";
import colorPercentageCell from "./colorPercentageCell";
const makeSheets = (workbook, hoursWorkedMap, percentageAccepted, taMap, teamMap) => {
    console.log(hoursWorkedMap);
    Object.keys(hoursWorkedMap).forEach((weekName) => {
        const sheet = setUpNewSheet(weekName, workbook, percentageAccepted);
        const teamHoursMap = {};
        if(!teamMap){
            teamMap = {};
        }

        Object.keys(hoursWorkedMap[weekName].interns).forEach((intern) => {
            console.log(weekName);
            const currentInternData = hoursWorkedMap[weekName].interns[intern];
            const firstName = currentInternData.firstName ? currentInternData.firstName : intern.split(' ')[0];
            const lastName = currentInternData.lastName ? currentInternData.lastName : intern.split(' ').slice(1).join(' ');
            const firstNameCapitalized = firstName[0].toUpperCase() + firstName.slice(1);
            const lastNameCapitalized = lastName[0].toUpperCase() + lastName.slice(1);
            const teamName = teamMap[firstNameCapitalized + " " + lastNameCapitalized]?teamMap[firstNameCapitalized + " " + lastNameCapitalized] : "NO TEAM";
            sheet.addRow({
                firstName: firstNameCapitalized,
                lastName: lastNameCapitalized,
                hoursWorked: currentInternData.normalHoursWorked,
                hoursScheduled: currentInternData.normalHoursScheduled,
                percentWorked: currentInternData.percentageDifference == 0 ? "0" : currentInternData.percentageDifference,
                changeFromPreviousWeek: currentInternData.changeFromPreviousWeek,
                team: teamName,
                ta: taMap[firstName + " " + lastName] ? taMap[firstName + " " + lastName] : "NO TA",
            })
            colorPercentageCell(sheet, percentageAccepted);
            if(!teamHoursMap[teamName]){
                teamHoursMap[teamName] = {
                    numberOfInterns:0,
                    percentage:0,
                }
            }
            teamHoursMap[teamName].numberOfInterns++;
            teamHoursMap[teamName].percentage += parseFloat(currentInternData.percentageDifference);
        })
        sheet.getCell(2,9).value = hoursWorkedMap[weekName].total.percentageAcceptedNumbers.percentageDifference;
        sheet.getCell(2,10).value = hoursWorkedMap[weekName].total.totalHoursWorked;
        sheet.getCell(2,11).value = hoursWorkedMap[weekName].total.totalHoursScheduled;
        sheet.getCell(2,12).value = hoursWorkedMap[weekName].total.percentageDifference;
        sheet.getCell(2,13).value = hoursWorkedMap[weekName].total.changeFromPreviousWeek;

        sheet.getCell(5,12).value = "Team Name";
        sheet.getCell(5,13).value = "Attendance";
        const teamNames = Object.keys(teamHoursMap);
        const numTeams = teamNames.length;
        for(let team = 0; team < numTeams; team++){
            const teamName = teamNames[team];
            sheet.getCell(6+team,12).value = teamName;
            sheet.getCell(6+team,13).value = (teamHoursMap[teamName].percentage/ teamHoursMap[teamName].numberOfInterns ).toFixed(2);
        }
    })

}

export default makeSheets;