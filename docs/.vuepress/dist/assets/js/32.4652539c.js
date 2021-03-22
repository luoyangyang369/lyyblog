(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{524:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("pm2 基本知识及常用命令\n")]),s._v(" "),a("h3",{attrs:{id:"基本知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本知识"}},[s._v("#")]),s._v(" 基本知识")]),s._v(" "),a("p",[s._v("PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。")]),s._v(" "),a("h5",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("配置文件里的设置项，跟命令行参数基本是一一对应的。\n可以选择yaml或者json文件，就看个人洗好了。\njson格式的配置文件，pm2当作普通的js文件来处理，所以可以在里面添加注释或者编写代码，这对于动态调整配置很有好处。\n如果启动的时候指定了配置文件，那么命令行参数会被忽略。（个别参数除外，比如--env）\n\nPM2配置文件夹结构    一旦PM2启动，自动创建这些文件夹：\n$HOME/.pm2 将包含所有与PM2相关的文件\n$HOME/.pm2/logs 将包含所有应用程序日志  // out标准输出  error 错误输出\n$HOME/.pm2/pids 将包含所有应用程序pid\n$HOME/.pm2/pm2.log PM2日志  // pm2自身日志，如谁用了那个命令\n$HOME/.pm2/pm2.pid PM2 pid\n$HOME/.pm2/rpc.sock 远程命令的套接字文件\n$HOME/.pm2/pub.sock 用于可发布事件的套接字文件\n$HOME/.pm2/conf.js PM2配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h5",{attrs:{id:"启动文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动文件"}},[s._v("#")]),s._v(" 启动文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('配置pm2启动文件  \n生成示例生态系统.json文件，其中列出了进程和部署环境\n$ pm2 ecosystem；这将生成一个示例ecosystem.config.js\n根据需要再次编辑文件\n{\n  "apps": [  // json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用\n    {\n      "name": "mywork",  // 应用程序名称\n      "cwd": "/srv/node-app/current",  // 应用程序所在的目录\n      "script": "bin/www",  // 应用程序的脚本路径\n      "log_date_format": "YYYY-MM-DD HH:mm Z",  \n      "error_file": "/var/log/node-app/node-app.stderr.log",  // 错误日志\n      "out_file": "log/node-app.stdout.log",  //  自定义应用程序日志文件\n      "pid_file": "pids/node-geo-api.pid",  // 自定义应用程序的pid文件\n      "instances": 6,\n      "min_uptime": "200s",  // 最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量\n      "max_restarts": 10,    // 设置应用程序异常退出重启的次数，默认15次（从0开始计数）\n      "max_memory_restart": "1M",  // 服务内存超过1M，会自动重启\n      "cron_restart": "1 0 * * *",  // 定时启动，解决重启能解决的问题\n      "watch": false,  // 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；\n      "merge_logs": true,\n      "exec_interpreter": "node",\n      "exec_mode": "fork",  // 应用启动模式，支持fork和cluster模式；\n      "autorestart": false,  // 默认为true, 发生异常的情况下自动重启；\n      "vizion": false\n    }\n  ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"工作常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作常用命令"}},[s._v("#")]),s._v(" 工作常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("启动项目：pm2 start ecosystem.config.js--env development\n实时日志打印：pm2 logs youke\n查看项目状态：pm2 show youke\n停止项目：pm2 stop youke\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('重启：pm2 restart ecosystem.config.js\npm2 reload；与restart杀死并重新启动进程的相对，reload实现了0秒的停机时间重载。\npm2 [list|ls|l|status]\n查看启动程序的详细信息：pm2 describe id\npm2 monit：可以得到进程(以及集群)的CPU的使用率和内存占用(ctrl +c 退出)\n\n启动项目：pm2 start ecosystem.config.js --watch\n--watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。\n-i --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。\n--ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。\n        比如--ignore-watch="test node_modules "some scripts""\n-n --name：应用的名称。查看应用信息的时候可以用到。\n-o --output <path>：标准输出日志文件的路径。\n-e --error <path>：错误输出日志文件的路径。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://wohugb.gitbooks.io/pm2/content/bu_shu.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2教程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);