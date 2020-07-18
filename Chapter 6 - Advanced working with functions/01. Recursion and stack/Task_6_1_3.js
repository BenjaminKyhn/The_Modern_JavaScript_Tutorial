// Recursive version is very slow
function fib(n) {
    if (n <= 1)
        return n;
    else
        return fib(n - 1) + fib(n - 2);
}

// Faster method
function fibOptimized(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fibOptimized(77))
alert(fib(77)); // 5527939700884757