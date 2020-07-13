function getAverageAge(users){
    let sum = 0;

    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }

    return sum / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

/* Alternative solution from the tutorial:

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

 */