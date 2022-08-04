const palindromes = function (str, ignoreSpecialChars=true) {
    if(typeof str !== 'string' || str.length === 0) throw new Error('Invalid Input')

  function cleanStr(str) {
    str = str.toLowerCase()
    const validDigits = "pyfgcrlaoeuidhtnsqjkxbmwvz"
    let newStr = ""
        for(let char of str) {
            if(validDigits.indexOf(char) > -1) newStr += char
        }

      return newStr;
  }

  str = ignoreSpecialChars ? cleanStr(str) : null

  //loop only halfway through the string as we are only comparing 1st half to 2nd half
 for (let i = 0; i < str.length / 2; i++) {
      //return false if any non-match chars are found. (we're comparing lowercase to lowercase here)
     if (str[i] !== str[str.length - 1 - i]) return false;
}

  //if loop finishes, that means it is a palindrome. So we return true
return true;
};

// Do not edit below this line
module.exports = palindromes;
