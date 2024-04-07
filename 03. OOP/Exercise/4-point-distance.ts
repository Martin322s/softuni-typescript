type PointType = {
    x: number, 
    y: number
};

class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static distance(p1: PointType, p2: PointType): number {
        let pointOne = Math.abs(p1.x - p2.x);
        let pointTwo = Math.abs(p1.y - p2.y);
        return Math.sqrt(pointOne ** 2 + pointTwo ** 2);
    }
};