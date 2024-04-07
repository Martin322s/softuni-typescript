class Rectangle {
    public width: number;
    public height: number;
    public color: string;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(): number {
        return this.width * this.height;
    }
};