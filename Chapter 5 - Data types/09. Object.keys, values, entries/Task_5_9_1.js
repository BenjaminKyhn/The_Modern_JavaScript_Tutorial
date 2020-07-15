function sumSalaries(salaries){
    let array = Object.values(salaries);
    let sum = 0;
    for (let salary of array) {
        sum += salary;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650