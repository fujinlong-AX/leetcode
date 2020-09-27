/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1
  let b = 2
  let temp = 0
  if (n == 1) {
    return a
  }
  if (n == 2) {
    return b
  }
  for (let i = 3; i <= n; i++) {
     temp= a + b
    a = b
    b = temp
  };
  return temp
}

console.log(climbStairs(4))