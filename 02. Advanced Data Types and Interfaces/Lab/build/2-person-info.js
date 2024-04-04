"use strict";
function personInfo(firstName, lastName, ageAsText) {
    let age = Number(ageAsText);
    return {
        firstName,
        lastName,
        age
    };
}
console.log(personInfo('Peter', 'Pan', '20'));