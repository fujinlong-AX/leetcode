/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   let Len = s.length
//   let map = {
//     sl: '(',
//     sr: ')',
//     ml: '[',
//     mr: ']',
//     ll: '{',
//     lr: '}'
//   }
//   if(Len == 0){
//     return true
//   }
//   if(Len % 2 == 1){
//     return false
//   }
//   for(let i = 0; i < Len; i+=2){
//     if(s[i * 2] == map.sr || s[i * 2] == map.mr || s[i * 2] == map.lr) {
//       return false
//     }
//     if((s[i] == map.sl && s[i + 1] == map.sr) || (s[i] == map.sl && s[Len - i -1] == map.sr)){
//       return true
//     }else{
//       return false
//     }
//     if((s[i] == map.ml && s[i + 1] == map.mr) || (s[i] == map.ml && s[Len - i -1] == map.mr)){
//       return true
//     }
//     else{
//       return false
//     }
//     if((s[i] == map.ll && s[i + 1] == map.lr) || (s[i] == map.ll && s[Len - i -1] == map.lr)){
//       return true
//     }else{
//       return false
//     }
//   }
// };
// console.log(isValid("{[}]"));{[]}



var isValid = function(s) {
  let valid = true
  let arr = []
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for(let i in s){
    let v = s[i]
    if(['(','[','{'].indexOf(v) > -1){
      arr.push(v)
    }else{
      let a = arr.pop()
      if(v !== map[a]){
        return false
      }
    }
  }
  if(arr.length > 0){
    return false
  }else{
    return  valid
  }
}
console.log(isValid("()"));