interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership implements Dealership<string>, Actions<string> {
    public dealershipName: string;
    public soldCars: number = 0;
    public modelsSold: Record<string, string> = {};

    constructor(dealershipName: string) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerID: string, model: string): void {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }

    showDetails(): void {
        console.log(`${this.dealershipName}:`);
        return Object.keys(this.modelsSold)
            .forEach(x => console.log(`${x} sold ${this.modelsSold[x]}`));
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());