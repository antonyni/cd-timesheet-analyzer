const hoursToDecimal = (hours) => {
    let hourDecimal = parseFloat(hours.substring(0, 2))
        + parseFloat(hours.substring(3, 5)) / 60
        + ((hours.substring(5, 7) == "pm" && hours.substring(0, 2)!="12" ) ? 12 : 0);
    return hourDecimal;
}

export default hoursToDecimal;