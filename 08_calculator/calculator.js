const add = function(n1,n2) {
  return n1 + n2;  // ok
};

const subtract = function(n1,n2) {
	return n1 - n2;  // ok
};

const sum = function(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;   // ok
};

const multiply = function(n) {
  let total = 1; // i had struggle it bust be 1 besides 0
  for (let i = 0; i < n.length; i++) {
    total *= n[i];
  }
  return total; // ok
};

const power = function(n1,n2) {
	return n1 ** n2;    // ok
};

const factorial = (n) => {
  if (n === 0 || n === 1) return 1;

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;   // ok
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
