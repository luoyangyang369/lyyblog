(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{538:function(t,s,n){"use strict";n.r(s);var r=n(6),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简述线程、程序、进程的基本概念。以及他们之间关系是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简述线程、程序、进程的基本概念。以及他们之间关系是什么"}},[t._v("#")]),t._v(" 简述线程、程序、进程的基本概念。以及他们之间关系是什么?")]),t._v(" "),n("p",[n("strong",[t._v("线程")]),t._v(" 与进程相似, 但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享同一块内存空间和一组系统资源, 所以系统在产生一个线程, 或是在各个线程之间作切换工作时, 负担要比进程小得多, 也正因为如此, 线程也被称为轻量级进程。")]),t._v(" "),n("p",[n("strong",[t._v("程序")]),t._v(" 是含有指令和数据的文件, 被存储在磁盘或其他的数据存储设备中, 也就是说程序是静态的代码。")]),t._v(" "),n("p",[n("strong",[t._v("进程")]),t._v(" 是程序的一次执行过程, 是系统运行程序的基本单位, 因此进程是动态的。系统运行一个程序即是一个进程从创建, 运行到消亡的过程。简单来说, 一个进程就是一个执行中的程序, 它在计算机中一个指令接着一个指令地执行着, 同时, 每个进程还占有某些系统资源如 CPU 时间, 内存空间, 文件, 输入输出设备的使用权等等。换句话说, 当程序在执行时, 将会被操作系统载入内存中。 线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的, 而各线程则不一定, 因为同一进程中的线程极有可能会相互影响。从另一角度来说, 进程属于操作系统的范畴, 主要是同一段时间内, 可以同时执行一个以上的程序, 而线程则是在同一程序内几乎同时执行一个以上的程序段。")]),t._v(" "),n("h2",{attrs:{id:"线程数和cpu利用率的小总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程数和cpu利用率的小总结"}},[t._v("#")]),t._v(" 线程数和CPU利用率的小总结")]),t._v(" "),n("p",[t._v("上面的例子, 只是辅助, 为了更好的理解线程数/程序行为/CPU状态的关系, 来简单总结一下:\n1、 一个极端的线程(不停执行“计算”型操作时), 就可以把单个核心的利用率跑满, 多核心CPU最多只能同时执行等于核心数的“极端”线程数\n2、 如果每个线程都这么“极端”, 且同时执行的线程数超过核心数, 会导致不必要的切换, 造成负载过高, 只会让执行更慢。另外关注:架构师专栏, 在后台回复:“面试题”可以获取, 高清PDF最新版3625页互联网大厂面试题。\n3、 I/O 等暂停类操作时, CPU处于空闲状态, 操作系统调度CPU执行其他线程, 可以提高CPU利用率, 同时执行更多的线程\n4、 I/O 事件的频率频率越高, 或者等待/暂停时间越长, CPU的空闲时间也就更长, 利用率越低, 操作系统可以调度CPU执行更多的线程")])])}),[],!1,null,null,null);s.default=a.exports}}]);