// Basic Decorator
function classDecorator(constructor: Function) {
    console.log('Decorator called!');
}

function secondClassDecorator(constructor: Function) {
    console.log('Second class decorator called!');
}

function methodDecorator(target: Emitter, key: String, descriptor: TypedPropertyDescriptor<(param: boolean) => void>) {
    console.log('Method decorator called!');
}

function configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

function propertyDecorator(constructor: Emitter, name: string) {
    console.log('Property Decorator called!');

}

function paramDecorator(target: Object, propertyKey: string, parameterIndex: number) {
    console.log('Param decorator called!');
}

function enumerable(value: boolean) {
    return function (target: Object, propertyKey:
        string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

@secondClassDecorator
@classDecorator
class Emitter {
    @propertyDecorator
    private _x: number;

    constructor(_x: number) {
        this._x = _x;
        console.log('Constructor called!');
    }

    @methodDecorator
    emit(@paramDecorator param: boolean) {
        console.log('Method called');
    }

    @configurable(false)
    get x() {
        console.log('Accessor decorator called');
        return this._x;
    }
}

const emit = new Emitter(1);

console.log(emit);
emit.emit(true);
emit.x;