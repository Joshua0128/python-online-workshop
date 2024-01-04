---
title: "探索 Python 的內建資料結構打開資料操作的大門"
author: "wei"
tags: ['Python', '內建資料結構', 'type()函式', '列表', '字典', '集合', '元組']
description: "理解 Python 的內建資料結構,為資料操作打開大門。"
hide_table_of_contents: false
sidebar_position: 4
---

# 探索 Python 的內建資料結構打開資料操作的大門

:::tip
理解 Python 的內建資料結構,為資料操作打開大門。
:::

# Why

在 Python 中,資料結構是一種組織和儲存資料的方式,它決定了我們如何訪問和操作這些資料。理解 Python 的內建資料結構,可以幫助我們更有效地處理資料。

# What

- Python 的內建資料結構包括列表(list)、字典(dict)、集合(set)和元組(tuple)等。

- 不同的資料結構有不同的特性和適用場景。

- 我們可以使用 type() 函式來查看資料結構的型別。

# 比喻

資料結構就像是儲物櫃,不同的櫃子適合儲存不同的物品。例如,書櫃適合儲存書籍,衣櫃適合儲存衣物,冰箱適合儲存食物。同樣的,不同的資料結構也適合處理不同的資料和問題。

# How

以下是一個查看內建資料結構型別的範例

```python
# 查看列表的型別
print(type([1, 2, 3])) # 輸出class 'list'

# 查看字典的型別
print(type({'name' 'John', 'age' 30})) # 輸出class 'dict'

# 查看集合的型別
print(type({1, 2, 3})) # 輸出class 'set'

# 查看元組的型別
print(type((1, 2, 3))) # 輸出class 'tuple'
```


在這個範例中,我們使用 type() 函式來查看 Python 的內建資料結構的型別。

