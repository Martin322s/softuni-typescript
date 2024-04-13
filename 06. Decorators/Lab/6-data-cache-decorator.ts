function cache(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cacheKey = Symbol.for(key);
    descriptor.value = function(...args: any[]) {
        this[cacheKey] = this[cacheKey] || {};
        const argKey = JSON.stringify(args);
        if (!this[cacheKey].hasOwnProperty(argKey)) {
            this[cacheKey][argKey] = originalMethod.apply(this, args);
        }
        return this[cacheKey][argKey];
    };
}

class MyClass6 {
    @cache
    heavyComputation(arg: number) {
        return arg + 100;
    }
}