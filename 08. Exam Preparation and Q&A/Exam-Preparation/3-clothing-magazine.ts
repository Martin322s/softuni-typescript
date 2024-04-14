export class Cloth {
    color: string;
    size: number;
    type: string;

    constructor(color: string, size: number, type: string) {
        this.color = color;
        this.size = size;
        this.type = type;
    }

    toString(): string {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}

export class Magazine {
    type: string;
    capacity: number
    clothes: Cloth[]

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth) {
        this.clothes.push(cloth);
    }

    removeCloth(color: string): boolean {
        if (this.clothes.some(x => x.color === color)) {
            let cloth = this.clothes.find(x => x.color === color);
            let index = this.clothes.indexOf(cloth);
            this.clothes.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getSmallestCloth(): Cloth {
        return this.clothes.sort((a, b) => a.size - b.size)[0];
    }

    getCloth(color: string): Cloth {
        return this.clothes.filter(x => x.color === color)[0];
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): void {
        console.log(`${this.type} magazine contains:`);
        
        for (let product of this.clothes) {
            console.log(`Product: ${product.type} with size ${product.size}, color ${product.color}`); 
        }
    }
}