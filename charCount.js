function charCount(str){
    var result = {}
    MaxChar = '';
    MaxCount = 0;

    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toUpperCase()
            result[char] = ++result[char] || 1;
}
    if(result[char]> MaxCount){
        MaxChar = char
        MaxCount = result[char]
}
}
console.log(result)
console.log("a letra de maior ocorrência é " + MaxChar+ " e ela aparece " + MaxCount + " vezes")
return result
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if( !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) // lower alpha (a-z)
        {
            return false;
        }
        return true;
}

charCount("HEY WHATS UP")

