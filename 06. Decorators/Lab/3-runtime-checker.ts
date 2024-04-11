function measure(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        console.log(`${key} executed in ${endTime - startTime} milliseconds`);
        return result;
    };
}

class MyClass3 {
    @measure
    compute() {
        
    }
}