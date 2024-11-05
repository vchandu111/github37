let numsArr = [1, 3, 4, 5, 7, 9];

console.log(numsArr);

console.log(numsArr.__proto__);

console.log(Array.prototype == numsArr.__proto__);

console.log(Object.prototype);

console.log(numsArr.__proto__.__proto__);

// Add a method to prototype => any array => last => return the last element from the array

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log(numsArr.last());

let arr = [12, 32, 34, 5, 67, 89, 777];

console.log(arr.last());

String.prototype.caps = function () {
  return this.toUpperCase();
};

let str = "masai";

console.log(str.caps());
