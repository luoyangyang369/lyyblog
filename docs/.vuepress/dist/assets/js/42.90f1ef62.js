(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{536:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://c.biancheng.net/java/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/31203609",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 到底是值传递还是引用传递？"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://lingcoder.github.io/OnJava8/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《On Java 8》中文版"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wizardforcel.gitbooks.io/thinking-in-java/content/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 编程思想"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://snailclimb.gitee.io/springboot-guide/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://adjava.netlify.app/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java工程师进阶知识"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://jdk8_api.dev.jcstaff.club/",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准版的API规范"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/blob/3965c02cc0f294b0bd3580df4868d5e396959e2e/Java%E7%9B%B8%E5%85%B3/%E5%8F%AF%E8%83%BD%E6%98%AF%E6%8A%8AJava%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F%E8%AE%B2%E7%9A%84%E6%9C%80%E6%B8%85%E6%A5%9A%E7%9A%84%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("可能是把Java内存区域讲的最清楚的一篇文章"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"java-到底是值传递还是引用传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-到底是值传递还是引用传递"}},[t._v("#")]),t._v(" Java 到底是值传递还是引用传递？")]),t._v(" "),e("p",[t._v("首先回顾一下在程序设计语言中有关将参数传递给方法(或函数)的一些专业术语。按值调用(call by value)表示方法接收的是调用者提供的值, 而按引用调用(call by reference)表示方法接收的是调用者提供的变量地址。一个方法可以修改传递引用所对应的变量值, 而不能修改传递值调用所对应的变量值。 它用来描述各种程序设计语言(不只是 Java)中方法参数传递方式。")]),t._v(" "),e("p",[t._v("Java 程序设计语言总是采用按值调用。也就是说, 方法得到的是所有参数值的一个拷贝, 也就是说, 方法不能修改传递给它的任何参数变量的内容。")]),t._v(" "),e("p",[t._v("java都是“值传递”即可,  关键看这个值是什么, 简单变量就是复制了具值, 引用变量就是复制了地址呗。字符串是不可变的")]),t._v(" "),e("h2",{attrs:{id:"修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/xiushifu.png",alt:"修饰符"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("关键字")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("用处")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("方法前")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("函数无返回值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("h2",{attrs:{id:"规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),e("p",[t._v("每个 java 源文件中允许有多个类。同时,  "),e("em",[t._v("源文件的名称必须要和其中一个类名相同")]),t._v(", , 否则编译器将会报错。每个独立的程序应该包含一个 "),e("code",[t._v("main()")]),t._v(" 方法作为程序运行的入口。其方法签名和返回类型如下。代码示例:")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("blockquote",[e("p",[t._v("运行 Java 程序")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("javac hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java\njava hello\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),e("ul",[e("li",[t._v("equals() 的默认行为是比较对象的引用而非具体内容")]),t._v(" "),e("li",[t._v("布尔表达式 ? 值 1 : 值 2\n若表达式计算为 true,  则返回结果 值 1 ;如果表达式的计算为 fals, , 则返回结果 值 2。")])]),t._v(" "),e("h2",{attrs:{id:"重写与重载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重写与重载"}},[t._v("#")]),t._v(" 重写与重载")]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("重载就是同样的一个方法能够根据输入数据的不同, 做出不同的处理")])])]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("重写就是当子类继承自父类的相同方法, 输入数据一样, 但要做出有别于父类的响应时, 你就要覆盖父类方法")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("区别点")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("重载方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("重写方法")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("发生范围")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("同一个类")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("子类")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("参数列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一定不能修改")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("返回类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("子类方法返回值类型应比父类方法返回值类型更小或相等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等;")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("访问修饰符")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可修改")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("一定不能做更严格的限制(可以降低限制)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("发生阶段")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编译期")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行期")])])])]),t._v(" "),e("h3",{attrs:{id:"重写-override"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重写-override"}},[t._v("#")]),t._v(" 重写(Override)")]),t._v(" "),e("p",[t._v("方法的重写要遵循“两同两小一大”")]),t._v(" "),e("ul",[e("li",[t._v("“两同”即方法名相同、形参列表相同;")]),t._v(" "),e("li",[t._v("“两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等, 子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等;")]),t._v(" "),e("li",[t._v("“一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。")])]),t._v(" "),e("p",[t._v("⭐️ 关于 重写的返回值类型 这里需要额外多说明一下, 上面的表述不太清晰准确:如果方法的返回类型是void和基本数据类型, 则返回值重写时不可修改。但是如果方法的返回值是引用类型, 重写时是可以返回该引用类型的子类的。")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("@Override")]),t._v(" 注解, 可以让编译器帮忙检查是否满足上面的三个限制条件。")]),t._v(" "),e("h3",{attrs:{id:"重载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重载"}},[t._v("#")]),t._v(" 重载")]),t._v(" "),e("blockquote",[e("p",[t._v("每个被重载的方法必须有独一无二的参数列表")])]),t._v(" "),e("p",[t._v("发生在同一个类中, 方法名必须相同, 参数类型不同、个数不同、顺序不同, 方法返回值和访问修饰符可以不同。")]),t._v(" "),e("p",[t._v("应该 "),e("strong",[t._v("注意")]),t._v(" 的是, "),e("code",[t._v("返回值不同, 其它都相同不算是重载。")])]),t._v(" "),e("h2",{attrs:{id:"垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),e("ul",[e("li",[t._v("标记-清扫")])]),t._v(" "),e("p",[t._v('"标记-清扫"所依据的思路仍然是从栈和静态存储区出发,  遍历所有的引, , 找出所有存活的对象。, 是, 每当找到一个存, 对象, 就给对象设, 个标记, 并不回收它。只有当标记, 程完成后, 清理动作才开始。, 清理过程中, 没有标记, 对象将被释放, 不会发生任何复制动作。"标记-清扫"后剩下的, 空间是不连续的, 垃圾回收器要是希, 得到连续空间的话, 就需要重新整理剩下的对象。')]),t._v(" "),e("h2",{attrs:{id:"类型强转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型强转"}},[t._v("#")]),t._v(" 类型强转")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" objBaseDataInfoFields "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" baseDataInfoFields"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" it "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("it"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);