(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{510:function(a,r,t){"use strict";t.r(r);var e=t(6),n=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[a._v("#")]),a._v(" 相关命令")]),a._v(" "),t("p",[a._v("查看位数：getconf LONG_BIT\n查看版本：cat /etc/redhat-release")]),a._v(" "),t("h2",{attrs:{id:"rpm和yum的关系以及基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm和yum的关系以及基本用法"}},[a._v("#")]),a._v(" rpm和yum的关系以及基本用法")]),a._v(" "),t("h3",{attrs:{id:"rpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[a._v("#")]),a._v(" rpm")]),a._v(" "),t("p",[a._v("RPM是RedHat Package Manager(RedHat软件包管理工具)类似Windows里面的“添加/删除程序”\nrpm 执行安装包\n二进制包(Binary)以及源代码包(Source)两种。二进制包可以直接安装在计算机中, 而源代码包将会由RPM自动编译、安装。源代码包经常以src.rpm作为后缀名。")]),a._v(" "),t("h4",{attrs:{id:"解压-rpm-包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压-rpm-包"}},[a._v("#")]),a._v(" 解压 rpm 包")]),a._v(" "),t("p",[a._v("RPM包括是使用cpio格式打包的, 因此可以先转成cpio然后解压, 如下所示：\nrpm2cpio xxx.rpm | cpio -div\n解压后 里面会有 .spec 文件, 是该包的描述文件")]),a._v(" "),t("h3",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[a._v("#")]),a._v(" Yum")]),a._v(" "),t("p",[a._v("Yum(全称为 Yellow dog Updater, Modified)是一个在Fedora中的Shell前端软件包管理器。基於RPM包管理, 能够从指定的服务器自动下载RPM包并且安装, 可以自动处理 依赖性关系, 并且一次安装所有依赖的软体包, 无须繁琐地一次次下载、安装。")]),a._v(" "),t("p",[a._v("yum会查询数据库, 有无这一软件包, 如果有, 则检查其依赖冲突关系, 如果没有依赖冲突, 下载安装;如果有, 则会给出提示, 询问是否要同时安装依赖, 或删除冲突的包, 你可以自己作出判断。")]),a._v(" "),t("h2",{attrs:{id:"软件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件安装"}},[a._v("#")]),a._v(" 软件安装")]),a._v(" "),t("ul",[t("li",[a._v("源码安装\n源码的安装一般由3个步骤组成：配置(configure)、编译(make)、安装(make install)。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ tar zxvf XXXX.tar.gz (or tar jxvf XXXX.tar.bz2)\n$ cd XXXX\n$ ./configure\n$ make\n$ make install\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("清理安装后的临时文件：")]),a._v(" "),t("blockquote",[t("p",[a._v("$ make clean")])]),a._v(" "),t("p",[a._v("卸载软件")]),a._v(" "),t("blockquote",[t("p",[a._v("make uninstall")])]),a._v(" "),t("h4",{attrs:{id:"步骤如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤如下"}},[a._v("#")]),a._v(" 步骤如下")]),a._v(" "),t("p",[a._v("1、 下载源码包\n2、 解压包\n3、 设置软件的安装目录：$ ./configure --prefix=/opt/XXX\n检查configure返回结果, 为0代表运行成功：")]),a._v(" "),t("blockquote",[t("p",[a._v("$ echo $?\n0")])]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.kancloud.cn/chandler/bc-linux/55602",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux笔记"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/linux/l-rpm/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("RPM 打包技术与典型 SPEC 文件分析"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/huangfei711/article/details/53044539",target:"_blank",rel:"noopener noreferrer"}},[a._v("添加环境变量"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);