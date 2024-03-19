function previousDay(year: number, month: number, day: number): void {
    let currentDate: Date = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);

    let previousYear: number = currentDate.getFullYear();
    let previousMonth: number = currentDate.getMonth() + 1;
    let previousDay: number = currentDate.getDate();

    let formattedDate: string = `${previousYear}-${previousMonth}-${previousDay}`;

    console.log(formattedDate);
}