function equalNeighbours(args: number[][]): void {
    let counter: number = 0;

    for (let index: number = 0; index < args.length - 1; index++) {
        for (let j = 1; j < args[index].length; j++) {
            if (args[index][j] == args[index + 1][j]) {
                counter++;
            }
            if (args[index][j] == args[index][j - 1]) {
                counter++;
            }
        }
    }

    for (let index: number = 0; index < args[args.length - 1].length; index++) {
        if (args[args.length - 1][index] == args[args.length - 1][index + 1]) {
            counter++;
        }
    }

    for (let index: number = 0; index < args.length - 1; index++) {
        if (args[index][0] == args[index + 1][0]) {
            counter++;
        }
    }
    
    console.log(counter)
}