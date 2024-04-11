function checkTypes(types: string[]) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            args.forEach((arg, index) => {
                if (typeof arg !== types[index]) {
                    throw new Error(`Argument at position ${index} must be of type ${types[index]}`);
                }
            });
            return originalMethod.apply(this, args);
        };
    };
}

class MyClass2 {
    @checkTypes(['number', 'string'])
    setData(age: number, name: string) { }
}