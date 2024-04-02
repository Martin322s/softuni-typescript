function mathOperations(numOne: number, numTwo: number, operand: string): void {
    let result: number = 0;
    let firstNumber: number = Number(numOne);
    let secondNumber: number = Number(numTwo);

    switch (operand) {
        case '+': result = firstNumber + secondNumber;
            break;
        case '-': result = firstNumber - secondNumber;
            break;
        case '*': result = firstNumber * secondNumber;
            break;
        case '/': result = firstNumber / secondNumber;
            break;
        case '%': result = firstNumber % secondNumber;
            break;
        case '**': result = firstNumber ** secondNumber;
            break;
    }

    console.log(result);
}