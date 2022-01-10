const ftoc = function(f) {
  let c = (f - 32) * 5/9;
  return parseFloat(c.toFixed(1)); // it rounds and fix it to one decimal character
};

const ctof = function(c) {
  let f = c * 9/5 + 32;
  return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
