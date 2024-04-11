function logMethod(targetClass: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        return originalMethod.apply(this, args);
    };
}

class MyClass {
    @logMethod
    myMethod(arg: number) {
        return arg * 2;
    }
}