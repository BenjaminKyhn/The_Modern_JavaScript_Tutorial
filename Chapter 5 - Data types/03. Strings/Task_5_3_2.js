function checkSpam(text){
    if (text.toLowerCase().includes("xxx") || text.toLowerCase().includes("viagra")){
        return true;
    }

    else return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );