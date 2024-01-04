---
title: "掌握 Python 布林值為程式邏輯開關揭示真相"
author: "wei"
tags: ['Python', '布林值', 'type()函式', 'True', 'False', '程式流程控制']
description: "布林值是 Python 的基石,掌握它能讓你的程式邏輯更明確。"
hide_table_of_contents: false
sidebar_position: 3
---

# 掌握 Python 布林值為程式邏輯開關揭示真相

:::tip
布林值是 Python 的基石,掌握它能讓你的程式邏輯更明確。
:::

# Why

布林值(Boolean)在程式設計中扮演著重要的角色,它代表真或假,並常被用來控制程式的流程。了解布林值如何在 Python 中運作,可以幫助你更好地理解和撰寫程式碼。

# What

- Python 的布林值有 True(真)和 False(假)兩種。

- 布林值常被用在條件式和迴圈中,作為程式流程控制的關鍵。

- 我們可以使用 type() 函式來查看一個值是否為布林值。

# 比喻

布林值就像是一個開關,它控制著程式的流程。當布林值為 True 時,相對應的程式碼塊將會被執行;當它為 False 時,則會跳過。就像開關燈一樣,「開」代表著光明(True),「關」則代表著黑暗(False)。

# How

以下是一個查看布林值型別的範例

```
# 查看 True 的型別
print(type(True)) # 輸出class 'bool'

# 查看 False 的型別
print(type(False)) # 輸出class 'bool'
```

在這個範例中,我們使用 type() 函式來查看布林值的型別。

