const leapYears = (year) => {
    let itIS = false;
    if (year % 100 !== 0 && year % 4 === 0) {
        itIS = true;
    } else if (year % 400 === 0) {
        itIS = true;
    }
    return itIS;
};

// Do not edit below this line
module.exports = leapYears;
