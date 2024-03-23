function evenPositions(input: number[]): void {
    let result: string = '';

    for (let i: number = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result += input[i] + ' ';
        }
    }

    let formattedResult: string = result.trim();
    
    console.log(formattedResult);
}