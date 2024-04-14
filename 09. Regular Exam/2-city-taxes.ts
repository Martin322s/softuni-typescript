type City = {
    cityName: string,
    population: number,
    treasury: number,
    taxRate: number | undefined,
    collectTaxes: () => void,
    applyGrowth: (percentage: number) => void,
    applyRecession: (percentage: number) => void
}

function cityTaxes(cityName: string, population: number, treasury: number): City {
    let obj: City = {
        cityName,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function (): void {
            if (this.taxRate) {
                this.treasury = Math.floor(this.treasury + (this.population * this.taxRate));
            }
        },
        applyGrowth: function (percentage: number): void {
            this.population = Math.floor(this.population + (this.population * (percentage / 100)));
        },
        applyRecession: function (percentage: number): void {
            this.treasury = Math.floor(this.treasury - (this.treasury * (percentage / 100)));
        }
    };

    return obj;
}
