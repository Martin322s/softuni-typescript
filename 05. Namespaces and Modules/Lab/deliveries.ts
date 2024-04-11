/// <reference path="2-deliveries.ts" />
import deliveries = FoodAndBeverages;

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: FoodAndBeverages.placesToVisitObject[]

    constructor(x: FoodAndBeverages.placesToVisitObject[]) {
        this.placesToVisit = x
    }

    newCustomer(customerName: string, visited?: boolean) {
        let hasVisited: boolean = false

        if(visited === true || visited === false) {
            hasVisited = visited
        }

        let includes: boolean = false

        for(const el of this.placesToVisit) {
            if(el.customerName === customerName) {
                includes = true
                return `${customerName} is already a customer of yours!`
            }
        }

        if(includes === false) {
            this.placesToVisit.push({customerName, visited: hasVisited})

            return `${customerName} just became your client.`
        }
    }

    visitCustomer(customerName: string) {
        let includes: boolean = false

        for (const el of this.placesToVisit) {
            if(el.customerName === customerName) {
                includes = true
                el.visited = true
            }
        }
        
        if (includes === false) {
            return `${customerName} is not your customer.`
        }
    }

    showCustomers(): string {
        let string: string = ''

        for(const el of this.placesToVisit) {
            string += `\n${el.customerName} -> ${el.visited}`
        }

        return string.trim()
    }
}

let courier = new Courier([{customerName: 'DHL',visited: false}]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers())