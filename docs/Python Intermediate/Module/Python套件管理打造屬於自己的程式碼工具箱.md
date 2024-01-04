---
title: "Python套件管理:打造屬於自己的程式碼工具箱"
author: "wei"
tags: ['Python', '套件管理', 'pip', 'venv', '虛擬環境', '模組安裝']
description: "在Python的世界裡,套件管理是你整理和建立屬於自己的程式碼工具箱的關鍵。"
hide_table_of_contents: false
sidebar_position: 5
---

# Python套件管理打造屬於自己的程式碼工具箱

:::tip
在Python的世界裡,套件管理是你整理和建立屬於自己的程式碼工具箱的關鍵。
:::

# Why

Python具有龐大的套件庫,裡面有許多實用的模組和套件。然而,由於這些套件的版本和相依性問題,可能會導致程式碼執行出錯。有效的套件管理可以讓開發者確保每個專案的套件環境獨立且一致,避免出現“在我電腦上可以運行”的問題。

# What

- 套件管理在Python中,套件管理可以是指管理模組和套件的安裝、升級、移除等過程。

- pipPython的套件管理工具,可以用於安裝、升級和移除套件。

- venvPython的虛擬環境工具,可以創建一個獨立的Python環境,避免套件相互影響。

# 比喻

如果說你的電腦是一個大房子,那麼每個Python專案就是房子裡的一個房間。pip就像是一個搬運工,他可以將你需要的傢俱(套件)搬進房間(專案)。而venv則像是一個隔間師傅,他可以確保每個房間(專案)的傢俱(套件)不會影響到其他房間。

# How

以下是一個使用pip和venv管理套件的範例

```
# 使用venv創建一個新的虛擬環境
python3 -m venv myenv

# 啟動虛擬環境
source myenvbinactivate  # 在Linux或macOS上
myenvScriptsactivate     # 在Windows上

# 使用pip安裝套件
pip install requests

# 使用pip列出已安裝的套件
pip list
```

