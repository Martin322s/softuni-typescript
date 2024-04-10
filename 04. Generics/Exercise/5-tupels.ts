function checkStatus(): [boolean, string] {
    return [true, "Success"];
}

let [status2, message] = checkStatus();
console.log(status2);
console.log(message);