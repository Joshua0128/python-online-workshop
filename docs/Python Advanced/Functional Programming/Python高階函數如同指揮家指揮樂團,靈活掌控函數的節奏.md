---
title: "Python高階函數如同指揮家指揮樂團,靈活掌控函數的節奏"
author: "wei"
tags: ['Python', '高階函數', '函數式程式設計', 'map', 'reduce', 'filter', '函數參數', '返回函數']
description: "在Python程式設計中,掌握高階函數的運用,能讓我們的程式碼更靈活,結構更簡潔,更具可讀性與可維護性。"
hide_table_of_contents: false
sidebar_position: 2
---

# Python高階函數如同指揮家指揮樂團,靈活掌控函數的節奏

:::tip
在Python程式設計中,掌握高階函數的運用,能讓我們的程式碼更靈活,結構更簡潔,更具可讀性與可維護性。
:::

# Why

高階函數是函數式程式設計的核心概念之一。它讓我們能夠把函數作為參數傳入,或者返回一個函數,這給我們帶來了極大的靈活性。透過高階函數,我們可以把一些常見的程式碼模式抽象化,減少重複的程式碼,提高程式的可維護性。

# What

- 高階函數能接受其他函數作為參數,或者返回一個函數的函數。在Python中,常見的高階函數有map、reduce、filter等。

# 比喻

高階函數就像是指揮家在指揮樂團,他可以指定哪些樂器(函數)該何時演奏(被調用),甚至可以創造新的樂譜(返回函數)。這樣,音樂(程式)的節奏和旋律就能根據指揮家的需要靈活變換。

# How

以下是一個Python高階函數的範例

```python
def apply_func(x, func)
    return func(x)

def square(x)
    return x  2

print(apply_func(5, square))  # 輸出25
```

在這個範例中,`apply_func`就是一個高階函數,它接受一個數字`x`和一個函數`func`作為參數,然後返回`func(x)`的結果。我們將`square`函數作為參數傳入`apply_func`,得到5的平方。

