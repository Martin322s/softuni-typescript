function pieceOfPie(inputArray: number[], targetStart: number, targetEnd: number): number[] {
    let result: number[] = [];
    let startIndex: number = inputArray.indexOf(targetStart);
    let endIndex: number = inputArray.lastIndexOf(targetEnd);

    result = inputArray.slice(startIndex, endIndex + 1);
    
    return result;
}