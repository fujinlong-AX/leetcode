/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = 0;
  for (item of nums) {
      if (item !== val) {
          // nums[len] = item;
          len ++;
      }
  }
  return  len;
  
};
console.log(removeElement([2,1,2,2,3,0,4,2],2));
