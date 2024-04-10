function logClass<T extends {new(...args: any[]): {}}>(constructor: T) {
    console.log(`Class ${constructor.name} initialized.`);
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
        }
    };
}

class MyClass {
    constructor() {}
}

new MyClass(); // Output: Class MyClass initialized.
