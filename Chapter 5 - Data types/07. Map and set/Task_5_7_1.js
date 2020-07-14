function unique(arr){
    let set = new Set();

    for (let item of arr) {
        set.add(item);
    }

    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

/* The short version:

function unique(arr) {
  return Array.from(new Set(arr));
}

 */