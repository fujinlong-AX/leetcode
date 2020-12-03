var sortArray = function(nums) {
  if (nums.length <= 1) return nums
  let left = [], right = []
  let len = Math.floor(nums.length / 2)
  let base = nums.split(len, 1)[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < base) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).contact([base], sortArray(right)) 
  // return [...left, ...base, ...right]
}
console.log();