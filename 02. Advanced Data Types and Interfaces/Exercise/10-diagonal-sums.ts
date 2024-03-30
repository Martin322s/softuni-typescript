function diagonalSums(input: number[][]): void {
    let mainDiagonalSum: number = 0;
    let secondaryDiagonalSum: number = 0;

    for (let i: number = 0; i < input.length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[i][input.length - 1 - i];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}