// 2619. Array Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (!this.length) return -1;
  return this.at(this.length - 1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

console.log([1, 2, 3].last());
console.log([null].last());
console.log([1, 2, 3].last());
