/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let alp = {
    0: 'Z',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    
  }
  let s = n
  let str = ''
  for (let i = 0; i < 10000; i++) {
    let de = s % 26
    // console.log(de);
    s = parseInt(s / 26) 
    str = alp[de] + str
    // console.log(str);
    if (s = 1 && n > 26) {
      return 'A' + str
    }
    if (s < 1 ) {
      return str
    }
  }
};
// convertToTitle(827)
console.log(convertToTitle(27));
// /**
//  * @param {number} n
//  * @return {string}
//  */
// const map = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G',
//   'H', 'I', 'J', 'K', 'L', 'M', 'N',
//   'O', 'P', 'Q', 'R', 'S', 'T',
//   'U', 'V', 'W', 'X', 'Y', 'Z'
// ]
// var convertToTitle = function(n) {
//   let result = ''
//   while (n > 0) {
//       n--
//       result = map[(n%26)] + result;
//       n = Math.floor(n / 26);
//   }
//   return result;
// };

// console.log(convertToTitle(827));