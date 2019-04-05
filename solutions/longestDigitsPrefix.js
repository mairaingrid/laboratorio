function longestDigitsPrefix(inputString) {
    var temp = "";
    if (inputString.length == 0) return "";
    for(var i = 0;i < inputString.length;i++){
        if(inputString[i] > '9' || inputString[i] < '0') break;
        else temp += inputString[i];
    }
    return temp;
}

console.log(longestDigitsPrefix("123aa1"));
