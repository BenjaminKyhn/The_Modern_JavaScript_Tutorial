function printListLoop(list){
    let tmp = list;

    while (tmp){
        alert(tmp.value);
        tmp = tmp.next;
    }
}

function printListRecursive(list){
    alert(list.value);

    if (list.next)
        printListRecursive(list.next);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printListLoop(list);
printListRecursive(list);