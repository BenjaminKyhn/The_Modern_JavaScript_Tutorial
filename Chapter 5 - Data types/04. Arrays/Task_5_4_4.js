function sumInput(){
    let numbers = [];
    while (true){
        let input = prompt("Enter a number: ", "");

        if (input === "" || input === null || !isFinite(input))
            break;

        numbers.push(+input);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

alert(sumInput());