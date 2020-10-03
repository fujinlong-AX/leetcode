// 归并排序: [1, 3, 2, 6, 9, 4, 5, 7]
const merge_sort = function (arr) {
  if (arr.length == 1) {
    return arr // 出口
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    merge_sort(left)
    merge_sort(right)
  }
}