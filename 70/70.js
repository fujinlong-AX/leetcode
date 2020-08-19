// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function(n) {
//   let arr = []
//    arr[0] = 0
//    arr[1] = 1
//    arr[2] = 2
//    for(let i = 3;i <= n;i++){
//     arr[i] = arr[i-1] + arr[i-2]
//    }
//    return arr[n]
// };
// console.log(climbStairs(5));


// 斐波那契思想
// var climbStairs = function(n) {
//   if(n == 1){
//     return 1
//   }else if(n ==2){
//     return 2
//   }else{
//     return climbStairs(n-1) + climbStairs(n-2)
//   }
// };
// console.log(climbStairs(5));