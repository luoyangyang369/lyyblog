(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{540:function(v,_,a){"use strict";a.r(_);var t=a(6),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("2021年十月遇到的面试题")]),v._v(" "),a("h3",{attrs:{id:"小知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小知识"}},[v._v("#")]),v._v(" 小知识")]),v._v(" "),a("ul",[a("li",[v._v("Java 修饰符： 当前类、 同包、 子类、 其他包； private、 default、 protected、 public")])]),v._v(" "),a("h3",{attrs:{id:"linux-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[v._v("#")]),v._v(" Linux 常用命令")]),v._v(" "),a("ul",[a("li",[v._v("查看端口占用\n"),a("ul",[a("li",[v._v("lsof -i:端口号")]),v._v(" "),a("li",[v._v("netstat -tunlp | grep 端口号")])])])]),v._v(" "),a("p",[v._v("tail、 less、 su、 unzip")]),v._v(" "),a("ul",[a("li",[v._v("df: 显示磁盘空间使用情况， 建议使用“df -h”的参数组合，根据磁盘容量自动变换合适的单位，更利于阅读。")]),v._v(" "),a("li",[v._v("netstat： 用于显示各种网络相关信息，如网络连接，路由表，接口状态 (Interface Statistics)，masquerade 连接，多播成员 (Multicast Memberships) 等等。")]),v._v(" "),a("li",[v._v("lsof： 用于查看进程开打的文件，打开文件的进程，进程打开的端口(TCP、UDP)。找回/恢复删除的文件。是十分方便的系统监视工具，因为lsof命令需要访问核心内存和各种文件，所以需要root用户执行。")]),v._v(" "),a("li",[v._v("free: 能够显示系统中物理上的空闲和已用内存，还有交换内存，同时，也能显示被内核使用的缓冲和缓存。这些信息是通过解析文件 /proc/meminfo 而收集到的。\n"),a("ul",[a("li",[v._v("字段 buffer : 作为buffer cache的内存，是块设备(磁盘)的缓冲区，包括读、写磁盘")]),v._v(" "),a("li",[v._v("字段 cache: 作为page cache的内存, 文件系统的cache，包括读、写文件")])])]),v._v(" "),a("li",[v._v("top: top命令是Linux下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，常用于服务端性能分析。")]),v._v(" "),a("li",[v._v("pstree: Linux系统中pstree命令的英文全称是“process tree”，即将所有行程以树状图显示，树状图将会以 pid (如果有指定) 或是以 init 这个基本行程为根 (root)，如果有指定使用者 id，则树状图会只显示该使用者所拥有的行程。")]),v._v(" "),a("li",[v._v("curl: 是一个利用URL规则在shell终端命令行下工作的文件传输工具；它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称curl为下载工具。 作为一款强力工具，curl支持包括HTTP、HTTPS、ftp等众多协议，还支持POST、cookies、认证、从指定偏移处下载部分文件、用户代理字符串、限速、文件大小、进度条等特征；做网页处理流程和数据检索自动化。")])]),v._v(" "),a("h3",{attrs:{id:"唯一性太差的字段不需要创建索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#唯一性太差的字段不需要创建索引"}},[v._v("#")]),v._v(" 唯一性太差的字段不需要创建索引")]),v._v(" "),a("p",[v._v("因为普通索引在 B+ 树里需要回表操作， 比如 100 条记录， 50 条为男性， 那么这50条还需要回表查询， 还不如全表扫描")]),v._v(" "),a("h3",{attrs:{id:"redis-为什么这么快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-为什么这么快"}},[v._v("#")]),v._v(" Redis 为什么这么快")]),v._v(" "),a("ol",[a("li",[v._v("单线程 避免了锁 线程之间的互相竞争")]),v._v(" "),a("li",[v._v("多路复用")]),v._v(" "),a("li",[v._v("内存的读取")])]),v._v(" "),a("h3",{attrs:{id:"直接内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接内存"}},[v._v("#")]),v._v(" 直接内存")]),v._v(" "),a("ol",[a("li",[v._v("Direct Memory 并不是虚拟机运行时数据区的一部分；")]),v._v(" "),a("li",[v._v("由于在 JDK 1.4 中引入了 NIO 机制，为此实现了一种通过 native 函数直接分配对外内存的，而这一切是通过以下两个概念实现的：\n"),a("ul",[a("li",[v._v("通道（Channel）;")]),v._v(" "),a("li",[v._v("缓冲区（Buffer）;")])])]),v._v(" "),a("li",[v._v("通过存储在 Java 堆里面的 DirectByteBuffer "),a("strong",[v._v("对象")]),v._v("对这块内存的引用进行操作；")]),v._v(" "),a("li",[v._v("因避免了 Java 堆和 Native 堆（native heap）中来回复制数据，所以在一些场景中显著提高了性能；")]),v._v(" "),a("li",[v._v("直接内存出现 OutOfMemoryError 异常的原因是物理机器的内存是受限的，但是我们通常会忘记需要为直接内存在物理机中预留相关内存空间；")])]),v._v(" "),a("h3",{attrs:{id:"对象的内存分配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的内存分配"}},[v._v("#")]),v._v(" 对象的内存分配")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.jpg",alt:"对象的内存分配"}})]),v._v(" "),a("h3",{attrs:{id:"方法区的垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法区的垃圾回收"}},[v._v("#")]),v._v(" 方法区的垃圾回收")]),v._v(" "),a("ul",[a("li",[v._v("这个区域的回收利用率不高， 回收条件复杂")]),v._v(" "),a("li",[v._v("一般回收常量池废弃的常量(字面量、符号引用)和不再使用的类型")])]),v._v(" "),a("h3",{attrs:{id:"如何分析-oom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何分析-oom"}},[v._v("#")]),v._v(" 如何分析 OOM")]),v._v(" "),a("ol",[a("li",[v._v("使用内存分析工具对堆的快照进行分析， 主要是确定内存中的对象是否必要， 判断是内存泄漏还是内存溢出")]),v._v(" "),a("li",[v._v("进一步确定泄漏的对象(无用的对象)的引用链")]),v._v(" "),a("li",[v._v("如果没有泄漏的对象， 就考虑是否要调整堆空间大小")])]),v._v(" "),a("h3",{attrs:{id:"堆空间设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆空间设置"}},[v._v("#")]),v._v(" 堆空间设置")]),v._v(" "),a("ul",[a("li",[v._v("-Xmx: 最大堆空间， 机器物理内存的 1/4")]),v._v(" "),a("li",[v._v("一般 Xmx Xms 设置成一样大小， 避免在 GC 后重新计算大小")])]),v._v(" "),a("h3",{attrs:{id:"秒杀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#秒杀"}},[v._v("#")]),v._v(" 秒杀")]),v._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/qiurunze123/miaosha/blob/master/docs/code-solve.md#%E7%A7%92%E6%9D%80%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[v._v("秒杀常见问题"),a("OutboundLink")],1)]),v._v(" "),a("ul",[a("li",[a("p",[v._v("如何解决卖超问题")]),v._v(" "),a("ol",[a("li",[v._v("在sql加上判断防止数据边为负数")]),v._v(" "),a("li",[v._v("数据库加唯一索引防止用户重复购买")]),v._v(" "),a("li",[v._v("redis预减库存减少数据库访问　内存标记减少redis访问　请求先入队列缓冲，异步下单，增强用户体验")])])]),v._v(" "),a("li",[a("p",[v._v("订单处理队列 rabbitmq")]),v._v(" "),a("ol",[a("li",[v._v("请求先入队缓冲，异步下单，增强用户体验")]),v._v(" "),a("li",[v._v("请求出队，生成订单，减少库存")]),v._v(" "),a("li",[v._v("客户端定时轮询检查是否秒杀成功")])])]),v._v(" "),a("li",[a("p",[v._v("秒杀安全 -- 安全性设计")]),v._v(" "),a("ol",[a("li",[v._v("秒杀接口隐藏")]),v._v(" "),a("li",[v._v("数字公式验证码")]),v._v(" "),a("li",[v._v("接口防刷限流(通用 注解，拦截器方式)")])])]),v._v(" "),a("li",[a("p",[v._v("redis 预减成功，DB扣减库存失败怎么办")]),v._v(" "),a("ol",[a("li",[v._v("其实我们可以不用太在意，对用户而言，秒杀不中是正常现象，秒杀中才是意外，单个用户秒杀中")]),v._v(" "),a("li",[v._v("本来就是小概率事件，出现这种情况对于用户而言没有任何影响")]),v._v(" "),a("li",[v._v("对于商户而言，本来就是为了活动拉流量人气的，卖不完还可以省一部分费用，但是活动还参与了，也就没有了任何影响")]),v._v(" "),a("li",[v._v("对网站而言，最重要的是体验，只要网站不崩溃，对用户而言没有任何影响")])])]),v._v(" "),a("li",[a("p",[v._v("为什么要单独维护一个秒杀结束标志")]),v._v(" "),a("ol",[a("li",[v._v("前提所有的秒杀相关的接口都要加上活动是否结束的标志，如果结束就直接返回，包括轮寻的接口防止一直轮寻")]),v._v(" "),a("li",[v._v("管理后台也可以手动的更改这个标志，防止出现活动开始以后就没办法结束这种意外的事件")])])])]),v._v(" "),a("h3",{attrs:{id:"拥塞控制-慢开始-、-拥塞避免-、快重传-和-快恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制-慢开始-、-拥塞避免-、快重传-和-快恢复"}},[v._v("#")]),v._v(" 拥塞控制 慢开始 、 拥塞避免 、快重传 和 快恢复")]),v._v(" "),a("ol",[a("li",[a("strong",[v._v("慢开始：")]),v._v(" 慢开始算法的思路是当主机开始发送数据时，如果立即把大量数据字节注入到网络，那么可能会引起网络阻塞，因为现在还不知道网络的符合情况。经验表明，较好的方法是先探测一下，即由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口数值。cwnd初始值为1，每经过一个传播轮次，cwnd加倍。")]),v._v(" "),a("li",[a("strong",[v._v("拥塞避免：")]),v._v(" 拥塞避免算法的思路是让拥塞窗口cwnd缓慢增大，即每经过一个往返时间RTT就把发送放的cwnd加1.")]),v._v(" "),a("li",[a("strong",[v._v("快重传与快恢复：")]),v._v(" 在 TCP/IP 中，快速重传和恢复（fast retransmit and recovery，FRR）是一种拥塞控制算法，它能快速恢复丢失的数据包。没有 FRR，如果数据包丢失了，TCP 将会使用定时器来要求传输暂停。在暂停的这段时间内，没有新的或复制的数据包被发送。有了 FRR，如果接收机接收到一个不按顺序的数据段，它会立即给发送机发送一个重复确认。如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。有了 FRR，就不会因为重传时要求的暂停被耽误。 　当有单独的数据包丢失时，快速重传和恢复（FRR）能最有效地工作。当有多个数据信息包在某一段很短的时间内丢失时，它则不能很有效地工作。")])]),v._v(" "),a("h3",{attrs:{id:"tcp-协议如何保证可靠传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议如何保证可靠传输"}},[v._v("#")]),v._v(" TCP 协议如何保证可靠传输")]),v._v(" "),a("ol",[a("li",[v._v("应用数据被分割成 TCP 认为最适合发送的数据块。")]),v._v(" "),a("li",[v._v("TCP 给发送的每一个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层。")]),v._v(" "),a("li",[a("strong",[v._v("校验和：")]),v._v(" TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")]),v._v(" "),a("li",[v._v("TCP 的接收端会丢弃重复的数据。")]),v._v(" "),a("li",[a("strong",[v._v("流量控制：")]),v._v(" TCP 连接的每一方都有固定大小的缓冲空间，TCP的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议。 （TCP 利用滑动窗口实现流量控制）")]),v._v(" "),a("li",[a("strong",[v._v("拥塞控制：")]),v._v(" 当网络拥塞时，减少数据的发送。")]),v._v(" "),a("li",[a("strong",[v._v("ARQ协议：")]),v._v(" 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。")]),v._v(" "),a("li",[a("strong",[v._v("超时重传：")]),v._v(" 当 TCP 发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。")])]),v._v(" "),a("h3",{attrs:{id:"tcp-udp-协议的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-协议的区别"}},[v._v("#")]),v._v(" TCP,UDP 协议的区别")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/tcp_udp.jpg",alt:"协议的区别"}})]),v._v(" "),a("h3",{attrs:{id:"为什么要三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要三次握手"}},[v._v("#")]),v._v(" 为什么要三次握手")]),v._v(" "),a("ol",[a("li",[v._v("SYN 到服务端")]),v._v(" "),a("li",[v._v("SYN/ACk 返回客户端")]),v._v(" "),a("li",[v._v("ACK 到服务端")])]),v._v(" "),a("ul",[a("li",[v._v("三次握手的目的是建立可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，而三次握手最主要的目的就是双方确认自己与对方的发送与接收是正常的。")]),v._v(" "),a("li",[v._v("交换相互的序列号， 因为 TCP 是可靠的连接， 靠的就是这个")])]),v._v(" "),a("h3",{attrs:{id:"不可重复读和幻读到底有什么区别呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读和幻读到底有什么区别呢"}},[v._v("#")]),v._v(" 不可重复读和幻读到底有什么区别呢？")]),v._v(" "),a("ul",[a("li",[v._v("不可重复读是读取了其他事务更改的数据，"),a("code",[v._v("针对update操作")])]),v._v(" "),a("li",[v._v("幻读是读取了其他事务新增的数据，"),a("code",[v._v("针对insert和delete操作")])])]),v._v(" "),a("h3",{attrs:{id:"mysql-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-优化"}},[v._v("#")]),v._v(" MySQL 优化")]),v._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/qiurunze123/miaosha/blob/master/docs/mysql-2.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("explain"),a("OutboundLink")],1)]),v._v(" "),a("ul",[a("li",[v._v("MySQL 中一般情况下所有的非叶节点都会在内存中，只有访问叶节点才会需要随机 I/O 加载数据")]),v._v(" "),a("li",[v._v("MySQL默认 16 kb， MySQL将每个叶子节点的大小设置为一个页的整数倍，利用磁盘的预读机制，能有效减少磁盘I/O次数，提高查询效率。")])]),v._v(" "),a("h3",{attrs:{id:"代码优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码优化"}},[v._v("#")]),v._v(" 代码优化")]),v._v(" "),a("ul",[a("li",[v._v("逃逸分析： 从 jdk 1.7 开始已经默认开启逃逸分析，如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在"),a("strong",[v._v("栈上分配内存")]),v._v("。")]),v._v(" "),a("li",[v._v("同步消除(锁消除)： 在动态编译同步块的时候，JIT编译器可以借助逃逸分析来判断"),a("strong",[v._v("同步块所使用的锁对象是否只能够被一个线程访问而没有被发布到其他线程")]),v._v("。如果没有，那么JIT编译器在编译这个同步块的时候就会取消对这部分代码的同步。")]),v._v(" "),a("li",[v._v("标量替换： 在JIT阶段，如果经过逃逸分析，发现一个对象不会被外界访问的话，那么经过JIT优化，就会把这个对象拆解成若干个其中包含的若干个成员变量来代替。这个过程就是标量替换。")])]),v._v(" "),a("h3",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[v._v("#")]),v._v(" 泛型")]),v._v(" "),a("p",[v._v("泛型其实就是一种参数化的集合，它限制了你添加进集合的类型。泛型的本质就是一种参数化类型。多态也可以看作是泛型的机制。一个类继承了父类，那么就能通过它的父类找到对应的子类，但是不能通过其他类来找到具体要找的这个类。泛型的设计之处就是希望对象或方法具有最广泛的表达能力。")]),v._v(" "),a("ul",[a("li",[v._v("为了参数化类型，或者说可以将类型当作参数传递给一个类或者是方法。")]),v._v(" "),a("li",[v._v("泛型信息只存在于代码编译阶段，在进入 JVM 之前，与泛型相关的信息会被擦除掉，专业术语叫做类型擦除。")]),v._v(" "),a("li",[v._v("最显而易见的好处就是它不再需要对取出来的结果进行强制转换了。")]),v._v(" "),a("li",[v._v("\n<?>被称作无限定的通配符； <? extends T>被称作有上限的通配符； <? super T>被称作有下限的通配符\n")])]),v._v(" "),a("h3",{attrs:{id:"java-中的类加载机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-中的类加载机制"}},[v._v("#")]),v._v(" Java 中的类加载机制？")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("1. 加载： 通过类加载器加载\n   1. 获取定义此类的二进制字节流\n   2. 将这个字节流表示的一种存储结构转换为运行时数据区中方法区的数据结构。\n   3. 在内存中生成一个 Class 对象，这个对象就代表了这个数据结构的访问入口。\n2. 链接： 下面三个可能会交替执行\n   1. 验证： 文件格式验证。 元数据验证。 字节码验证。 符号引用验证。\n   2. 准备： 为类中的变量分配内存并设置其初始值的阶段，这些变量所使用的内存都应当在方法区中进行分配\n   3. 解析： 是 Java 虚拟机将常量池内的符号引用替换为直接引用的过程。\n3. 初始化：\n  1. 执行类构造器方法 `<clinit>()` 的过程\n  2. 此方法不需要定义，自动将所有类变量和静态代码块的语句合并起来\n  3. `不同于类的构造器` 构造器是虚拟机视角下的 `<init>`\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br"),a("span",{staticClass:"line-number"},[v._v("7")]),a("br"),a("span",{staticClass:"line-number"},[v._v("8")]),a("br"),a("span",{staticClass:"line-number"},[v._v("9")]),a("br"),a("span",{staticClass:"line-number"},[v._v("10")]),a("br"),a("span",{staticClass:"line-number"},[v._v("11")]),a("br"),a("span",{staticClass:"line-number"},[v._v("12")]),a("br")])]),a("h3",{attrs:{id:"那锁的优化机制了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那锁的优化机制了解吗"}},[v._v("#")]),v._v(" 那锁的优化机制了解吗？")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/%E9%87%8D%E9%87%8F%E9%94%81%E8%8E%B7%E5%8F%96%E8%BF%87%E7%A8%8B.webp",alt:"重量锁的获取过程"}})]),v._v(" "),a("p",[v._v("从JDK1.6版本之后，synchronized本身也在不断优化锁的机制，有些情况下他并不会是一个很重量级的锁了。优化机制包括自适应锁、自旋锁、锁消除、锁粗化、轻量级锁和偏向锁。")]),v._v(" "),a("p",[v._v("锁的状态从低到高依次为无锁->偏向锁->轻量级锁->重量级锁，升级的过程就是从低到高，降级在一定条件也是有可能发生的。")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("自旋锁：由于大部分时候，锁被占用的时间很短，共享变量的锁定时间也很短，所有没有必要挂起线程，用户态和内核态的来回上下文切换严重影响性能。自旋的概念就是让线程执行一个忙循环，可以理解为就是啥也不干，防止从用户态转入内核态，自旋锁可以通过设置-XX:+UseSpining来开启，自旋的默认次数是10次，可以使用-XX:PreBlockSpin设置。")])]),v._v(" "),a("li",[a("p",[v._v("自适应锁：自适应锁就是自适应的自旋锁，自旋的时间不是固定时间，而是由前一次在同一个锁上的自旋时间和锁的持有者状态来决定。")])]),v._v(" "),a("li",[a("p",[v._v("锁消除：锁消除指的是JVM检测到一些同步的代码块，完全不存在数据竞争的场景，也就是不需要加锁，就会进行锁消除。")])]),v._v(" "),a("li",[a("p",[v._v("锁粗化：锁粗化指的是有很多操作都是对同一个对象进行加锁，就会把锁的同步范围扩展到整个操作序列之外。")])]),v._v(" "),a("li",[a("p",[v._v("偏向锁：当线程访问同步块获取锁时，会在对象头和栈帧中的锁记录里存储偏向锁的线程ID，之后这个线程再次进入同步块时都不需要CAS来加锁和解锁了，偏向锁会永远偏向第一个获得锁的线程，如果后续没有其他线程获得过这个锁，持有锁的线程就永远不需要进行同步，反之，当有其他线程竞争偏向锁时，持有偏向锁的线程就会释放偏向锁。可以用过设置-XX:+UseBiasedLocking开启偏向锁。")])]),v._v(" "),a("li",[a("p",[v._v("轻量级锁：JVM的对象的对象头中包含有一些锁的标志位，代码进入同步块的时候，JVM将会使用CAS方式来尝试获取锁，如果更新成功则会把对象头中的状态位标记为轻量级锁，如果更新失败，当前线程就尝试自旋来获得锁。")])])]),v._v(" "),a("p",[v._v("整个锁升级的过程非常复杂，我尽力去除一些无用的环节，简单来描述整个升级的机制。")]),v._v(" "),a("p",[v._v("简单点说，偏向锁就是通过对象头的偏向线程ID来对比，甚至都不需要CAS了，而轻量级锁主要就是通过CAS修改对象头锁记录和自旋来实现，重量级锁则是除了拥有锁的线程其他全部阻塞。")]),v._v(" "),a("h3",{attrs:{id:"cas-compareandswap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cas-compareandswap"}},[v._v("#")]),v._v(" CAS( CompareAndSwap )")]),v._v(" "),a("ul",[a("li",[v._v("比较当前工作内存中的值和主内存中的值，如果相同则执行规定操作，否则继续比较直到主内存和工作内存中的值一致为止.")]),v._v(" "),a("li",[v._v("CAS应用: CAS有3个操作数，内存值V，旧的预期值A，要修改的更新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。")]),v._v(" "),a("li",[v._v("缺点：\n"),a("ul",[a("li",[v._v("循环时间长开销大： 自旋CAS的方式如果长时间不成功，会给CPU带来很大的开销。")]),v._v(" "),a("li",[v._v("只能保证一个共享变量的操作： 只对一个共享变量操作可以保证原子性，但是多个则不行，多个可以通过AtomicReference来处理或者使用锁synchronized实现。")]),v._v(" "),a("li",[v._v("ABA 问题， 通过版本号和时间戳。 Java 有 AtomicStampedReference 来解决")])])])]),v._v(" "),a("h3",{attrs:{id:"springbootapplication-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springbootapplication-注解"}},[v._v("#")]),v._v(" @SpringBootApplication 注解")]),v._v(" "),a("ul",[a("li",[v._v("@EnableAutoConfiguration：启用 SpringBoot 的自动配置机制")]),v._v(" "),a("li",[v._v("@ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。")]),v._v(" "),a("li",[v._v("@Configuration：允许在上下文中注册额外的 bean 或导入其他配置类")])]),v._v(" "),a("h3",{attrs:{id:"springcloud-核心组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-核心组件"}},[v._v("#")]),v._v(" SpringCloud 核心组件")]),v._v(" "),a("p",[v._v("Eureka: 注册中心\nRibbon: 客服端负载均衡\nHystrix: 服务容错处理\nFeign: 声明式REST客户端\nZuul: 服务网关\nConfig: 分布式配置")]),v._v(" "),a("h3",{attrs:{id:"熔断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熔断"}},[v._v("#")]),v._v(" 熔断")]),v._v(" "),a("p",[v._v("服务雪崩： A 调用 B， B 调用 C， 当 C 崩了后，会带崩 B 和 A。")]),v._v(" "),a("p",[v._v("所谓 "),a("code",[v._v("熔断")]),v._v(" 就是服务雪崩的一种有效解决方案。当指定时间窗内的请求失败率达到设定阈值时，系统将通过 断路器 直接将此请求链路断开。")]),v._v(" "),a("p",[v._v("也就是我们上面服务B调用服务C在指定时间窗内，调用的失败率到达了一定的值，那么 Hystrix 则会自动将 服务B与C 之间的请求都断了，以免导致服务雪崩现象。")]),v._v(" "),a("p",[v._v("其实这里所讲的 "),a("code",[v._v("熔断")]),v._v(" 就是指的 "),a("code",[v._v("Hystrix")]),v._v(" 中的 "),a("code",[v._v("断路器模式")]),v._v(" ，你可以使用简单的 @HystrixCommand 注解来标注某个方法，这样 Hystrix 就会使用 断路器 来“包装”这个方法，每当调用时间超过指定时间时(默认为1000ms)，断路器将会中断对这个方法的调用。")]),v._v(" "),a("h3",{attrs:{id:"hystrix介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hystrix介绍"}},[v._v("#")]),v._v(" hystrix介绍")]),v._v(" "),a("p",[a("img",{attrs:{src:"/img/hystrix%E4%BB%8B%E7%BB%8D.png",alt:"hystrix介绍"}})]),v._v(" "),a("p",[v._v("降级是为了更好的用户体验，当一个方法调用异常时，通过执行另一种代码逻辑来给用户友好的回复。这也就对应着 Hystrix 的 后备处理 模式。你可以通过设置 fallbackMethod 来给一个方法设置备用的代码逻辑。比如这个时候有一个热点新闻出现了，我们会推荐给用户查看详情，然后用户会通过id去查询新闻的详情，但是因为这条新闻太火了(比如最近什么*易对吧)，大量用户同时访问可能会导致系统崩溃，那么我们就进行 服务降级 ，一些请求会做一些降级处理比如当前人数太多请稍后查看等等。")])])}),[],!1,null,null,null);_.default=s.exports}}]);