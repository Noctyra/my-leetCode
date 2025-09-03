/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (myMap.has(difference)) {
        console.log(myMap.get(difference));
      return [i, myMap.get(difference)];
    }
    myMap.set(i, nums[i]);
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 4));
