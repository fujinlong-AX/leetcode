[13. 罗马数字转整数](https://leetcode-cn.com/problems/roman-to-integer/)
[画手大鹏](https://leetcode-cn.com/problems/roman-to-integer/solution/hua-jie-suan-fa-13-luo-ma-shu-zi-zhuan-zheng-shu-b/)

## 原题分析
  罗马数字字符和数值分别对应如下:
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

  我们把罗马数字字符全部转译成对应的数值，然后全部加起来，再去判断其中的特殊情况修改总值。
