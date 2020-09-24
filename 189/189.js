/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
    // console.log(nums);
  }
  return nums
};
console.log(rotate([5,6,7,1,2,3,4], 3));
// rotate([5,6,7,1,2,3,4], 3)