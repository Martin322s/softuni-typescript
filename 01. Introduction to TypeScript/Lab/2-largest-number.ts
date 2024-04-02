function largestNumber(numOne: number, numTwo: number, numThree: number): void {
    let largestNumber: number = 0;
    let firstNumber: number = Number(numOne);
    let secondNumber: number = Number(numTwo);
    let thirdNumber: number = Number(numThree);

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        largestNumber = firstNumber;
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        largestNumber = secondNumber;
    } else {
        largestNumber = thirdNumber;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

largestNumber(-3, -5, -22.5);