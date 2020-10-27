/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums.indexOf(nums[i]) !== i && ((i - nums.indexOf(nums[i])) <= k)) {
      return true
    }
  } 
  return false
};
console.log(containsNearbyDuplicate([1,0,1,1], 1));
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function(nums, k) {
//   const set = new Set();
//   for(let i = 0; i < nums.length; i++) {
//       if(set.has(nums[i])) {
//           return true;
//       }
//       set.add(nums[i]);
//       if(set.size > k) {
//           set.delete(nums[i - k]);
//       }
//   }
//   return false;
// };