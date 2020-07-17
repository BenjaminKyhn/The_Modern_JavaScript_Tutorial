function getWeekDay(date) {
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    let weekday = date.getDay();
    return days[weekday];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));        // should output "TU"