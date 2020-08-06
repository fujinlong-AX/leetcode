/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   return Array.from(new Set(nums))
// }
// console.log(removeDuplicates([1,1,2]));

var removeDuplicates = function(nums) {
  for(let i = nums.length - 1; i >= 0 ; i--) {
    for(let j =i - 1; j >= 0 ; j--)
      if(nums[i] == nums[j]){
        nums.splice(j, 1)
        console.log(nums.length);
      }
  }
  // console.log(nums);
  return nums.length
}
console.log(removeDuplicates([1,2,1,2,3]));