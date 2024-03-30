function processOddNumbers(input: number[]): string {
    let result: number[] = [];

    for (let i: number = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i]);
        }
    }

    return result.map(x => x * 2).reverse().join(' ');
}