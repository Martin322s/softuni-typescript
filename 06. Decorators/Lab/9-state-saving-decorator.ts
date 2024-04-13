function autoSave(key: string) {
    return function (target: any, propertyKey: string) {
        let value = JSON.parse(localStorage.getItem(key) || 'null');
        const getter = () => value;
        const setter = (newValue: any) => {
            value = newValue;
            localStorage.setItem(key, JSON.stringify(newValue));
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            configurable: true,
            enumerable: true
        });
    };
}

class MyClass9 {
    @autoSave('myProperty')
    myProperty: number;
}