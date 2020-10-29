/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  function increase(a, b) {
    return a - b
  }
  nums1.push(...nums2)
  nums1.sort(increase)
  let len =  nums1.length
  let num = 0
  if (len % 2 == 1) {
    num = nums1[(len - 1) / 2].toFixed(5)
    return num
  }
  if (len % 2 == 0) {
    num = ((nums1[(len / 2) - 1] + nums1[len / 2]) / 2).toFixed(5)
    return num
  }
};
console.log(findMedianSortedArrays([1,2],[3,4]));