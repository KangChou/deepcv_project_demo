

# 实体标注

实体识别三种常见的序列标注方法如下：
```
BIO：标识实体的开始，中间部分和非实体部分
BMES：增加S单个实体情况的标注
BIOSE：增加E实体的结束标识
```
1、BIO-三位序列标注法(B-begin，I-inside，O-outside)
```
B-X代表实体X的开头
I-X代表实体X的中间或结尾
O代表不属于任何类型的
```
2、BMES-四位序列标注法(B-begin，M-middle，E-end，S-single)
```
B表示一个词的词首位值
M表示一个词的中间位置
E表示一个词的末尾位置
S表示一个单独的字词
```
3、BIOES-四位序列标注法(B-begin，I-inside，O-outside，E-end，S-single)
```
B表示开始
I表示内部
O表示非实体
E表示实体尾部
S表示改词本身就是一个实体
```

https://juejin.cn/post/7011722717242064932

https://github.com/broccolik/BIO-sequence-label

https://github.com/oohx/bert_sequence_label

# 实体识别

https://github.com/luopeixiang/named_entity_recognition

https://github.com/buppt/ChineseNER

https://github.com/Determined22/zh-NER-TF

https://github.com/xuanzebi/BERT-CH-NER

https://github.com/CLUEbenchmark/CLUENER2020

https://github.com/z814081807/DeepNER

https://github.com/baidu/lac

https://github.com/hankcs/HanLP
