function factorial(n) {
    if (n == 1)
        return n;
    else
        return n * factorial(n - 1);
}

alert(factorial(5)); // 120