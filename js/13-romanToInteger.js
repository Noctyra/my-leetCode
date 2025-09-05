/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    let total = 0,
      prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
      const numVal = values[s[i]];

      total += numVal >= prev ? numVal : -numVal;

        prev = numVal;
    }

    return total;
};

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

console.log(romanToInt("VI"));
