/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums.indexOf(nums[i]) !== i) {
      return true
    }
  } 
  return false
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));