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

// literal type
type StatusCodes = 200 | 301 | 401 | 404;
let statusResult: "success" | "error" = 'success';
let statusCode: StatusCodes = 200;

// simple type alias
type StatusCode = number;
let statCode: StatusCode = 200;

// object type alias
type User = {
    name: string,
    [age: number]: number
};

let user: User = { name: 'Martin', 1: 22 };

// keyof usage
type UserKeys = keyof User;

let userKeys: UserKeys = 22;

// mapped types
type Optional<T> = { [K in keyof T]?: T[K] };

type Point = {
    x: number,
    y: number
};

let point: Optional<Point> = { x: 1, y: 2 };

// recursive types
type TreeNode = {
    left?: TreeNode,
    right?: TreeNode,
    value: number
}