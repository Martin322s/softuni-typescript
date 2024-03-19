function wordsUppercase(text: string): void {
    let result: string = text.toUpperCase().split(/[\W]+/).filter(w => w.length > 0).join(", ");
    console.log(result);
}