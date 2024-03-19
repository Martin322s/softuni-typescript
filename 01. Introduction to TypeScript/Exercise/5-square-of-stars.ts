function squareOfStars(input: number): void {
    let squareSides: number = Number(input);

    for (let i: number = 0; i < squareSides; i++) {
        console.log("* ".repeat(squareSides));
    }
}