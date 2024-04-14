export class Drink {
    public name: string;
    public price: number;
    public volume: number;

    constructor(name: string, price: number, volume: number) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }

    toString(): string {
        return `Name: ${this.name}, Price: $${this.price.toFixed(1)}, Volume: ${this.volume} ml`;
    }
}

export class VendingMachine {
    public buttonCapacity: number;
    public drinks: Drink[];

    constructor(buttonCapacity: number) {
        this.drinks = [];
        this.buttonCapacity = buttonCapacity;
    }

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        let drink: Drink | undefined = this.drinks.find((x: Drink): boolean => x.name === name);

        if (drink) {
            let index: number = this.drinks.indexOf(drink);
            this.drinks.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getLongest(): string | undefined {
        let drink: Drink | undefined = this.drinks[0];

        this.drinks.forEach((x: Drink) => {
            if (drink && x.volume >= drink.volume) {
                drink = x;
            }
        })

        return drink?.toString();
    }

    getCheapest(): string | undefined {
        let drink: Drink | undefined = this.drinks[0];

        this.drinks.forEach((x: Drink) => {
            if (drink && x.price <= drink.price) {
                drink = x;
            }
        })

        return drink?.toString();
    }

    buyDrink(name: string): string | undefined {
        let drink: Drink | undefined = this.drinks.find((x: Drink): boolean => x.name === name);
        return drink?.toString();
    }

    get getCount(): number {
        return this.drinks.length;
    }

    report(): void {
        console.log('Drinks available:');
        this.drinks.forEach((x: Drink): void => console.log(x.toString()));
    }
}