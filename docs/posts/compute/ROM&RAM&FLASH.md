---
title: ROM&RAM&FLASH
date: 2019-6-13 17:25:25
tags: [计算机]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
categories: 计算机
---

初学MCU的人，经常会看到ROM, RAM, FLASH，而且会被这些词汇搞得晕头转向。本文对这些概念进行了厘清，并介绍了这些Memory的区别

**备注**：MCU-单片机，微型计算机
<!-- more -->

## ROM (Read Only Memory)程序存储器
它是一种只能读出事先所存的数据的固态半导体存储器。ROM中所存数据稳定，一旦存储数据就再也无法将之改变或者删除，断电后所存数据也不会消失。其结构简单，因而常用于存储各种固化程序和数据。

## RAM (Random Access Memory)随机访问存储器

RAM又称随机存取存储器，存储单元的内容可按照需要随机取出或存入，且存取的速度与存储单元的位置无关。这种存储器在断电时，将丢失其存储内容，所以主要用于存储短时间使用的程序。

它主要用来存储程序中用到的变量。凡是整个程序中，所用到的需要被改写的量（包括全局变量、局部变量、堆栈段等），都存储在RAM中。

## ROM&RAM区别
[参考](https://blog.csdn.net/szupjz/article/details/51842242)

通俗的说，比如在电脑中，大家都知道有内存和硬盘之说，其实内存就是一种RAM技术，而ROM则类似于硬盘技术，两者都是存储器，只是RAM的速度要远远高于ROM的速度。

在电脑日常操作中，很多程序都将临时运行的程序命令，存放在内存中，但一旦关机或者停电，内存里原本临时存储的程序信息将全部被清空，也就是内存只能临时存储东西，不能长久保存，而ROM则可以存储，即使掉电后也可以找到之前存储的文件，这也就是硬盘了。

## FLASH 存储器

Flash 存储器（FLASH EEPROM）又称闪存，快闪。它是EEPROM的一种。它结合了ROM和RAM的长处。不仅具备电子可擦除可编辑（EEPROM）的性能，还不会断电丢失数据同时可以快速读取数据。它于EEPROM的最大区别是，FLASH按扇区（block）操作，而EEPROM按照字节操作。FLASH的电路结构较简单，同样容量占芯片面积较小，成本自然比EEPROM低，因此适合用于做程序存储器。
