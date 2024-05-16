// Basic Decorator
function classDecorator(constructor: Function) {
    console.log('Decorator called!');
}

function methodDecorator(target: Emitter, key: String, descriptor: TypedPropertyDescriptor<() => void>) {
    console.log('Method decorator called!');

}

@classDecorator
class Emitter {
    constructor() {
        console.log('Constructor called!');
    }

    @methodDecorator
    emit() {
        console.log('Method called');
    }
}

const emit = new Emitter();

console.log(emit);
emit.emit();


function configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

class Point2 {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    @configurable(false)
    get x() { return this._x; }
    @configurable(false)
    get y() { return this._y; }
}