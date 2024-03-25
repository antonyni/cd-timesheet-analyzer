const setUpColumns = (worksheet, percentageAccepted) => {
    const firstName = worksheet.getColumn(1);
    firstName.header = "First Name";
    firstName.key = "firstName";

    const lastName = worksheet.getColumn(2);
    lastName.header = "Last Name";
    lastName.key = "lastName";

    const hoursWorked = worksheet.getColumn(3);
    hoursWorked.header = "Hours Worked";
    hoursWorked.key = "hoursWorked";

    const hoursScheduled = worksheet.getColumn(4);
    hoursScheduled.header = "Hours Scheduled";
    hoursScheduled.key = "hoursScheduled";


    const percentWorked = worksheet.getColumn(5);
    percentWorked.header = "Percent Worked";
    percentWorked.key = "percentWorked";

    const changeFromPreviousWeek = worksheet.getColumn(6);
    changeFromPreviousWeek.header = "Percent Change from Last Week";
    changeFromPreviousWeek.key = "changeFromPreviousWeek";
    changeFromPreviousWeek.width = 25;

    const teamAssigned = worksheet.getColumn(7);
    teamAssigned.header = "Team";
    teamAssigned.key = "team";
    teamAssigned.width = 25;

    const taAssigned = worksheet.getColumn(8);
    taAssigned.header = "TA";
    taAssigned.key = "ta";

    

    const percentAboveAccepted = worksheet.getColumn(9);
    percentAboveAccepted.header = "Percentage above " + percentageAccepted;
    percentAboveAccepted.key = "percentAboveAccepeted";
    percentAboveAccepted.width = 20;


    const totalWorked = worksheet.getColumn(10);
    totalWorked.header = "Total Worked";
    totalWorked.key = "totalWorked";

    const totalScheduled = worksheet.getColumn(11);
    totalScheduled.header = "Total Scheduled";
    totalScheduled.key = "totalScheduled";

    const totalPercentWorked = worksheet.getColumn(12);
    totalPercentWorked.header = "Percent Worked";
    totalPercentWorked.key = "totalPercentWorked";
    totalPercentWorked.width = 25;

    const totalPercentChange = worksheet.getColumn(13);
    totalPercentChange.header = "Total Percent Change from Last Week";
    totalPercentChange.key = "totalPercentChange";
    totalPercentChange.width = 30;


}

export default setUpColumns;