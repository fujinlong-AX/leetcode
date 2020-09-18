/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let mul = 1
  for (let i = n; n > 0; i--) {
    mul = mul * n
    if (n == 1) return mul
  }
  let preLen = mul.join().length
  let backLen = Number(mul.split().reserve().join()).join().length
  return preLen - backLen
};
console.log(trailingZeroes(2));