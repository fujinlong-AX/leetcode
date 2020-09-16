/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => {
  return a - b
})
// console.log(nums)
let a = 0, b = a + 1, c = b + 1;
while(nums[a] == nums[b] && nums[b] == nums[c]) {
  // console.log('11111');
  a += 3;
  b += 3;
  c += 3
}
return nums[a]
};
console.log(singleNumber([2,2,3,2]));
