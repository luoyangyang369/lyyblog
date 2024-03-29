---
title: Java 基础知识(三) 集合类
date: 2021-02-18 17:25:25  # 建立日期
updated: 2021-02-18 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [Java]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
copyright : ture  # 授权问题显示
categories: Java
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
prev: general2
# next: general3
---
<!-- [[toc]]  # 在页面显示目录 -->

## 说说List,Set,Map三者的区别？

- List(对付顺序的好帮手): 存储的元素是有序的、可重复的.
- Set(注重独一无二的性质): 存储的元素是无序的、不可重复的.
- Map(用 Key 来搜索的专家): 使用键值对(kye-value)存储, Key 是无序的、不可重复的, value 是无序的、可重复的, 每个键最多映射到一个值.

## List

- CopyOnWriteArrayList
读写分离

写操作在一个复制的数组上进行，读操作还是在原始数组中进行，读写分离，互不影响。

写操作需要加锁，防止并发写入时导致写入数据丢失。

写操作结束之后需要把原始数组指向新的复制数组。

- LinkedList
基于双向链表实现，使用 Node 存储链表节点信息

每个链表存储了 first 和 last 指针

> 与 ArrayList 的比较

ArrayList 基于动态数组实现，LinkedList 基于双向链表实现

ArrayList 和 LinkedList 的区别可以归结为数组和链表的区别：

数组支持随机访问，但插入删除的代价很高，需要移动大量元素
链表不支持随机访问，但插入删除只需要改变指针

## Map

- TreeMap：基于红黑树实现。
- HashMap：基于哈希表实现。
- HashTable：和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程同时写入 HashTable 不会导致数据不一致。它是遗留类，不应该去使用它，而是使用 ConcurrentHashMap 来支持线程安全，ConcurrentHashMap 的效率会更高，因为 ConcurrentHashMap 引入了分段锁。
- LinkedHashMap：使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最少使用（LRU）顺序。

### Arraylist 与 LinkedList 区别?

1、 **是否保证线程安全**: ArrayList 和 LinkedList 都是不同步的, 也就是不保证线程安全;

2、 **底层数据结构**: Arraylist 底层使用的是 Object 数组;LinkedList 底层使用的是 双向链表 数据结构(JDK1.6 之前为循环链表, JDK1.7 取消了循环.注意双向链表和双向循环链表的区别, 下面有介绍到！)

3、 **插入和删除是否受元素位置的影响**: 

① ArrayList 采用数组存储, 所以插入和删除元素的时间复杂度受元素位置的影响. 比如:执行add(E e)方法的时候,  ArrayList 会默认在将指定的元素追加到此列表的末尾, 这种情况时间复杂度就是 O(1).但是如果要在指定位置 i 插入和删除元素的话(add(int index, E element))时间复杂度就为 O(n-i).因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作. 

② LinkedList 采用链表存储, 所以对于add(E e)方法的插入, 删除元素时间复杂度不受元素位置的影响, 近似 O(1), 如果是要在指定位置i插入和删除元素的话((add(int index, E element)) 时间复杂度近似为o(n))因为需要先移动到指定位置再插入.

4、 **是否支持快速随机访问**: LinkedList 不支持高效的随机元素访问, 而 ArrayList 支持.快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法).

5、 **内存空间占用**: ArrayList 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间, 而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间(因为要存放直接后继和直接前驱以及数据).

### HashMap 和 HashTable 的区别

1、 **线程是否安全**： HashMap 是非线程安全的，HashTable 是线程安全的,因为 HashTable 内部的方法基本都经过synchronized 修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）；

2、 **效率**： 因为线程安全的问题，HashMap 要比 HashTable 效率高一点。另外，HashTable 基本被淘汰，不要在代码中使用它；

3、 **对 Null key 和 Null value 的支持**： HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；HashTable 不允许有 null 键和 null 值，否则会抛出 NullPointerException。

4、 **初始容量大小和每次扩充容量大小的不同** ： ① 创建时如果不指定容量初始值，Hashtable 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。HashMap 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为 2 的幂次方大小（HashMap 中的tableSizeFor()方法保证，下面给出了源代码）。也就是说 HashMap 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。

5、 **底层数据结构**： JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。Hashtable 没有这样的机制。

简单来说, HashMap由数组+链表组成的, 数组是HashMap的主体, 链表则是主要为了解决哈希冲突而存在的, 如果定位到的数组位置不含链表(当前entry的next指向null),那么查找, 添加等操作很快, 仅需一次寻址即可;如果定位到的数组包含链表, 对于添加操作, 其时间复杂度为O(n), 首先遍历链表, 存在即覆盖, 否则新增;对于查找操作来讲, 仍需遍历链表, 然后通过key对象的equals方法逐一比对查找.所以, 性能考虑, HashMap中的链表出现越少, 性能才会越好.

HashTable|HashMap
:---:|:--:
基于Dictionany类|基于AbstractMap类|
key和value都不允许为null, Hashtable遇到null,  直接返回NullPointerException|key和value都允许为nill, HashMap遇到key为nl的时候, 调用putForNullkey方法进行处理.|
线程安全几乎所有的public的方法都是synchronized的|非线程安全|
速度慢|速度快|

### HashMap 和 HashSet区别

如果你看过 HashSet 源码的话就应该知道：HashSet 底层就是基于 HashMap 实现的。（HashSet 的源码非常非常少，因为除了 clone()、writeObject()、readObject()是 HashSet 自己不得不实现之外，其他方法都是直接调用 HashMap 中的方法。

HashMap|	HashSet
:---:|:--:
实现了 Map 接口|	实现 Set 接口
存储键值对|	仅存储对象
调用 put()向 map 中添加元素|	调用 add()方法向 Set 中添加元素
HashMap 使用键（Key）计算 hashcode|	HashSet 使用成员对象来计算 hashcode 值，对于两个对象来说 hashcode 可能相同，所以 equals()方法用来判断对象的相等性


### HashMap 和 LinkedHashMap 的区别
HashMap|LinkedHashMap
:---:|:--:
无序存储|有序存储, 以双向链表实现|
读取速度与容量有关|读取速度与容量无关|
线程不安全|线程不安全|
key-value都允许null|key-value都允许null|

### HashMap 和 TreeMap 的区别
HashMap|TreeMap
:---:|:--:
遍历出来数据无序|自然排序或者创建映射提供的Comparator进行排序|
基于散列表|红黑树|
取值速度快|取值速度慢|
适用于在Map中插入、删除和定位元素|适用于按自然顺序或自定义顺序遍历键(key)|



