/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let num = n
  let arr = new Array()
  while (n > 1) {
    n--
    if (num % n == 0) {
      arr.push(n)
    }
  }
  // return arr.length + 1
  return arr
};
console.log(countPrimes(10));