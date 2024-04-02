function aggregateElements(input: number[]): void {
    let sum: number = input.reduce((acc: number, curr: number): number => {
        return acc + curr;
    }, 0);

    let inverseSum: number = input.reduce((acc: number, curr: number): number => {
        return acc + (1 / curr);
    }, 0);
    
    let concatenateElements: string = input.reduce((acc: string, curr: number): string => {
        return acc + curr;
    }, '');

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenateElements);
}