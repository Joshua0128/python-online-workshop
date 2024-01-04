---
title: "客製化自己的型別與類別Python 物件導向程式設計的實踐"
author: "wei"
tags: ['Python', '自訂型別', 'type()函式', '類別', '物件', '物件導向程式設計']
description: "在 Python 中,你可以設計自己的型別,開創程式設計的無窮可能。"
hide_table_of_contents: false
sidebar_position: 1
---

# 客製化自己的型別與類別Python 物件導向程式設計的實踐

:::tip
在 Python 中,你可以設計自己的型別,開創程式設計的無窮可能。
:::

# Why

在 Python 中,我們除了可以使用內建的型別(如數字、字串、列表等)以外,還可以透過物件導向程式設計(OOP)來定義自己的型別,也就是所謂的類別(Class)。學習如何自訂型別,可以讓我們的程式碼更有組織、更易於維護,並提供更豐富的功能。

# What

- 類別(Class)在 Python 中,類別是定義自訂型別的方式。類別可以包含屬性(Attribute)和方法(Method)。

- 物件(Object)當我們根據類別創建一個實例時,這個實例就是一個物件。物件是類別的具體實現。

- 使用 type() 函式可以查看物件的類別。

# 比喻

你可以將類別想像成是一個藍圖或模板,而物件則是根據這個藍圖建造出來的房子。每一棟房子都有其獨特的屬性(如顏色、大小),並能執行特定的功能(如開門、關窗)。

# How

以下是一個定義類別並創建物件的範例

```python
# 定義一個 'Person' 類別
class Person
    def __init__(self, name, age)
        self.name = name
        self.age = age

# 創建一個 'Person' 物件
p = Person(John, 30)

# 查看物件的類別
print(type(p)) # 輸出class '__main__.Person'
```

在這個範例中,我們首先定義了一個 'Person' 類別,然後根據這個類別創建了一個物件 'p',最後用 type() 函式查看 'p' 的類別。

