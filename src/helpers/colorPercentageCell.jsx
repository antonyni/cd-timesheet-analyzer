const colorPercentageCell = (currSheet, percentageAccepted) => {
    const currCell = currSheet.getCell(currSheet.rowCount, 5)
    const changeFromPreviousWeek = currSheet.getCell(currSheet.rowCount, 6)
    if (parseFloat(currCell.value) < percentageAccepted) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (parseFloat(currCell.value) > 100) {
        currCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80ffff00' }
        };
    }
    if (parseFloat(changeFromPreviousWeek.value) < -15) {
        changeFromPreviousWeek.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '80e76060' }
        };
    }
    if (parseFloat(changeFromPreviousWeek.value) > 15) {
        changeFromPreviousWeek.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '8042f58d' }
        };
    }
}

export default colorPercentageCell;