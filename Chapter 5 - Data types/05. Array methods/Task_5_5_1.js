function camelize(str){
    let camelCaseString = str.split("-").map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
    return camelCaseString;
}

alert(camelize("background-colour"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));