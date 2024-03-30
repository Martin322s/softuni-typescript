function sumFirstLast(input: number[]): void {
    let firstElement: number = Number(input.shift());
    let lastElement: number = Number(input.pop());
    let sum: number = firstElement + lastElement;

    console.log(sum);
}