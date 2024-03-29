---
title: Java 基础知识(二)
date: 2021-02-08 17:25:25  # 建立日期
updated: 2021-02-08 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [Java]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
copyright : ture  # 授权问题显示
categories: Java
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
prev: general
next: general3
---
<!-- [[toc]]  # 在页面显示目录 -->

## 参考资料

## == 与 equals(重要)

== : 它的作用是判断两个对象的地址是不是相等。即, 判断两个对象是不是同一个对象(基本数据类型==比较的是值, 引用数据类型==比较的是内存地址)。

equals() : 它的作用也是判断两个对象是否相等。但它一般有两种使用情况:

- 情况 1:类没有覆盖 equals() 方法。则通过 equals() 比较该类的两个对象时, 等价于通过“==”比较这两个对象。
- 情况 2:类覆盖了 equals() 方法。一般, 我们都覆盖 equals() 方法来比较两个对象的内容是否相等;若它们的内容相等, 则返回 true (即, 认为这两个对象相等)。

## hashCode 与 equals
hashCode()与 equals() 的相关规定：

1. 如果两个对象相等，则 hashcode 一定也是相同的
2. 两个对象相等，对两个 equals() 方法返回 true
3. 两个对象有相同的 hashcode 值，它们也不一定是相等的

## 关于 final 关键字的一些总结

final 关键字主要用在三个地方:变量、方法、类。

1、 对于一个 final 变量, 如果是基本数据类型的变量, 则其数值一旦在初始化之后便不能更改;如果是引用类型的变量, 则在对其初始化之后便不能再让其指向另一个对象。
2、 当用 final 修饰一个类时, 表明这个类不能被继承。final 类中的所有成员方法都会被隐式地指定为 final 方法。
3、使用 final 方法的原因有两个。第一个原因是把方法锁定, 以防任何继承类修改它的含义;第二个原因是效率。在早期的 Java 实现版本中, 会将 final 方法转为内嵌调用。但是如果方法过于庞大, 可能看不到内嵌调用带来的任何性能提升(现在的 Java 版本已经不需要使用 final 方法进行这些优化了)。类中所有的 private 方法都隐式地指定为 final。




