/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let sum1 = 0,
  sum2 = 0
  for (let i = 0; i < nums.length; i+=2) {
    sum1 = sum1 + nums[i]
  }
  for (let i = 1; i < nums.length; i+=2) {
    sum2 = sum2 + nums[i]
  }
  if (sum1 > sum2) return sum1
  return sum2
};