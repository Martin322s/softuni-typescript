function timeToWalk(steps: number, footPrint: number, speedKmH: number): void {
    let distance: number = steps * footPrint;
    let speed: number = speedKmH * 1000 / 3600;
    let rest: number = Math.floor(distance / 500) * 60;
    let time: number = (distance / speed) + rest;

    let hours: string = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes: string = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds: string = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}