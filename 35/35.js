/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length,
      _result = len,
      left = 0,
      right = len - 1;
  while(left <= right) {
    let index = parseInt((left + right)/2) + left
    if(target <= nums[index]){
      _result = index
      right = index -1
    } else{
      left = index + 1
    }
  }
  return _result
};
console.log(searchInsert([1,3,5,6], 5));