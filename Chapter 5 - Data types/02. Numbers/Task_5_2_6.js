function randomInteger(min, max) {
    let number = min + Math.random() * (max + 1 - min);
    return Math.floor(number);
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));