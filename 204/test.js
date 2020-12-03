/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let p = 2
  let res = 0
  if (n == 0 || n == 1) return res
  for (let i = 2; i <= n; i++) {
    while(i == p) {
      if(i % p == 0) {
        p = 2
        return 
      }
      else {
        p++
      }
    }
    if (i == p) res++
  }
  return res
};
console.log(countPrimes(10));
