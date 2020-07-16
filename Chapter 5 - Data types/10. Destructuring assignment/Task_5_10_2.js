function topSalary(salaries){
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > max){
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));