(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{525:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/31203609",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 到底是值传递还是引用传递？"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://lingcoder.github.io/OnJava8/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《On Java 8》中文版"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://wizardforcel.gitbooks.io/thinking-in-java/content/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 编程思想"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"万物皆对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#万物皆对象"}},[t._v("#")]),t._v(" 万物皆对象")]),t._v(" "),s("h3",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[t._v("在 Java 中，方法决定对象能接收哪些消息。方法的基本组成部分包括名称、参数、返回类型、方法体。格式如:")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("函数返回类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("方法名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*参数列表*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法体")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"返回类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回类型"}},[t._v("#")]),t._v(" 返回类型")]),t._v(" "),s("p",[t._v("方法的返回类型表明了当你调用它时会返回的结果类型。参数列表则显示了可被传递到方法内部的参数类型及名称。方法名和参数列表统称为方法签名（signature of the method）。签名作为方法的唯一标识。")]),t._v(" "),s("h4",{attrs:{id:"java-到底是值传递还是引用传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-到底是值传递还是引用传递"}},[t._v("#")]),t._v(" Java 到底是值传递还是引用传递？")]),t._v(" "),s("p",[t._v("java都是“值传递”即可，关键看这个值是什么，简单变量就是复制了具体值，引用变量就是复制了地址呗。字符串是不可变的")]),t._v(" "),s("h2",{attrs:{id:"关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[t._v("#")]),t._v(" 关键字")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("关键字")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("用处")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("void")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("方法前")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("函数无返回值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("static")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("变量方法前")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("字段或方法不依赖于任何特定的对象实例")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("h2",{attrs:{id:"规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[t._v("#")]),t._v(" 规范")]),t._v(" "),s("p",[t._v("每个 java 源文件中允许有多个类。同时，"),s("strong",[t._v("源文件的名称必须要和其中一个类名相同")]),t._v("，否则编译器将会报错。每个独立的程序应该包含一个 "),s("code",[t._v("main()")]),t._v(" 方法作为程序运行的入口。其方法签名和返回类型如下。代码示例:")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("p",[t._v("运行 Java 程序")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("javac hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("java\njava hello\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("equals() 的默认行为是比较对象的引用而非具体内容\n布尔表达式 ? 值 1 : 值 2\n若表达式计算为 true，则返回结果 值 1 ；如果表达式的计算为 false，则返回结果 值 2。")])])}),[],!1,null,null,null);a.default=n.exports}}]);