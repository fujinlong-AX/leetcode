/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1Arr = version1.split('.')
  let v2Arr = version2.split('.')
  let len = Math.max(v1Arr.length, v2Arr.length)
  for (let i = 0; i < len; i++) {
    let v1Num = Number(v1Arr[i] ? v1Arr[i] : 0) 
    let v2Num = Number(v2Arr[i] ? v2Arr[i] : 0) 
    if (v1Num > v2Num) return 1
    if (v1Num < v2Num) return -1
  };
  return 0
}
console.log(compareVersion('0.1', '1.1'));