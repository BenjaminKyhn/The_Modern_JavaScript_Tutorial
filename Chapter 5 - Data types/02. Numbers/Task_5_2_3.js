function readNumber(){
    let number;

    do {
        number = prompt("Enter a number: ", "");
    } while (!isFinite(number));

    if (number === null || number === "")
        return null;

    return +number;
}

alert(`Read: ${readNumber()}`);