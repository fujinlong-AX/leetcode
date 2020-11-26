var merge = function (arr1, arr2) {
  let arr = []
  while (arr1.length && arr2.length) {
    while (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift())
    }
    while (arr2[0] <= arr1[0]) {
      arr.push(arr2.shift())
    }
  }
  arr = arr.concat(arr1, arr2)
  return arr
}

var mersort = function (arr) {
  if (arr.length == 1) return arr
  let len = Math.floor(arr.length / 2)
  let left = arr.slice(0, len)
  let right = arr.slice(len)
  let leftPart = mersort(left)
  let rightPart = mersort(right)
  return merge(leftPart, rightPart)
}
console.log(mersort([-1, -3, -8, 9, -99, 1]))