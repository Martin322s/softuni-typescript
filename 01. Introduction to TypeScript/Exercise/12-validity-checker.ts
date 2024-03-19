function validityChecker(
    numOne: number | string,
    numTwo: number | string,
    numThree: number | string,
    numFour: number | string
) {
    let x1: number = Number(numOne);
    let y1: number = Number(numTwo);
    let x2: number = Number(numThree);
    let y2: number = Number(numFour);

    let result = (x1: number, y1: number, x2: number, y2: number) => {
        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        const validString = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);
    }

    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);
}