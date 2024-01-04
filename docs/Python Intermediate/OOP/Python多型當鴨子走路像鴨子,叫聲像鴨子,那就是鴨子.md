---
title: "Python多型 - 當鴨子走路像鴨子,叫聲像鴨子,那就是鴨子"
author: "wei"
tags: ['Python', '多型', '物件導向程式設計', '鴨子型別', '方法', '物件', '類別']
description: "在Python程式設計中,多型是一種強大的工具,它讓我們能以統一的方式處理不同類別的對象,提升程式碼的彈性和可擴充性。"
hide_table_of_contents: false
sidebar_position: 5
---

# Python多型當鴨子走路像鴨子,叫聲像鴨子,那就是鴨子

:::tip
在Python程式設計中,多型是一種強大的工具,它讓我們能以統一的方式處理不同類別的對象,提升程式碼的彈性和可擴充性。
:::

# Why

多型是物件導向程式設計中的一個重要概念,它允許我們以統一的方式對待不同類別的對象,只要它們具有相同的方法。這種方式讓程式設計師可以編寫更通用的程式碼,提高程式碼的彈性和可擴充性。

# What

- 多型在物件導向程式設計中,多型是一種允許我們以統一的方式對待不同類別的對象,只要它們具有相同的方法的概念。

- 鴨子型別在Python中,我們不需要檢查一個對象是否是某個類別的實例,只需要檢查這個對象是否具有我們需要的方法或屬性。這種方式稱為鴨子型別(Duck Typing)。

# 比喻

多型就像是動物園的餵食員,他們餵食動物時不需要知道每一種動物的具體種類,只需要知道這些動物都有“吃”這個行為。無論是大象、獅子還是猩猩,餵食員都可以使用相同的方法來餵食它們。這就是多型的力量。

# How

以下是一個Python多型的範例

```python
class Dog
    def sound(self)
        return 'Woof!'

class Cat
    def sound(self)
        return 'Meow!'

def make_sound(animal)
    print(animal.sound())

dog = Dog()
cat = Cat()

make_sound(dog)  # 輸出Woof!
make_sound(cat)  # 輸出Meow!
```

在這個範例中,我們定義了一個函數`make_sound`,它接受一個動物物件作為參數,並調用其`sound`方法。無論我們傳入的是`Dog`對象還是`Cat`對象,`make_sound`函數都能正常工作。這就是多型的魔力。

