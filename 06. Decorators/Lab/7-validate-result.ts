function validateOutput(predicate: (output: any) => boolean) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const result = originalMethod.apply(this, args);
            if (!predicate(result)) {
                throw new Error(`Validation failed for the output of ${key}`);
            }
            return result;
        };
    };
}

class MyClass7 {
    @validateOutput(x => x >= 0)
    computeValue(num: number) {
        return num - 10;
    }
}