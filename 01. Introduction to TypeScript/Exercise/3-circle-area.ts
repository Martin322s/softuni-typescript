function area(input: string | number): void {
    let area: number = 0;

    if (typeof input !== 'number') {
        `We can not calculate the circle area, because we receive a ${typeof input}.`
    } else {
        area = Math.PI * input ** 2;
    }

    console.log(area.toFixed(2));
}