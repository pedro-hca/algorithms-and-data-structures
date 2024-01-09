/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  for (i = 0; i < Math.floor(nums.length / 2); i++) {
    let tempNum = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = tempNum;
  }
  for (i = 0; i < Math.floor((nums.length - k) / 2); i++) {
    let tempNum = nums[i + k];
    nums[i + k] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = tempNum;
  }
  for (i = 0; i < Math.floor(k / 2); i++) {
    let tempNum = nums[i];
    nums[i] = nums[k - 1 - i];
    nums[k - 1 - i] = tempNum;
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14], 7));
console.log(rotate([1,2,3,4,5,6,7], 2))
console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([1,2,3,4,5,6,7], 4))
console.log(rotate([-1,-100,3,99], 2))
console.log(rotate([-1,], 2))
