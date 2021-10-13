(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{545:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jvm指令手册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jvm指令手册"}},[s._v("#")]),s._v(" JVM指令手册")]),s._v(" "),n("h2",{attrs:{id:"一、栈和局部变量操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、栈和局部变量操作"}},[s._v("#")]),s._v(" 一、栈和局部变量操作")]),s._v(" "),n("h3",{attrs:{id:"将常量压入栈的指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将常量压入栈的指令"}},[s._v("#")]),s._v(" 将常量压入栈的指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("aconst_null 将null对象引用压入栈\niconst_m1 将int类型常量-1压入栈\niconst_0 将int类型常量0压入栈\niconst_1 将int类型常量1压入栈\niconst_2 将int类型常量2压入栈\niconst_3 将int类型常量3压入栈\niconst_4 将int类型常量4压入栈\niconst_5 将int类型常量5压入栈\nlconst_0 将long类型常量0压入栈\nlconst_1 将long类型常量1压入栈\nfconst_0 将float类型常量0压入栈\nfconst_1 将float类型常量1压入栈\ndconst_0 将double类型常量0压入栈\ndconst_1 将double类型常量1压入栈\nbipush 将一个8位带符号整数压入栈\nsipush 将16位带符号整数压入栈\nldc 把常量池中的项压入栈\nldc_w 把常量池中的项压入栈（使用宽索引）\nldc2_w 把常量池中long类型或者double类型的项压入栈（使用宽索引）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"从栈中的局部变量中装载值的指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从栈中的局部变量中装载值的指令"}},[s._v("#")]),s._v(" 从栈中的局部变量中装载值的指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("iload 从局部变量中装载int类型值\nlload 从局部变量中装载long类型值\nfload 从局部变量中装载float类型值\ndload 从局部变量中装载double类型值\naload 从局部变量中装载引用类型值（refernce）\niload_0 从局部变量0中装载int类型值\niload_1 从局部变量1中装载int类型值\niload_2 从局部变量2中装载int类型值\niload_3 从局部变量3中装载int类型值\nlload_0 从局部变量0中装载long类型值\nlload_1 从局部变量1中装载long类型值\nlload_2 从局部变量2中装载long类型值\nlload_3 从局部变量3中装载long类型值\nfload_0 从局部变量0中装载float类型值\nfload_1 从局部变量1中装载float类型值\nfload_2 从局部变量2中装载float类型值\nfload_3 从局部变量3中装载float类型值\ndload_0 从局部变量0中装载double类型值\ndload_1 从局部变量1中装载double类型值\ndload_2 从局部变量2中装载double类型值\ndload_3 从局部变量3中装载double类型值\naload_0 从局部变量0中装载引用类型值\naload_1 从局部变量1中装载引用类型值\naload_2 从局部变量2中装载引用类型值\naload_3 从局部变量3中装载引用类型值\niaload 从数组中装载int类型值\nlaload 从数组中装载long类型值\nfaload 从数组中装载float类型值\ndaload 从数组中装载double类型值\naaload 从数组中装载引用类型值\nbaload 从数组中装载byte类型或boolean类型值\ncaload 从数组中装载char类型值\nsaload 从数组中装载short类型值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("h3",{attrs:{id:"将栈中的值存入局部变量的指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将栈中的值存入局部变量的指令"}},[s._v("#")]),s._v(" 将栈中的值存入局部变量的指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("istore 将int类型值存入局部变量\nlstore 将long类型值存入局部变量\nfstore 将float类型值存入局部变量\ndstore 将double类型值存入局部变量\nastore 将将引用类型或returnAddress类型值存入局部变量\nistore_0 将int类型值存入局部变量0\nistore_1 将int类型值存入局部变量1\nistore_2 将int类型值存入局部变量2\nistore_3 将int类型值存入局部变量3\nlstore_0 将long类型值存入局部变量0\nlstore_1 将long类型值存入局部变量1\nlstore_2 将long类型值存入局部变量2\nlstore_3 将long类型值存入局部变量3\nfstore_0 将float类型值存入局部变量0\nfstore_1 将float类型值存入局部变量1\nfstore_2 将float类型值存入局部变量2\nfstore_3 将float类型值存入局部变量3\ndstore_0 将double类型值存入局部变量0\ndstore_1 将double类型值存入局部变量1\ndstore_2 将double类型值存入局部变量2\ndstore_3 将double类型值存入局部变量3\nastore_0 将引用类型或returnAddress类型值存入局部变量0\nastore_1 将引用类型或returnAddress类型值存入局部变量1\nastore_2 将引用类型或returnAddress类型值存入局部变量2\nastore_3 将引用类型或returnAddress类型值存入局部变量3\niastore 将int类型值存入数组中\nlastore 将long类型值存入数组中\nfastore 将float类型值存入数组中\ndastore 将double类型值存入数组中\naastore 将引用类型值存入数组中\nbastore 将byte类型或者boolean类型值存入数组中\ncastore 将char类型值存入数组中\nsastore 将short类型值存入数组中\nwide指令\nwide 使用附加字节扩展局部变量索引\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"通用-无类型-栈操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通用-无类型-栈操作"}},[s._v("#")]),s._v(" 通用(无类型）栈操作")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nop 不做任何操作\npop 弹出栈顶端一个字长的内容\npop2 弹出栈顶端两个字长的内容\ndup 复制栈顶部一个字长内容\ndup_x1 复制栈顶部一个字长的内容，然后将复制内容及原来弹出的两个字长的内容压入栈\ndup_x2 复制栈顶部一个字长的内容，然后将复制内容及原来弹出的三个字长的内容压入栈\ndup2 复制栈顶部两个字长内容\ndup2_x1 复制栈顶部两个字长的内容，然后将复制内容及原来弹出的三个字长的内容压入栈\ndup2_x2 复制栈顶部两个字长的内容，然后将复制内容及原来弹出的四个字长的内容压入栈\nswap 交换栈顶部两个字长内容\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"二、类型转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、类型转换"}},[s._v("#")]),s._v(" 二、类型转换")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("i2l 把int类型的数据转化为long类型\ni2f 把int类型的数据转化为float类型\ni2d 把int类型的数据转化为double类型\nl2i 把long类型的数据转化为int类型\nl2f 把long类型的数据转化为float类型\nl2d 把long类型的数据转化为double类型\nf2i 把float类型的数据转化为int类型\nf2l 把float类型的数据转化为long类型\nf2d 把float类型的数据转化为double类型\nd2i 把double类型的数据转化为int类型\nd2l 把double类型的数据转化为long类型\nd2f 把double类型的数据转化为float类型\ni2b 把int类型的数据转化为byte类型\ni2c 把int类型的数据转化为char类型\ni2s 把int类型的数据转化为short类型\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"三、整数运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、整数运算"}},[s._v("#")]),s._v(" 三、整数运算")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("iadd 执行int类型的加法\nladd 执行long类型的加法\nisub 执行int类型的减法\nlsub 执行long类型的减法\nimul 执行int类型的乘法\nlmul 执行long类型的乘法\nidiv 执行int类型的除法\nldiv 执行long类型的除法\nirem 计算int类型除法的余数\nlrem 计算long类型除法的余数\nineg 对一个int类型值进行取反操作\nlneg 对一个long类型值进行取反操作\niinc 把一个常量值加到一个int类型的局部变量上\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"四、逻辑运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、逻辑运算"}},[s._v("#")]),s._v(" 四、逻辑运算")]),s._v(" "),n("h3",{attrs:{id:"移位操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#移位操作"}},[s._v("#")]),s._v(" 移位操作")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ishl 执行int类型的向左移位操作\nlshl 执行long类型的向左移位操作\nishr 执行int类型的向右移位操作\nlshr 执行long类型的向右移位操作\niushr 执行int类型的向右逻辑移位操作\nlushr 执行long类型的向右逻辑移位操作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"按位布尔运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按位布尔运算"}},[s._v("#")]),s._v(" 按位布尔运算")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("iand 对int类型值进行“逻辑与”操作\nland 对long类型值进行“逻辑与”操作\nior 对int类型值进行“逻辑或”操作\nlor 对long类型值进行“逻辑或”操作\nixor 对int类型值进行“逻辑异或”操作\nlxor 对long类型值进行“逻辑异或”操作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"浮点运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浮点运算"}},[s._v("#")]),s._v(" 浮点运算")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("fadd 执行float类型的加法\ndadd 执行double类型的加法\nfsub 执行float类型的减法\ndsub 执行double类型的减法\nfmul 执行float类型的乘法\ndmul 执行double类型的乘法\nfdiv 执行float类型的除法\nddiv 执行double类型的除法\nfrem 计算float类型除法的余数\ndrem 计算double类型除法的余数\nfneg 将一个float类型的数值取反\ndneg 将一个double类型的数值取反\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"五、对象和数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、对象和数组"}},[s._v("#")]),s._v(" 五、对象和数组")]),s._v(" "),n("h3",{attrs:{id:"对象操作指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象操作指令"}},[s._v("#")]),s._v(" 对象操作指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("new 创建一个新对象\ncheckcast 确定对象为所给定的类型。后跟目标类，判断栈顶元素是否为目标类 / 接口的实例。如果不是便抛出异常\ngetfield 从对象中获取字段\nputfield 设置对象中字段的值\ngetstatic 从类中获取静态字段\nputstatic 设置类中静态字段的值\ninstanceof 判断对象是否为给定的类型。后跟目标类，判断栈顶元素是否为目标类 / 接口的实例。是则压入 1，否则压入 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"数组操作指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组操作指令"}},[s._v("#")]),s._v(" 数组操作指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("newarray 分配数据成员类型为基本上数据类型的新数组\nanewarray 分配数据成员类型为引用类型的新数组\narraylength 获取数组长度\nmultianewarray 分配新的多维数组\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"六、控制流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、控制流"}},[s._v("#")]),s._v(" 六、控制流")]),s._v(" "),n("h3",{attrs:{id:"条件分支指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件分支指令"}},[s._v("#")]),s._v(" 条件分支指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ifeq 如果等于0，则跳转\nifne 如果不等于0，则跳转\niflt 如果小于0，则跳转\nifge 如果大于等于0，则跳转\nifgt 如果大于0，则跳转\nifle 如果小于等于0，则跳转\nif_icmpcq 如果两个int值相等，则跳转\nif_icmpne 如果两个int类型值不相等，则跳转\nif_icmplt 如果一个int类型值小于另外一个int类型值，则跳转\nif_icmpge 如果一个int类型值大于或者等于另外一个int类型值，则跳转\nif_icmpgt 如果一个int类型值大于另外一个int类型值，则跳转\nif_icmple 如果一个int类型值小于或者等于另外一个int类型值，则跳转\nifnull 如果等于null，则跳转\nifnonnull 如果不等于null，则跳转\nif_acmpeq 如果两个对象引用相等，则跳转\nif_acmpnc 如果两个对象引用不相等，则跳转\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"比较指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#比较指令"}},[s._v("#")]),s._v(" 比较指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("lcmp 比较long类型值\nfcmpl 比较float类型值（当遇到NaN时，返回-1）\nfcmpg 比较float类型值（当遇到NaN时，返回1）\ndcmpl 比较double类型值（当遇到NaN时，返回-1）\ndcmpg 比较double类型值（当遇到NaN时，返回1）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"无条件转移指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无条件转移指令"}},[s._v("#")]),s._v(" 无条件转移指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("goto 无条件跳转\ngoto_w 无条件跳转（宽索引）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"表跳转指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表跳转指令"}},[s._v("#")]),s._v(" 表跳转指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("tableswitch 通过索引访问跳转表，并跳转\nlookupswitch 通过键值匹配访问跳转表，并执行跳转操作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[s._v("#")]),s._v(" 异常")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("athrow 抛出异常或错误。将栈顶异常抛出\nfinally子句\njsr 跳转到子例程\njsr_w 跳转到子例程（宽索引）\nrct 从子例程返回\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"七、方法调用与返回"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、方法调用与返回"}},[s._v("#")]),s._v(" 七、方法调用与返回")]),s._v(" "),n("h3",{attrs:{id:"方法调用指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法调用指令"}},[s._v("#")]),s._v(" 方法调用指令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("invokcvirtual 运行时按照对象的类来调用实例方法\ninvokespecial 根据编译时类型来调用实例方法\ninvokestatic 调用类（静态）方法\ninvokcinterface 调用接口方法\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"方法返回指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法返回指令"}},[s._v("#")]),s._v(" 方法返回指令")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ireturn 从方法中返回int类型的数据\nlreturn 从方法中返回long类型的数据\nfreturn 从方法中返回float类型的数据\ndreturn 从方法中返回double类型的数据\nareturn 从方法中返回引用类型的数据\nreturn 从方法中返回，返回值为void\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"线程同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程同步"}},[s._v("#")]),s._v(" 线程同步")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("montiorenter 进入并获取对象监视器。即：为栈顶对象加锁\nmonitorexit 释放并退出对象监视器。即：为栈顶对象解锁\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"八、jvm指令助记符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、jvm指令助记符"}},[s._v("#")]),s._v(" 八、JVM指令助记符")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("变量到操作数栈：iload,iload_,lload,lload_,fload,fload_,dload,dload_,aload,aload_\n操作数栈到变量：istore,istore_,lstore,lstore_,fstore,fstore_,dstore,dstor_,astore,astore_\n常数到操作数栈：bipush,sipush,ldc,ldc_w,ldc2_w,aconst_null,iconst_ml,iconst_,lconst_,fconst_,dconst_\n加：iadd,ladd,fadd,dadd\n减：isub,lsub,fsub,dsub\n乘：imul,lmul,fmul,dmul\n除：idiv,ldiv,fdiv,ddiv\n余数：irem,lrem,frem,drem\n取负：ineg,lneg,fneg,dneg\n移位：ishl,lshr,iushr,lshl,lshr,lushr\n按位或：ior,lor\n按位与：iand,land\n按位异或：ixor,lxor\n类型转换：i2l,i2f,i2d,l2f,l2d,f2d(放宽数值转换)\ni2b,i2c,i2s,l2i,f2i,f2l,d2i,d2l,d2f(缩窄数值转换)\n创建类实便：new\n创建新数组：newarray,anewarray,multianwarray\n访问类的域和类实例域：getfield,putfield,getstatic,putstatic\n把数据装载到操作数栈：baload,caload,saload,iaload,laload,faload,daload,aaload\n从操作数栈存存储到数组：bastore,castore,sastore,iastore,lastore,fastore,dastore,aastore\n获取数组长度：arraylength\n检相类实例或数组属性：instanceof,checkcast\n操作数栈管理：pop,pop2,dup,dup2,dup_xl,dup2_xl,dup_x2,dup2_x2,swap\n有条件转移：ifeq,iflt,ifle,ifne,ifgt,ifge,ifnull,ifnonnull,if_icmpeq,if_icmpene,\nif_icmplt,if_icmpgt,if_icmple,if_icmpge,if_acmpeq,if_acmpne,lcmp,fcmpl\nfcmpg,dcmpl,dcmpg\n复合条件转移：tableswitch,lookupswitch\n无条件转移：goto,goto_w,jsr,jsr_w,ret\n调度对象的实便方法：invokevirtual\n调用由接口实现的方法：invokeinterface\n调用需要特殊处理的实例方法：invokespecial\n调用命名类中的静态方法：invokestatic\n方法返回：ireturn,lreturn,freturn,dreturn,areturn,return\n异常：athrow\nfinally关键字的实现使用：jsr,jsr_w,ret\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);