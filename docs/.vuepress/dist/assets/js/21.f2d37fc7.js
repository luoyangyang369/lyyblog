(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{520:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("工作中常用的 MySQL 命令\n")]),s._v(" "),e("h2",{attrs:{id:"工作常用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作常用"}},[s._v("#")]),s._v(" 工作常用")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://images.cnblogs.com/cnblogs_com/luoyangyang/1573981/t_191202083121SQL%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B.jpg",alt:"sql查询过程"}})]),s._v(" "),e("h3",{attrs:{id:"基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("登录：mysql -h -uroot -p\nshow databases;  use youke;  show tables;  desc 表名;  exit;\n查看MySQL版本, 进到MySQL命令行执行：select @@version;\norder by：排序 默认升序即A-Z 降序需指定DESC。且order by可指定多个值, 先排一次序再排一次\nlimit：限制输出, 可指定n, 也可为n,m  从n开始取m个\n\nMySQL语法顺序：SELECT[DISTINCT] => FROM => WHERE => GROUP BY => HAVING => UNION => \nORDER BY => limit\n\n执行顺序：FROM => JOIN => ON => WHERE => GROUP BY(开始使用select中的别名, 后面的语句中都可以使用) =>\navg,sum... => HAVING => SELECT => DISTINCT => UNION => ORDER BY => LIMIT\n从from开始\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"针对表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对表"}},[s._v("#")]),s._v(" 针对表")]),s._v(" "),e("p",[s._v("创建表 node这个数据库里面创建一个user表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("创建：\nCREATE TABLE `node`.`nodeuser`(\n    `id` INT(11) NOT NULL AUTO_INCREMENT,  # id字段 int(11)数据类型, 最大的值为11位 id自动增长\n    `username` varchar(64) NOT NULL,\n    `pass` varchar(64) NOT NULL,\n    PRIMARY KEY(`id`)  # 重要 主键\n)\nENGINE = InnoDB CHARSET = utf8;\n增加字段：ALTER TABLE account ADD status int(11) NOT NULL DEFAULT 0;\n删除字段：ALTER TABLE <表名> DROP <字段名称>\n修改表名称：ALTER TABLE <表名> RENAME <新表名>\n字段增加长度：alter table 表名 modify column 列名 类型(要修改的长度);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"针对数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对数据"}},[s._v("#")]),s._v(" 针对数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("INSERT INTO 'user' (`id`, 'username', 'pass') values (1, 'goudan', '123');  # 增 固定代码 哪个表\nDELETE FROM user where id = 0  # 删 删article表的数据 因为id是唯一的\nupdate `xxx` set `username`=`1234` where `id`=6666;  # 改\nSELECT * FORM `shuoshuo` WHERE `id`=?  # 查\n查询：\n    过滤：加 distinct, 如 select distinct roomid from audio_pos;\n    区间查找：between and, 如：select * from audio_pos where id between 2600 and 2650;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"针对索引-约束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#针对索引-约束"}},[s._v("#")]),s._v(" 针对索引 约束")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("查询：show index from table_name\n新增索引：ALTER TABLE table_name ADD INDEX index_name (column_list)\n删除索引：DROP INDEX index_name ON talbe_name\n增加唯一约束：alter table change_reward add unique key(orderid);(**注意**：一定要将表里的orderid先改为不一样的, 不然添加失败)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"常用操作总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用操作总结"}},[s._v("#")]),s._v(" 常用操作总结")]),s._v(" "),e("ul",[e("li",[s._v("让别人访问自己的MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("登录MySQL：mysql -u root -pvmwaremysql>use mysql;\nmysql>update user set host = '%' where user = 'root';\nmysql>select host, user from user;\n重启MySQL服务：Windows可从服务重启\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("存在既更新, 不存在就添加")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("INSERT 语句的一部分,如果指定 ON DUPLICATE KEY UPDATE , 并且插入行后会导致在一个**UNIQUE索引或PRIMARY KEY中出现重复值**, 则在出现重复值的行执行UPDATE, 如果不会导致唯一值列重复的问题, 则插入新行\nsql 语句原型：\ninsert into audio_favor(openid, audioid, status) values(?, ?, ?) on duplicate key update status=status+?\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("if 判断")])]),s._v(" "),e("p",[s._v("语法：IF(expr1,expr2,expr3)  expr1 是TRUE则返回2 否则返回3\nupdate audio_pos set favor_cnt=if(favor_cnt=0, 0, favor_cnt-1) where id=?")]),s._v(" "),e("ul",[e("li",[s._v("导入导出表数据\nmysqldunp  参数：-d 不导出任何数据, 只导出数据库表结构。-t 只导出数据, 而不添加CREATE TABLE 语句。")])]),s._v(" "),e("p",[s._v("导出整个数据库结构和数据(-p 密码一般不输入, 后面再输入)\nmysqldump -h localhost -uroot -p123456 database > dump.sql\nmysqldump -h localhost -uroot -p123456  -d database > dump.sql(不包含数据)")]),s._v(" "),e("p",[s._v("导出单个数据表结构和数据\nmysqldump -h localhost -uroot -p123456  database table > dump.sql\nmysqldump -h localhost -uroot -p123456  -d database table > dump.sql(不包含数据)")]),s._v(" "),e("p",[s._v("导入数据\nmysql -uroot -p123456 -d database < database.sql")]),s._v(" "),e("h3",{attrs:{id:"其他操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他操作"}},[s._v("#")]),s._v(" 其他操作")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ ./mysqldump -uyouke_write -p -h 10.66.92.228 -d youke > /home/lyy/db.sql  # 导出表结构\n导入表结构, 进入数据库, 进入某一库, 执行 source xxx.sql\n查看索引：show index from tblname; 等同于show keys from tblname;\nselect version();  查看MySQL版本\nshow create table audio_pos;查看创建table的SQL\n\n当更新某一字段状态, 位操作：如何将一个变量其中一位清0, 置1\nMySQL：\n    第一位为1 val=(val |= (1<<0))  取消 val=(val & ~(1<<0))\n    第二位为1 val=(val |= (1<<1))  取消 val=(val & ~(1<<1))\nJS：\n    第一位为1 val |= (1<<0)  取消 val &= ~(1<<0)\n    第二位为1 val |= (1<<1)  取消 val &= ~(1<<1)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"相关知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关知识"}},[s._v("#")]),s._v(" 相关知识")]),s._v(" "),e("p",[s._v("笛卡尔积：由没有联结条件的表关系返回的结果为笛卡尔积。检索出来的数目将是第一个表中的行数乘以第二个表的行数")]),s._v(" "),e("h3",{attrs:{id:"关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[s._v("#")]),s._v(" 关键字")]),s._v(" "),e("ul",[e("li",[s._v("where & having")])]),s._v(" "),e("p",[s._v("where 用来过滤数据 而having用来过滤分组 即where=>group by=>having。where过滤的值不包括在分组中")]),s._v(" "),e("ul",[e("li",[s._v("group by & order by")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("group by为分组行, 但输出可能不是分组的顺序。")])]),s._v(" "),e("li",[e("p",[s._v("只可能使用选择列或表达式列, 而且必须使用每个选择列表达式。")])]),s._v(" "),e("li",[e("p",[s._v("如果与聚集函数一起使用列(或表达式), 则必须使用")])]),s._v(" "),e("li",[e("p",[s._v("order by为排序产生的输出")])]),s._v(" "),e("li",[e("p",[s._v("任意列都可以使用(甚至非选择列也可以使用)")])]),s._v(" "),e("li",[e("p",[s._v("不一定需要")])])]),s._v(" "),e("h3",{attrs:{id:"字段类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段类型"}},[s._v("#")]),s._v(" 字段类型")]),s._v(" "),e("ul",[e("li",[s._v("int\nint代表整型, 11代表字段的长度。\nint(M) M指示最大显示宽度。最大有效显示宽度是255。显示宽度与存储大小或类型包含的值的范围无关")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MySQL字段类型：-2 147 483 648 ～ 2 147 483 647,  INT UNSIGNED的范围类型就是0 ～ 4 294 967 295。\ninsert on duplicate key update 比 replace快, 原因是索引方面\n\n1. 如果Key是空的, 那么该列值的可以重复, 表示该列没有索引, 或者是一个非唯一的复合索引的非前导列\n2. 如果Key是PRI,  那么该列是主键的组成部分\n3. 如果Key是UNI,  那么该列是一个唯一值索引的第一列(前导列),并别不能含有空值(NULL)\n4. 如果Key是MUL,  那么该列的值可以重复, 该列是一个非唯一索引的前导列(第一列)\n或者是一个唯一性索引的组成部分但是可以含有空值NULL\n如果对于一个列的定义, 同时满足上述4种情况的多种, 比如一个列既是PRI,又是UNI\n那么"desc 表名"的时候, 显示的Key值按照优先级来显示 PRI->UNI->MUL\n那么此时, 显示PRI\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"mysql之触发器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql之触发器"}},[s._v("#")]),s._v(" mysql之触发器")]),s._v(" "),e("p",[s._v("触发器用来在某些操作之后, “自动”执行一些操作。(比如插入了新的学生信息, 那么在班级表中应该修改学生数)。")]),s._v(" "),e("p",[s._v("当insert delete update设置触发器之后, 执行insert delete update操作就会自动触发设置的内容。")]),s._v(" "),e("h3",{attrs:{id:"mysql之视图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql之视图"}},[s._v("#")]),s._v(" mysql之视图")]),s._v(" "),e("ul",[e("li",[s._v("视图是一种基于查询结果的虚拟表, 数据来源的表称为基本表。")]),s._v(" "),e("li",[s._v("视图的建立和删除不影响基本表。")]),s._v(" "),e("li",[s._v("视图的插入, 修改操作会影响基本表。")]),s._v(" "),e("li",[s._v("如果视图来自多个基本表, 那么不可以修改基本表。")]),s._v(" "),e("li",[s._v("视图的用处：")])]),s._v(" "),e("p",[s._v("1.视图基于查询结果, 使得视图可以隐藏基本表一些不该展示给用户的数据信息(比如某个开发人员需要用户信息表, 但不应该展示给他用户的密码信息。)\n2.视图是一个虚拟表, 可以将查询信息存储到视图中, 这样可以便于操作。")]),s._v(" "),e("h3",{attrs:{id:"mysql之存储过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql之存储过程"}},[s._v("#")]),s._v(" mysql之存储过程")]),s._v(" "),e("ul",[e("li",[s._v("存储过程存储了一系列sql语句, 使得简化了操作, 不要求重复执行一系列操作。只需要在需要的时候调用一下存储过程就行了。")]),s._v(" "),e("li",[s._v("一般来说, 可以认为存储过程的功能与函数的功能类似(应该都学过函数吧), 但只是要注意存储过程没有返回值, 所以可以依据函数可用场景来理解存储过程。")]),s._v(" "),e("li",[s._v("调用存储过程：call 存储过程名();")])]),s._v(" "),e("h4",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),e("p",[e("strong",[s._v("存储过程与触发器的区别")]),s._v("：触发器触发事件就执行一系列语句；而存储过程是调用, 而且存储过程还要根据情况考虑执行“另外一系列语句”。")]),s._v(" "),e("p",[e("strong",[s._v("存储过程与函数的区别")]),s._v("：函数有返回值,而存储过程没有【所以不能使用在select语句中】")]),s._v(" "),e("h3",{attrs:{id:"mysql之自定义函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql之自定义函数"}},[s._v("#")]),s._v(" mysql之自定义函数")]),s._v(" "),e("ul",[e("li",[s._v("函数存储着一系列sql语句, 调用函数就是一次性执行这些语句。所以函数可以降低语句重复。【但注意的是函数注重返回值, 不注重执行过程, 所以一些语句无法执行。所以函数并不是单纯的sql语句集合。】")]),s._v(" "),e("li",[s._v("mysql函数有自己的自定义函数(已经定义好了的函数), 详情参考："),e("a",{attrs:{href:"https://www.cnblogs.com/progor/p/8832663.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql之常用函数"),e("OutboundLink")],1)])]),s._v(" "),e("p",[e("strong",[s._v("函数与存储过程的区别")]),s._v("：函数只会返回一个值, 不允许返回一个结果集。函数强调返回值, 所以函数不允许返回多个值的情况, 即使是查询语句。")]),s._v(" "),e("h2",{attrs:{id:"重点链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重点链接"}},[s._v("#")]),s._v(" 重点链接")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://static001.geekbang.org/resource/image/0d/d9/0d2070e8f84c4801adbfa03bda1f98d9.png",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL总览图"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/qq_41307443/article/details/79839558",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL Windows安装"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://www.cnblogs.com/RayWang/p/9347874.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL安装问题"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://segmentfault.com/a/1190000008131735",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL explain详解"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://cyc2018.github.io/CS-Notes/#/notes/MySQL",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL相关知识"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/YMxLYbVuF_7rfaawp8flOA",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL优化方案"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);