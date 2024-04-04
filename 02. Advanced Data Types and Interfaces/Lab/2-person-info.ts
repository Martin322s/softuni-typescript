type Person = {
    firstName: string,
    lastName: string,
    age: number
};

function personInfo(firstName: string, lastName: string, ageAsText: string): Person {
    let age: number = Number(ageAsText);

    return {
        firstName,
        lastName,
        age
    };
}