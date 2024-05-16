function sum(a: number, b: number) {
    return a + b;
}

export { sum as sumFunction };

export function subtract(a: number, b: number) {
    return a - b;
}

export default {
    sum, subtract
}