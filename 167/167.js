/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1
    let number1 = numbers.slice(i, j)
    let number2 = target - number1
    let index1 = i + 1
    for (let k = index1; k < numbers.length; k++) {
      if (numbers[k] === number2) {
        let index2 = k + 1
        return [index1, index2]
      }
    }
  }
};
console.log(twoSum([0,0,3,4],0));