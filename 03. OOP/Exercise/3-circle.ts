class Circle {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public get diameter(): number {
        return this.radius * 2;
    }

    public set diameter(value) {
        this.radius = value / 2;
    }

    public get area(): number {
        return Math.PI * (this.radius ** 2);
    }
}
