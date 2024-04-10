function processInput(input: string | number) {
    if (typeof input === "string") {
        console.log("Processing string: " + input);
    } else {
        console.log("Processing number: " + input);
    }
}

processInput("Hello");
processInput(123);
