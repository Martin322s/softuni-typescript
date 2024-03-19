function daysInMonth(month: number, year: number): void {
    let date: Date = new Date(year, month, 0);
    let totalDays: number = date.getDate();
    
    console.log(totalDays);
}