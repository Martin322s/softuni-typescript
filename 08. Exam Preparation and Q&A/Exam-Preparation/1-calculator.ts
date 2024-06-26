function calculator(firstNumber: number, operator: string, secondNumber: number): void {
    let result: null | string | number = 0;

    switch(operator) {
        case '+': result = firstNumber + secondNumber;
            break;
        case '-': result = firstNumber - secondNumber;
            break;
        case '*': result = firstNumber * secondNumber;
            break;
        case '/': result = firstNumber / secondNumber;
            break;
        default: result = 'Invalid operator!';
    }

    console.log(typeof result === 'number' ? result.toFixed(2) : result);
}