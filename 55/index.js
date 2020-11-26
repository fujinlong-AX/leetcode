/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let num = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if ((nums[i] + i) >= num) {
      num = i
    }
  }
  return num == 0
};
console.log(canJump([3,2,1,0,4]));