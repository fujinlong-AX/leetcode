[20. 有效的括号(https://leetcode-cn.com/problems/valid-parentheses/)

[azl](https://github.com/azl397985856/leetcode/blob/master/problems/20.valid-parentheses.md)

## 原题分析
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

把所有左括号加进一个数组，然后每当遇到右括号就删除数组末尾第一个字符，要是这个字符和被删除的字符所对应的左括号不相等则返回false
遍历完整个字符串之后，要是创建的数组长度不为0的话，则返回false。