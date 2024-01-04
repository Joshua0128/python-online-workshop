---
title: "直到成功為止以Python的while迴圈,持續嘗試直至達成目標!"
author: "wei"
tags: ['while迴圈', '控制流程', '條件檢查']
description: "當你需要持續嘗試直到成功,Python的while迴圈就是你的最佳夥伴!"
hide_table_of_contents: false
sidebar_position: 4
---

# 直到成功為止以Python的while迴圈,持續嘗試直至達成目標!

:::tip
當你需要持續嘗試直到成功,Python的while迴圈就是你的最佳夥伴!
:::

# Why

假設你在玩一款猜數字遊戲,你需要不斷地猜測,直到猜中正確數字為止。這就像運用while迴圈你持續進行相同的動作,直到達成某個條件(在此例是猜中數字)。

# What

- while迴圈是一種控制流程的工具

- 它會重複執行一段程式碼,直到指定的條件被滿足

- 使用while迴圈時,條件的檢查是在每次迴圈開始前進行

# 比喻

while迴圈就如同一個努力的運動員,他會不斷地進行訓練,直到他達成目標(例如跑完馬拉松或完成訓練計畫)。如果他的目標始終未達成,他將繼續訓練,就如同while迴圈在條件未滿足時,將一直進行。

# How

讓我們看一個例子你想要撰寫一個程式,讓電腦不斷地印出 Hello, world!,直到使用者輸入 stop。



```python
keep_going = True
while keep_going
    print(Hello, world!)
    user_input = input(Do you want to stop (yesno) )
    if user_input == yes
        keep_going = False

```



在這個例子中,程式會不斷地印出 Hello, world!,直到使用者輸入 yes 為止。

