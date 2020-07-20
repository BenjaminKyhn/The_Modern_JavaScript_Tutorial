// setInterval function
function printNumbers(from, to){
    let current = from;

    let timerId = setInterval(function () {
        if (current <= to){
            alert(current++);
        }
    }, 1000);
}

// Nested setTimeout function
function printNumbers2(from, to){
    let current = from;

    setTimeout(function print() {
        if (current <= to){
            alert(current++);
            setTimeout(print, 1000);
        }
    }, 1000);
}

// printNumbers(5, 10);

printNumbers2(100, 105);