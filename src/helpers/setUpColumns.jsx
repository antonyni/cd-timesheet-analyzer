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

    const taAssigned = worksheet.getColumn(7);
    taAssigned.header = "TA";
    taAssigned.key = "ta";

    const percentAboveAccepted = worksheet.getColumn(8);
    percentAboveAccepted.header = "Percentage above " + percentageAccepted;
    percentAboveAccepted.key = "percentAboveAccepeted";
    percentAboveAccepted.width = 20;


    const totalWorked = worksheet.getColumn(9);
    totalWorked.header = "Total Worked";
    totalWorked.key = "totalWorked";

    const totalScheduled = worksheet.getColumn(10);
    totalScheduled.header = "Total Scheduled";
    totalScheduled.key = "totalScheduled";

    const totalPercentWorked = worksheet.getColumn(11);
    totalPercentWorked.header = "Percent Worked";
    totalPercentWorked.key = "totalPercentWorked";

    const totalPercentChange = worksheet.getColumn(12);
    totalPercentChange.header = "Total Percent Change from Last Week";
    totalPercentChange.key = "totalPercentChange";
    totalPercentChange.width = 30;


}

export default setUpColumns;