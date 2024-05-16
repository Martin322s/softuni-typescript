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