function lastNumberSequence(limitNumber: number, numbersCount: number): number[] {
    let result: number[] = [];

    if (result.length === 0) {
        result.push(1);
    }

    for (let i = 1; i < limitNumber; i++) {
        let sum: number = 0;
        let previous: number = i - 1;

        for (let j: number = numbersCount; j > 0; j--) {
            if (previous >= 0) {
                sum += result[previous];
            }
            previous--;
        }

        result.push(sum);
    }

    return result;
}