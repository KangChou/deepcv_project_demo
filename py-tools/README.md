

# 通过解码Unicode subscripts and superscripts打印指数幂

![image](https://user-images.githubusercontent.com/36963108/206609462-5c4ad59e-ad44-4627-8cfa-84a5dabd1300.png)


```python


# # 568 = 56+8*8*8
# x = 56+8**3
# endnum = 8
# y1 = 56
# y2 = endnum**3
# print(x,str(y1)+str(endnum))

def wonderful_decomposition(pows,steps):
    # 568 = 56 + 8 * 8 * 8
    for i in range(steps):
        for j in range(steps):
            y1 = i
            y2 = j**pows
            y_s = str(y1)+str(j)
            if int(y_s) == y1+y2:
                print("{} = {} + {}\u00b3".format(y_s,y1,j))

if __name__ == '__main__':

    # https://en.wikipedia.org/wiki/Unicode_subscripts_and_superscripts
    # 打印指数幂：https://kitchingroup.cheme.cmu.edu/blog/2014/02/02/Printing-unicode-characters-in-Python-strings/
    n1 = "x\u00b3"
    n2 = "x\u2074"
    n3 = "x\u2075""+5"
    print(n1,n2,n3)

    wonderful_decomposition(3, 4000)

```

生成结果：
```
x³ x⁴ x⁵+5
00 = 0 + 0³
01 = 0 + 1³
1010 = 10 + 10³
568 = 56 + 8³
809 = 80 + 9³
86044 = 860 + 44³
92045 = 920 + 45³
159054 = 1590 + 54³
168055 = 1680 + 55³

```
