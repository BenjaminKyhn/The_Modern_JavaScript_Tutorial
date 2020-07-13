let arr = [5, 2, 1, -10, 8];

// Long solution
function sortDecreasing(a, b) {
    if (a < b)
        return 1;
    if (a === b)
        return 0;
    if (a > b)
        return -1;
}
arr.sort(sortDecreasing);
alert(arr);

// Short solution
arr.sort((a, b) => b - a);
alert(arr);