/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums = nums.sort((a, b) => {
    return a -b
  })
  let n = 1
  let i = 0;
  let j = i + 1;
  while (n < Math.ceil(nums.length / 2)) {
    if (nums[i] == nums[j]) {
      n++
    }
    i++;
    j++
  }
  return nums[i]
};
console.log(majorityElement([3,3,4]));