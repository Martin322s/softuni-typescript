function tickets(tickets: string[], criteria: string) {
    let result = [];

    class Ticket {
        public destination: string;
        public price: number;
        public status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let ticket of tickets) {
        let [destination, priceAsStr, status] = ticket.split('|');
        let price = Number(priceAsStr);
        result.push(new Ticket(destination, price, status));
    }

    result.sort((a: Ticket, b: Ticket) => {
        if (criteria === "price") {
            return a[criteria] - b[criteria];
        } else if (criteria === "destination") {
            return (a[criteria as keyof Ticket] as string).localeCompare(b[criteria as keyof Ticket] as string);
        } else {
            return (a[criteria as keyof Ticket] as string).localeCompare(b[criteria as keyof Ticket] as string);
        }
    });

    return result;
}
