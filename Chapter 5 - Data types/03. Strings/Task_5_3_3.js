function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + "\u2026";

    return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));