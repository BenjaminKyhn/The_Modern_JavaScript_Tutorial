function sumTo(n){
    if (n == 1)
        return n;
    else
        return n + sumTo(n - 1);
}
// Fastest
function arithmeticProgressionFormula(n) {
    return n * (n + 1) / 2;
}

alert(sumTo(1));
alert(sumTo(2));
alert(sumTo(3));
alert(sumTo(4));
alert(sumTo(100));