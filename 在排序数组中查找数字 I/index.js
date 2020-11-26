/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let num = 0
  for(let i = 0; i < nums.length; i++){
    if (nums[i] == target) {
      num ++
    }
  }
  return num
};
console.log(search([5,7,7,8,8,10], 8));