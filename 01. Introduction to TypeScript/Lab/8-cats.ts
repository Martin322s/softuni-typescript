function cats(arr: string[]): void {
    class Cat {
        public name: string;
        public age: string;
        constructor(name: string, age: string) {
            this.name = name;
            this.age = age;
        }

        public meow(): void {
            console.log(`${this.name}, age ${this.age} says Meow`);   
        }
    }

    let catsResult: Cat[] = [];

    for (let cat of arr) {
        let [name, age] = cat.split(' ');
        let newCat: Cat = new Cat(name, age)
        catsResult.push(newCat);
    }

    catsResult.forEach((cat: Cat) => cat.meow());
}