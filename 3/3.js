/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = 0
  for (let i = 0; i < s.length -2; i++) {
    for (let j = i + 1; j < s.length -1; j++) {
      if (s[i] === s[j] && len < (j - i)) {
        len = j - i
        // return len
      }
    }
  }
  return len
};
console.log(lengthOfLongestSubstring("abcabcbb"));


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//   let maxLength = 0,
//       str = '';
//   for(let i = 0;i < s.length;i++) {
//       let idx = str.indexOf(s[i]);
//       str += s[i];
//       if (idx === -1) {
//           maxLength = maxLength < str.length ? str.length : maxLength;
//       } else {
//           str = str.slice(idx+1);
//       }
//   }
//   return maxLength;
// };
