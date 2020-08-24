/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
  let arr = s.trim().split(' ')
  let len = arr.length
  return arr[len - 1].length
};
console.log(lengthOfLastWord("a "));


// let s = 'a'
// let arr = s.split(' ')
// console.log(arr[0].length);
