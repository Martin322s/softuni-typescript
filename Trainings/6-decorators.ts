// Basic Decorator
function classDecorator(constructor: Function) {
    console.log('Decorator called!');
}

function methodDecorator(target: Emitter, key: String, descriptor: TypedPropertyDescriptor<() => void>) {
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

@classDecorator
class Emitter {
    @propertyDecorator
    private _x: number;

    constructor(_x: number) {
        this._x = _x;
        console.log('Constructor called!');
    }

    @methodDecorator
    emit() {
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
emit.emit();
emit.x;