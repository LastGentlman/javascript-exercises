const repeatString = (str, int) => {
    if(int < 0) {
        return 'ERROR';
    } else {
        return str.repeat(int);
    }
}

// Do not edit below this line
module.exports = repeatString;
