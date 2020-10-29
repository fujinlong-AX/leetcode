/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0,
      str = '';
  for(let i = 0;i < s.length;i++) {
      let idx = str.indexOf(s[i]);
      str += s[i];
      if (idx === -1) {
          maxLength = maxLength < str.length ? str.length : maxLength;
      } else {
          str = str.slice(idx+1);
      }
  }
  return maxLength;
};