---
title: "# 在 Windows 上配置 Python 開發環境並使用 VSCode + JupyterLab步驟解說"
author: "wei"
tags: []
description: "以下是在 Windows 上配置 Python 開發環境,並且用 VSCode + JupyterLab 開發的步驟"
hide_table_of_contents: false
sidebar_position: 1
---

# 在 Windows 上配置 Python 開發環境並使用 VSCode + JupyterLab步驟解說

:::tip
以下是在 Windows 上配置 Python 開發環境,並且用 VSCode + JupyterLab 開發的步驟
:::

Step 1安裝 Python

1. 到 Python 官方網站 ([www.python.org](www.python.org)) 下載安裝檔。

2. 點開安裝檔,確認「Add Python to PATH」的選項已打勾,然後點擊「Install Now」安裝。

Step 2驗證 Python 安裝

1. 開啟命令提示字元 (cmd)。

2. 輸入 python --version,如果顯示 Python 版本號,則表示安裝成功。

Step 3安裝 Visual Studio Code (VSCode)

1. 到 VSCode 官方網站 ([code.visualstudio.com](code.visualstudio.com)) 下載安裝檔。

2. 點開安裝檔並依照指示安裝。

Step 4安裝 Python 擴充套件

1. 開啟 VSCode。

2. 點擊左側工具列的「Extensions」圖示。

3. 在搜尋框輸入 Python,點擊第一個搜尋結果並安裝。

Step 5安裝 JupyterLab

1. 開啟命令提示字元。

2. 輸入 pip install jupyterlab 來安裝。

Step 6在 VSCode 中使用 JupyterLab

1. 在 VSCode 中開啟 Python 檔案。

2. 選擇頂部的「View」「Command Palette」。

3. 輸入 Jupyter Create New Blank Notebook,然後按 Enter 建立新的 Jupyter notebook。