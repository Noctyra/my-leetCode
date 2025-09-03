/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let result = n - 1;
  return function () {
    result++;
    return result;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
