---
title: vim常用操作
date: 2019-7-6 09:48:05
tags: [vim, 命令]  # 标签
index_img: /img/git.png  # 主页图片
banner_img: /img/git.png  # 详情页图片
top: 98  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
---

vim  工作常用命令
<!-- more -->

[vim 常用总结图片](https://vimsky.com/wp-content/uploads/2015/03/131.jpg)
## 工作常用

- 查找替换
```
/text　　查找text，n下一个，N前一个
?text　　查找text，反向查找，n下一个，N前一个

ra 将当前字符替换为a，当期字符即光标所在字符。
:s/old/new/ 用old替换new，替换当前行的第一个匹配
:s/old/new/g 用old替换new，替换当前行的所有匹配
:%s/old/new/ 用old替换new，替换所有行的第一个匹配
:%s/old/new/g 用old替换new，替换整个文件的所有匹配
```

- 复制粘贴
```
dd	删除光标所在行
x	删除当前字符
yy	复制一行，此命令前可跟数字，标识复制多行，如6yy，表示从当前行开始复制6行
p	粘贴粘贴板的内容到当前行的下面  大P 为上面
```
- 移动光标
```
h,j,k,l	上，下，左，右
gg → 到第一行
G → 到最后一行

```

## 常见用法
```
i → Insert 模式，按 ESC 回到 Normal 模式.
x → 删当前光标所在的一个字符。
dd → 删除当前行，并把删除的行存到剪贴板里
p → 粘贴剪贴板

normal模式下：
插入：a → 在光标后插入  o → 在当前行后插入一个新行  O → 在当前行前插入一个新行  cw → 替换从光标所在位置后到一个单词结尾的字符
移动光标：0 → 数字零，到行头    ^ → 到本行第一个不是blank字符的位置（所谓blank字符就是空格，tab，换行，回车等）
$ → 到本行行尾    g_ → 到本行最后一个不是blank字符的位置。
/pattern → 搜索 pattern 的字符串（陈皓注：如果搜索出多个匹配，可按n键到下一个）
拷贝/粘贴：P → 粘贴  p是表示在当前位置之后，P表示在当前位置之前
w → 到下一个单词的开头。
e → 到下一个单词的结尾。

撤销与重做
u           撤销（Undo）
U           撤销对整行的操作
Ctrl + r    重做（Redo），即撤销的撤销

ZZ 保存并退出
:q! 强制退出并忽略所有更改
:e! 放弃所有修改，并打开原来文件
```