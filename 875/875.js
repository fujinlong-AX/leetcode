// //  尝试一下   暴力   再优化
// /**
//  * @param {number[]} piles
//  * @param {number} H
//  * @return {number}
//  */
// var minEatingSpeed = function (piles, H) {
//   let max = Math.max(...piles)
//   let num = max
//   for (let i = 0; i < num; i++) {
//     let hour = 0
//     for (let i = 0; i < piles.length; i++) {
//       hour += Math.ceil(piles[i] / max)
//     }
//     if (hour <= H) {
//       max--
//     } else {
//       return ++max
//     }
//   }
// }

// console.log(minEatingSpeed([30,11,23,4,20], 6));
var cal = function (piles, H, high, low, mid) {//   找出吃完香蕉的时间等于H时的速度
  let time = 0   
  if((high-low)==1){
      return high
  }
  mid = Math.ceil((low + high) / 2)
  for (let i = 0; i < piles.length; i++) {
      time += Math.ceil(piles[i] / mid)
  }
  
  if (time < H) {
      high = mid
  }
  else if (time > H) {
      low = mid
  }
  else return mid
  return cal(piles, H, high, low, mid)
}

var c = function(piles,H,spd){   // 找出等于H时时的最小速度
  let time = 0
  for (let j = 0; j < piles.length; j++) {
      time += Math.ceil(piles[j] / (spd-1))
  } 
  if(!(time==H)) return spd
  else {
  spd-=1;
  return c(piles,H,spd)
  }
}

var minEatingSpeed = function (piles, H) { 
  let high = Math.max(...piles),
      low = 0,
      spd = Math.ceil(cal(piles, H, high, low));
   return c(piles,H,spd)   
};

