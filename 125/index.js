var aaa = "666kk88kk99"
var bbb = /[A-Z][0-9][a-z]/g       //  表达式不是字符串，不能使用"引号括起来。
var ccc = aaa.match(bbb)
console.log(ccc)     //["6", "6", "6", "8", "8", "9", "9"]