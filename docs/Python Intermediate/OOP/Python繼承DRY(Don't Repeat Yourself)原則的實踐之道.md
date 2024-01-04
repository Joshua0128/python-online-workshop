---
title: "Python繼承 - DRY(Don't Repeat Yourself)原則的實踐之道"
author: "wei"
tags: ['Python', '繼承', 'DRY原則', '物件導向程式設計', '父類別', '子類別', '方法覆寫']
description: "在Python程式設計中,繼承是實現DRY(Don't Repeat Yourself)原則的重要工具,讓我們能更有效地重用和管理程式碼。"
hide_table_of_contents: false
sidebar_position: 4
---

# Python繼承DRY(Don't Repeat Yourself)原則的實踐之道

:::tip
在Python程式設計中,繼承是實現DRY(Don't Repeat Yourself)原則的重要工具,讓我們能更有效地重用和管理程式碼。
:::

# Why

繼承是物件導向程式設計中的一個核心概念,它允許我們創建新的類別(子類別),繼承並擴展現有的類別(父類別)的功能。這種方式可以消除重複的程式碼,並提高程式碼的可維護性和可重用性,從而實現DRY原則。

# What

- 繼承在物件導向程式設計中,繼承是從現有的類別(父類別)創建新的類別(子類別),並繼承並擴展父類別的功能的過程。

- DRY原則Don't Repeat Yourself,這是一種程式設計原則,主張在程式設計中消除重複的信息。

# 比喻

繼承就像是家族的血脈傳承。子類別(孩子)將繼承父類別(父母)的特徵(方法和屬性),並且可以添加或修改這些特徵來形成自己獨特的身份。這樣,我們就不需要對每個子類別重複定義相同的特徵,實現了DRY原則。

# How

以下是一個Python繼承的範例

```python
class Vehicle  # 父類別
    def move(self)
        print(Vehicle moves)

class Car(Vehicle)  # 子類別
    def move(self)
        super().move()  # 使用super調用父類別的方法
        print(Car moves)

car = Car()
car.move()  # 輸出Vehicle moves, Car moves
```

在這個範例中,我們創建了一個新的類別`Car`,它繼承了`Vehicle`類別的`move`方法,然後覆寫了這個方法。

