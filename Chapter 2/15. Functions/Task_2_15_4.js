function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Enter a value for x: ");
let n = prompt("Enter a value for n: ");

if (n > 1)
    alert(pow(x, n));
else
    alert("The function only supports integers that are greater than 1")