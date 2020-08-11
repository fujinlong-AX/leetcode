/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let strIdx = 0
  if(needle == ''){
    return 0
  }
  for(let i = 0; i < haystack.length; i++){
    let len = needle.length
    if(haystack[i] == needle[0]) {
       if(haystack.slice(i, i + len) == needle){
        strIdx = needle
        return i
        
       }
    }
  }
  return strIdx.length > 0 ? i : -1
};
console.log(strStr("hello", "ll"));