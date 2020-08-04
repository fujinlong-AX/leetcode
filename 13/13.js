/** 
  * @param {string} s
  * @return {number}
*/
var romanToInt = function (s) {
  let sum = 0,
      arr = [],
      map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      }
  for(let i = 0; i < s.length; i++){
    let num = map[s[i]]
    sum += num
    arr.push(num)
    if(i > 0 && arr[i] > arr[i -1]){
      sum -= 2 * arr[i - 1]
    }
  }
  return sum
}
console.log(romanToInt("MCMXCIV"));