function sumNumbers(numOne: number, numTwo: number): void {
    let sum = 0;
    let startNumber: number = Number(numOne);
    let endNumber: number = Number(numTwo);

    for (let i: number = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    console.log(sum);
}