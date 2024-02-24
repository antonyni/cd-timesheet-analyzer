const decimalToHours = (decimalHours) => {
    const normalHours= ((decimalHours / 1) < 10 ? "0" : "") + parseInt(decimalHours);
    const minutesSimplified = Math.round(decimalHours % 1 * 60);
    const minutes= (minutesSimplified == 0 ?
        "00" :
        (minutesSimplified < 10 ?
            "0" :
            "") + minutesSimplified
    );
    const normalHoursScheduled =  normalHours + ":" + minutes;

    return normalHoursScheduled;
}

export default decimalToHours;