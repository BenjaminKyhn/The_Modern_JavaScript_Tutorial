let n = prompt("Enter a number for n: ", 10);

outer: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0)
            continue outer;
    }

    alert(i);
}