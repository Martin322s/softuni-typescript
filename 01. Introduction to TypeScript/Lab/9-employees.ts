function employees(input: string[]): void {
    let result: { name: string, personalNumber: number }[] = [];

    for (let person of input) {
        result.push({ name: person, personalNumber: person.length });
    }

    result
        .forEach((person) =>
            console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
        );
}