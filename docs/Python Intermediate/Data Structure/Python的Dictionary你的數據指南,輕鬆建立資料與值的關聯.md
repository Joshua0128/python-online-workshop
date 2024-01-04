---
title: "Python的Dictionary你的數據指南,輕鬆建立資料與值的關聯"
author: "wei"
tags: ['Python', 'Dictionary', '資料對應', '資料查找', '鍵值對', '程式設計']
description: "Python的Dictionary是你的數據導航,讓你以鍵值方式快速查找所需資訊。"
hide_table_of_contents: false
sidebar_position: 5
---

# Python的Dictionary你的數據指南,輕鬆建立資料與值的關聯

:::tip
Python的Dictionary是你的數據導航,讓你以鍵值方式快速查找所需資訊。
:::

# Why

在程式設計中,我們經常需要處理一些需要建立對應關係的資料,如學生與成績、城市與人口、產品與價格等。Python的Dictionary讓這種對應關係的建立和查找變得非常容易。

# What

- Dictionary 一種儲存鍵值對應的資料結構

- 使用情境 包括建立對應關係、快速查找資料、資料的添加、修改和刪除等

# 比喻

Dictionary就像是你的數據指南,你只需要知道你想查找的鍵(例如城市名稱),就能迅速找到對應的值(例如城市人口)。

# How

以下是一些Python Dictionary的使用情境與方法

```python
# 創建一個Dictionary
d = {'Alice' 90, 'Bob' 80, 'Charlie' 70}

# 查找一個鍵對應的值
print(d['Alice'])

# 添加一個鍵值對
d['David'] = 85

# 修改一個鍵對應的值
d['Alice'] = 95

# 刪除一個鍵值對
del d['Bob']

# 判斷一個鍵是否存在
print('Alice' in d)

# 列出所有的鍵
print(d.keys())

# 列出所有的值
print(d.values())

```

