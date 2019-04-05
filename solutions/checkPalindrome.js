function checkPalindrome(aux) {
   low = aux.toLowerCase();
   regExp = low.replace(/[\W_]/g, "");
   s = regExp.split("");
   r = s.reverse();
   j = r.join("");
   if (regExp == j)
     {return true;}
   else {return false;}
}
console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
