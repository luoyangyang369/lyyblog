(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{526:function(e,r,t){"use strict";t.r(r);var a=t(6),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://elemefe.github.io/node-interview/#/sections/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("饿了么面试"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5940a9c3128fe1006a0ab176",target:"_blank",rel:"noopener noreferrer"}},[e._v("node流的概念"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://nodejs.cn/learn",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 简介"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"基本语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[e._v("#")]),e._v(" 基本语法")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("for 或者 foreach 进行循环获取数组值\nvar array = ['a', 'b', 'c', 'd'];\nfor (var i = 0; i < array.length; i++)\narray.forEach(function (element)")])]),e._v(" "),t("li",[t("p",[e._v("for..in 遍历对象属性（或索引）\nfor (var key in array)")])])]),e._v(" "),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" npm")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/cvper/article/details/79543262",target:"_blank",rel:"noopener noreferrer"}},[e._v("查看包版本"),t("OutboundLink")],1),e._v("\n假设现在我们已经成功下载了jquery，过了一段时间，我忘记了下载的jquery的版本信息")]),e._v(" "),t("p",[e._v("第一种方式：npm ls jquery 即可（查看本地安装的jQuery），下面我的本地没有安装jquery，\n第二种方式：npm ls jquery -g    (查看全局安装的jquery)")]),e._v(" "),t("p",[e._v("npm install packageName --save //安装到项目目录下，并在package.json文件的dependencies中写入依赖，简写为-S")]),e._v(" "),t("h2",{attrs:{id:"promise对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise对象"}},[e._v("#")]),e._v(" Promise对象")]),e._v(" "),t("p",[e._v("参考：\n"),t("a",{attrs:{href:"https://itbilu.com/nodejs/npm/VJHw6ScNb.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bluebird与原生Promise对象及bluebird模块的中文API文档"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"http://liubin.org/promises-book/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promise迷你书"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果")]),e._v(" "),t("p",[e._v("从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。")]),e._v(" "),t("p",[e._v("俩个特点：")]),e._v(" "),t("ul",[t("li",[e._v("对象的状态不受外界影响，只有异步操作的结果可决定状态，pending（进行中）、fulfilled（已成功）和rejected（已失败）。")]),e._v(" "),t("li",[e._v("一旦状态改变，就不会再变，任何时候都可以得到这个结果。")])]),e._v(" "),t("p",[e._v("在NodeJS中用于替代回调函数，在使用NodeJS的KOA框架时可使用Promise来代替回调函数。")]),e._v(" "),t("h3",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),t("p",[e._v("new Promise - 创建实例\nnew Promise(function(function resolve, function reject) resolver) -> Promise")]),e._v(" "),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意")]),e._v(" "),t("p",[e._v("在一个promise链中，只要任何一个promise被reject，promise链就被破坏了，reject之后的promise都不会再执行，而是直接调用.catch方法。")]),e._v(" "),t("h2",{attrs:{id:"async-await"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[e._v("#")]),e._v(" async&await")]),e._v(" "),t("h3",{attrs:{id:"简介-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介-2"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("await:表示等待 Promise 返回结果，在继续执行。\nasync:由于nodejs是异步编程模型，有一些在同步编程中很容易做到的事情，现在却变得很麻烦。async的流程控制就是为了简化这些操作。")]),e._v(" "),t("p",[e._v("返回值是一个Promise对象，使用then方法添加回调函数\n当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。\nasync表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。\nasync函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。")]),e._v(" "),t("ul",[t("li",[e._v("在函数体前通过关键字async可以将函数变为async函数")]),e._v(" "),t("li",[e._v("在async函数中对需要异步执行的函数前需加await关键字")]),e._v(" "),t("li",[e._v("await后的函数必须使用Promise对象封装")]),e._v(" "),t("li",[e._v("async函数执行后返回的是一个Promise对象")])]),e._v(" "),t("h2",{attrs:{id:"node-的单线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-的单线程"}},[e._v("#")]),e._v(" node 的单线程")]),e._v(" "),t("p",[e._v("node.js单线程只是一个js主线程，本质上的异步操作还是由线程池完成的，node将所有的阻塞操作都交给了内部的线程池去实现，本身只负责不断的往返调度，")]),e._v(" "),t("p",[e._v("并没有进行真正的I/O操作，从而实现异步非阻塞I/O。")]),e._v(" "),t("p",[e._v("重点在主线程为单线程，主线程执行代码形成一个执行栈")]),e._v(" "),t("p",[e._v("主线程之外维护一个事件队列，当IO或异步操作，会将事件放到Event queue中，并不会执行且继续执行主线程代码，不会阻塞，直到主线程代码完毕。")]),e._v(" "),t("p",[e._v("主线程执行完毕，循环去取事件，用线程池线程去执行事件。当有事件执行完毕后，会通知主线程，主线程执行回调，线程归还给线程池。")]),e._v(" "),t("p",[e._v("一定注意异步问题，可使用promise，实现代码如下")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 遇到需要同步执行的代码，promise化，await执行，外层一定要有async\nfunction formImage() {\n    return new Promise((resolve, reject) => {\n        form((opt, {fields, files})=> {\n            console.log(files)\n            let filename = files.file.name\n            console.log(files.file.path)\n            let uploadDir = config.ROOTPATH + `/tmp/${roomId}/`\n            let relativePath =  `/tmp/${roomId}/` + Date.now() + '_' + filename\n            mkdirs(uploadDir, () => {\n                fs.renameSync(files.file.path, config.ROOTPATH + relativePath) //重命名\n                resolve(relativePath)\n            })\n        })\n    })\n}\nlet p = await formImage();\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br")])]),t("p",[e._v("Node.js等则规定在JavaScript的回调函数的第一个参数为 Error 对象，这也是它的一个惯例。")]),e._v(" "),t("p",[e._v("class：constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。\n调用要用 new Class()")]),e._v(" "),t("h2",{attrs:{id:"事件驱动的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动的过程"}},[e._v("#")]),e._v(" 事件驱动的过程")]),e._v(" "),t("p",[e._v("所有的东西包装成一个对象，执行了一个事件循环")]),e._v(" "),t("p",[e._v("​事件驱动，把所有的东西都当成一个事件")]),e._v(" "),t("p",[e._v("while(true){\n// 无限循环\n}\n不同的异步，不同的优先级")]),e._v(" "),t("p",[e._v("while(true){\n第一步： 执行script(全部的代码)\n先去清空micor-task队列的事件，去把这里面的全部执行完\n再去找 setInterval 执行 再去清空micor-task队列\n再去找 setImmediate 执行，再去清空micor-task队列\n再去 I/O 操作  再去清空micro-task队列\n}\n虽然都是异步，但是是有优先级的")]),e._v(" "),t("p",[e._v("macro-task:队列 script(全部的代码)")]),e._v(" "),t("p",[e._v("script(全部的代码) setInterval()  setTimeout() setImmediate() I/O操作（读写，查询数据库）\n他们都是同步的，但是他们的回调函数是异步的\nmicro-task:队列")]),e._v(" "),t("p",[e._v("process.nextTick()  Promise().then()\n注意 setInterval()和setTimeout()优先级是一样的")]),e._v(" "),t("p",[e._v("异步事件的优先级")]),e._v(" "),t("p",[e._v("nextTick > Promise.then > setTimeout > setImmediate")]),e._v(" "),t("h2",{attrs:{id:"常见用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见用法"}},[e._v("#")]),e._v(" 常见用法")]),e._v(" "),t("h3",{attrs:{id:"node-js时间戳和日期互相转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js时间戳和日期互相转换"}},[e._v("#")]),e._v(" Node.js时间戳和日期互相转换")]),e._v(" "),t("ul",[t("li",[t("p",[e._v('日期转时间戳\nvar date = new Date("2018-11-20 18:08:00");\nvar time = date.getTime()/1000;//转换成秒；  getTime() => 转化为时间戳')])]),e._v(" "),t("li",[t("p",[e._v("时间戳转日期\nvar time = 1542708681;\n// 也可以获取当前的毫秒级时间戳\nvar time2 = Date.now();\nvar date = new Date(time * 1000);\nvar dt = date.getFullYear() + \"-\" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + \"-\" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;")])])]),e._v(" "),t("h2",{attrs:{id:"常用模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用模块"}},[e._v("#")]),e._v(" 常用模块")]),e._v(" "),t("h3",{attrs:{id:"request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" request")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/b240051784ab",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-request模块"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("request({\n    url: url,\n    type: 'post'\n    encoding: 'utf-8',  // utf-8则 body为string，为null则为buffer，\n}, async function(error, response, body) {\n    resolve(body)\n})\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"xml2js-xml-json-相互转化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xml2js-xml-json-相互转化"}},[e._v("#")]),e._v(" xml2js - xml json 相互转化")]),e._v(" "),t("p",[e._v("安装：npm install xml2js")]),e._v(" "),t("p",[e._v("使用：")]),e._v(" "),t("p",[e._v("var xml2js = require('xml2js');")]),e._v(" "),t("p",[e._v("var builder = new xml2js.Builder();  // JSON->xml\n  var parser = new xml2js.Parser();   //xml -> json")]),e._v(" "),t("p",[e._v("var json =  parser.parseString（xml）;")]),e._v(" "),t("p",[e._v("。。。。。")]),e._v(" "),t("p",[e._v("xml =  builder.buildObject（json）;")]),e._v(" "),t("h3",{attrs:{id:"koa2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#koa2"}},[e._v("#")]),e._v(" koa2")]),e._v(" "),t("p",[e._v("web框架。koa中间件，中间件的通过next函数联系,执行next()后会将控制权交给下一个中间件,如果没有中间件没有执行next后将会沿路折返,将控制权交换给前一个中间件。\nctx封装了request 和response对象\nctx.state  推荐的命名空间，用于通过中间件传递信息和你的前端视图")]),e._v(" "),t("ul",[t("li",[e._v("get请求参数获取：")])]),e._v(" "),t("p",[e._v("1.是从上下文中直接获取\n请求对象ctx.query，返回如 { a:1, b:2 }\n请求字符串 ctx.querystring，返回如 a=1&b=2\n2.是从上下文的request对象中获取\n请求对象ctx.request.query，返回如 { a:1, b:2 }\n请求字符串 ctx.request.querystring，返回如 a=1&b=2")]),e._v(" "),t("ul",[t("li",[e._v("POST请求参数获取：")])]),e._v(" "),t("p",[e._v("注意：ctx.request是context经过封装的请求对象，ctx.req是context提供的node.js原生HTTP请求对象，\n同理ctx.response是context经过封装的响应对象，ctx.res是context提供的node.js原生HTTP请求对象。")]),e._v(" "),t("h3",{attrs:{id:"buffer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buffer"}},[e._v("#")]),e._v(" buffer")]),e._v(" "),t("p",[e._v("Buffer是node的核心模块，开发者可以利用它来处理二进制数据，比如文件流的读写、网络请求数据的处理等。")]),e._v(" "),t("p",[e._v("创建：\nnew Buffer(array)\nBuffer.alloc(length)\nBuffer.allocUnsafe(length)\nBuffer.from(array)")]),e._v(" "),t("h3",{attrs:{id:"bluebird"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bluebird"}},[e._v("#")]),e._v(" bluebird")]),e._v(" "),t("p",[e._v('Bluebird 的 Promise.promisifyAll 方法可以为一个对象的属性中的所有方法创建一个对应的使用 Promise 的版本。这些新创建方法的名称在已有方法的名称后加上"Async"后缀。')]),e._v(" "),t("ul",[t("li",[e._v("用法：\nconst bluebird = require('bluebird')\nbluebird.promisifyAll(fs)")])]),e._v(" "),t("p",[e._v('如果不希望把一个对象的所有方法都自动转换成使用 Promise 的形式，可以使用 Promise.promisify 来转换单个方法，如 Promise.promisify(require("fs").readFile)。')])])}),[],!1,null,null,null);r.default=s.exports}}]);