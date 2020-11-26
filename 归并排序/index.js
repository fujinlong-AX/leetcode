
  function merge(arr1, arr2) {
    let arr = [];
    while (arr1.length && arr2.length) {
      while(arr1[0] <= arr2[0]) {
        arr.push(arr1.shift())
      }
      while(arr2[0] <= arr1[0]) {
        arr.push(arr2.shift())
      }
    }
    // arr.push(...arr1.concat(arr2));
    arr = arr.concat(arr1, arr2)
    return arr;
  }
  function mersort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let leftPart = mersort(left);
    let rightPart = mersort(right);
    return merge(leftPart, rightPart)
  }
  console.log(merge([-1, -2, 9], [-3, 1, 8]))
  console.log(mersort([-1, -3, -8, 9, -99, 1]))
