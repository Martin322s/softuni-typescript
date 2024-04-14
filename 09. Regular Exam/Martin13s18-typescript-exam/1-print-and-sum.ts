function printAndSum(startNumber: number, endNumber: number): void {
    let sum: number = 0;
    let numbersSequence: string = '';

    for (let i: number = startNumber; i <= endNumber; i++) {
        sum += i;
        numbersSequence += i + ' ';
    }

    console.log(numbersSequence.trim());
    console.log(`Sum: ${sum}`);
}