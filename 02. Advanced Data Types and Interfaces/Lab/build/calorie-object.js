"use strict";
function calorieObject(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let value = Number(input[i + 1]);
        if (obj[name]) {
            obj[name] = obj[name] + value;
        }
        else {
            obj[name] = value;
        }
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52', 'Rise', '3']);
