"use strict";
const removeFromArray = function(firstArray,...toRemove) {
  let array = [...firstArray];
  for (let i = 0; i < firstArray.length; i++) {
      if (array.includes(toRemove[i])) {
          array.splice(array.indexOf(toRemove[i]), 1)
      }    
  }
  return array;
}
// Do not edit below this line
module.exports = removeFromArray;
