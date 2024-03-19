function fruit(fruitType: string, weightGr: number, price: number): void {
    let weightKg: number = weightGr / 1000;
    let totalPrice: number = weightKg * price;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`);
}