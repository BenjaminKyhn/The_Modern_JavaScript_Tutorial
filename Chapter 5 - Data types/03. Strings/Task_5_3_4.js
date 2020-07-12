function extractCurrencyValue(text){
    if (text.charAt(0) === "$")
        return +text.slice(1);
}

alert(extractCurrencyValue('$120') === 120);