function rectangleArea(numOne: number, numTwo: number): void {
    let length: number = Number(numOne);
    let width: number = Number(numTwo);

    const area: number = length * width;

    console.log(area);
}

rectangleArea(5, 7);