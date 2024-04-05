class Car {
    public brand: string;
    public model: string;
    public horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    get getBrand(): string {
        return this.brand;
    }

    get getModel(): string {
        return this.model;
    }

    get getHorsePower(): number {
        return this.horsePower;
    }

    set carBrand(brand: string) {
        this.brand = brand;
    }

    set carModel(model: string) {
        this.model = model;
    }

    set carHorsePower(horsePower: number) {
        this.horsePower = horsePower;
    }
}

let carObj = new Car('Skoda', 'Karoq', 150);
console.log(`This car is: ${carObj.getBrand} ${carObj.getModel} - ${carObj.getHorsePower} HP.`);
