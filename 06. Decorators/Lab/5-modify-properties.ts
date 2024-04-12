function readonly(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    });
}

class MyClass5 {
    @readonly
    constantValue: number = 42;
}