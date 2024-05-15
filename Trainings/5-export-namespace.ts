namespace Animal {
    export class Mammal {
        public name: string;

        constructor(name: string) {
            this.name = name;
        }
    }
}

namespace TechShop {
    export namespace Laptop {
        export class Samsung {}
        export class Lenovo {}
        export class HP {}
    }
}