const hoursToDecimal = (hours) => {
    let hourDecimal = parseFloat(hours.split(":")[0])
        + parseFloat(hours.split(":")[1]) / 60
        + ((hours.substring(5, 7) == "pm" && hours.substring(0, 2)!="12" ) ? 12 : 0);
    return hourDecimal;
}

export default hoursToDecimal;