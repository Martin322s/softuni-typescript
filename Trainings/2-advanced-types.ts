// Union type - variable which can be either this type or this exmp: string | number
let variable: string | number = 'Value';
variable = 12;

// Intersection type - combine two types in one
type Cat = {
    furColor: string;
    legsCount: number;
}

type Animal = {
    walking: () => void
}

let garry: Cat & Animal = { 
    furColor: 'Orange', 
    legsCount: 4, 
    walking: () => console.log('Move') 
};