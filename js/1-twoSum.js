/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (myMap.has(diff)) {
      return [i, myMap.get(diff)];
    }
    myMap.set(nums[i], i);
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 9));
