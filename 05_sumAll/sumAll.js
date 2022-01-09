'use strict';
const sumAll = (start, end) => {
    let sum = 0; // it will store the result
		
    if(typeof start === 'number' && typeof end === 'number'){ // only if the inputs are numbers
        if(start > end) { // it will reset the potition
            let reset = end;
            end = start;
            start = reset;
        }
        if(start < 0 || end < 0) { // if there are negative numbers will be an ERROR
            return 'ERROR';
        }
            for(let i = start; i <= end; ++i){ // trough this loop will sum all
                sum += i;
            }
    } else {    // if anithing else will be an ERROR
        return 'ERROR'; 
    }
    
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
