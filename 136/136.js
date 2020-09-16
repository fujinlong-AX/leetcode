/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let a = 0, b = a + 1;
  while(nums[a] == nums[b]) {
    a += 2;
    b += 2
  }
  return nums[a]
};
console.log(singleNumber([2,2,1]));