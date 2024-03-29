---
title: "學習如何在Python中進行函式呼叫!"
author: "wei"
tags: ['函式呼叫', '參數', '返回值']
description: "就像是撥打電話,Python的函式呼叫可讓你在需要時,找到並執行某個特定的任務。"
hide_table_of_contents: false
sidebar_position: 3
---

# 電話撥號器學習如何在Python中進行函式呼叫!

:::tip
就像是撥打電話,Python的函式呼叫可讓你在需要時,找到並執行某個特定的任務。
:::

# Why

當你在撥打電話時,你會透過撥打特定的號碼來聯繫某人。函式呼叫在程式中的角色就如同這個電話號碼,當你需要某個特定的功能或是任務時,你只需要撥打這個函式,程式就會執行該任務。

# What

- 函式呼叫是一種使用函式的方式

- 我們可以傳遞參數給函式,讓它根據這些參數來執行任務

- 函式呼叫的結果,就是函式返回的值

# 比喻

函式呼叫就像是你在超市中使用自動售貨機。你選擇了你想要的商品(函式),投入適量的硬幣(提供參數),然後機器就會給你商品(返回結果)。

# How

讓我們看一個例子,假設我們已經定義了一個函式 `add_numbers(a, b)`,這個函式的功能是計算兩數之和。我們可以這樣呼叫它

```python
result = add_numbers(3, 5)
print(result) # 輸出 8
```

我們將 3 和 5 作為參數,傳遞給 `add_numbers` 函式,然後將函式返回的結果儲存到 `result` 變數中。

