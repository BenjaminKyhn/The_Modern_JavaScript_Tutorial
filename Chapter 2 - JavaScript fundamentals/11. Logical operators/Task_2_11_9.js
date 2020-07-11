let login = prompt("Enter a login: ");

if (login == "Admin"){
    let password = prompt("Enter a password: ");

    if (password == "TheMaster")
        alert("Welcome!");
    else if (password == "" ||password == null)
        alert("Canceled");
    else
        alert("Wrong password");
}
else if (login == "" ||login == null){
    alert("Canceled");
}
else
    alert("I don't know you");