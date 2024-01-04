---
title: "Python命令行參數掌握argc與argv,成為指令行的大師"
author: "wei"
tags: ['Python', '命令行參數', 'argc', 'argv', 'sys模組', '列表', 'len()函數']
description: "在Python程式設計中,理解argc與argv的概念,能讓我們有效地處理命令行參數,讓我們的程式能更靈活地適應不同的使用情境。"
hide_table_of_contents: false
sidebar_position: 2
---

# Python命令行參數掌握argc與argv,成為指令行的大師

:::tip
在Python程式設計中,理解argc與argv的概念,能讓我們有效地處理命令行參數,讓我們的程式能更靈活地適應不同的使用情境。
:::

# Why

在許多情況下,我們希望能從命令行傳入一些參數來控制我們的程式。例如,我們可能希望讓使用者指定要處理的檔案名稱,或者是提供一些選項來改變程式的行為。這時,理解如何使用argc和argv就變得至關重要。

# What

- argc(Argument Count)這是傳遞給程式的命令行參數的數量,包括程式本身的名稱。

- argv(Argument Vector)這是一個包含所有命令行參數的列表,其中第一個元素是程式的名稱,其餘的元素是傳遞給程式的參數。

# 比喻

想像一下,你正在玩一個角色扮演遊戲。在遊戲開始時,你可以選擇你的角色類型(例如,鬥士、法師或盜賊)和你的起始裝備。這就像是在啟動一個程式時給它傳遞命令行參數。角色類型和起始裝備的數量就是argc,而這些選項自己就是argv。

# How

以下是一個Python命令行參數的範例

```python
import sys

print(fProgram name {sys.argv[0]})
print(fNumber of arguments {len(sys.argv)})
print(fArgument List {str(sys.argv)})

```

在命令行執行這個程式,例如`python3 `[`test.py`]` arg1 arg2`,將會得到以下的輸出

```python
Program name test.py
Number of arguments 3
Argument List ['test.py', 'arg1', 'arg2']
```

在這個範例中,我們使用Python的sys模組來讀取命令行參數。sys.argv是一個列表,包含所有的命令行參數。我們可以使用len()函數來獲取參數的數量,也就是argc。

