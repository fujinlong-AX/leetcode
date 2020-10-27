/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // function sortNum() {
  //   return a - b
  // }
  let arr = nums.sort((a, b) => a - b)
  let len = arr.length - k
  return arr[len]
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));