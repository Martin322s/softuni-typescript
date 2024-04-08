enum Day {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

function categorizeDay(day: Day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        console.log("Weekend");
    } else {
        console.log("Weekday");
    }
}

categorizeDay(Day.Monday);
categorizeDay(Day.Sunday);
