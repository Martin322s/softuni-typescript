namespace FoodAndBeverages {
    export interface Delivery {
        newCustomer(customerName: string, visited: boolean): string | undefined,
        visitCustomer(customerName: string): string | undefined,
        showCustomers(): string | undefined
    }

    export type placesToVisitObject = {
        customerName: string,
        visited: boolean
    }
}