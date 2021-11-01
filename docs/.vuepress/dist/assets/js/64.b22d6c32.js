(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{564:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"小-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小-demo"}},[s._v("#")]),s._v(" 小 demo")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 导入flask\napp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 创建类实例\n \n"),t("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 使用 route"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 装饰器来告诉 Flask 触发函数的 URL \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" 确保服务器只会在使用 Python 解释器运行代码的 情况下运行"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 而不会在作为模块导入时运行\n    app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("  run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 函数来运行本地服务器和我们的应用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("运行: python hello.py")]),s._v(" "),t("h2",{attrs:{id:"小知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小知识"}},[s._v("#")]),s._v(" 小知识")]),s._v(" "),t("h3",{attrs:{id:"flask的context-上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flask的context-上下文"}},[s._v("#")]),s._v(" Flask的Context(上下文)")]),s._v(" "),t("p",[s._v("Flask提供了两种上下文, 一种是应用上下文(Application Context), 一种是请求上下文(Request Context)。")]),s._v(" "),t("ul",[t("li",[s._v("application 指的就是当你调用app = Flask(name)创建的这个对象app;")]),s._v(" "),t("li",[s._v("request 指的是每次http请求发生时, WSGI server(比如gunicorn)调Flask.call()之后, 在Flask对象内部创建的Request对象;")]),s._v(" "),t("li",[s._v("application 表示用于响应WSGI请求的应用本身, request 表示每次http请求;")]),s._v(" "),t("li",[s._v("application的生命周期大于request, 一个application存活期间, 可能发生多次http请求, 所以, 也就会有多个request")])]),s._v(" "),t("p",[s._v("application 就是指app = Flask(name)对象\nrequest 就是对应每次http 请求创建的Request对象\nFlask通过_RequestContext将App与Request关联起来")]),s._v(" "),t("h3",{attrs:{id:"flask-里的函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flask-里的函数"}},[s._v("#")]),s._v(" flask 里的函数")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("escape 解析路径上的特殊符号")])]),s._v(" "),t("li",[t("p",[s._v("url_for 看成是路由命名函数, 可以做路由导向, 可以带参数")])]),s._v(" "),t("li",[t("p",[s._v("redirect 重定向函数")])]),s._v(" "),t("li",[t("p",[s._v("render_template 模板渲染函数, 自动寻找根目录 templates 里的模板")])]),s._v(" "),t("li",[t("p",[s._v("make_response 获取响应对象")])]),s._v(" "),t("li",[t("p",[s._v("request 获取请求对象")])]),s._v(" "),t("li",[t("p",[s._v("g 是一个特殊对象, 独立于每一个请求。在处理请求过程中, 它可以用于储存 可能多个函数都会用到的数据。")]),s._v(" "),t("p",[s._v("如:把连接储存于其中, 可以多次使用, 而不用在同一个 请求中每次调用 get_db 时都创建一个新的连接。")])]),s._v(" "),t("li",[t("p",[s._v("current_app 是另一个特殊对象, 该对象指向处理请求的 Flask 应用。这里 使用了应用工厂, 那么在其余的代码中就不会出现应用对象。")])])]),s._v(" "),t("p",[s._v("当应用创建后, 在处理 一个请求时,  get_db 会被调用。这样就需要使用 current_app 。")]),s._v(" "),t("h3",{attrs:{id:"一句话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一句话"}},[s._v("#")]),s._v(" 一句话")]),s._v(" "),t("p",[s._v("flask在使用session 时要设置一个密钥 app.secret_key  如:app.secret_key = '123456'  一般使用os.urandom(16) 生成")]),s._v(" "),t("h3",{attrs:{id:"jsonify-json-dumps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonify-json-dumps"}},[s._v("#")]),s._v(" jsonify && json.dumps")]),s._v(" "),t("p",[s._v("区别:")]),s._v(" "),t("ol",[t("li",[s._v("Content-Type有区别")])]),s._v(" "),t("p",[s._v("jsonify时响应的Content-Type字段值为application/json, 而使用json.dumps时该字段值为text/html。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("接受参数有区别")])]),s._v(" "),t("h2",{attrs:{id:"blueprints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blueprints"}},[s._v("#")]),s._v(" blueprints")]),s._v(" "),t("p",[s._v("用于实现单个应用的视图、模板、静态文件的集合。")]),s._v(" "),t("p",[s._v("蓝图就是模块化处理的类。\n简单来说, 蓝图就是一个存储操作路由映射方法的容器, 主要用来实现客户端请求和URL相互关联的功能。 在Flask中, 使用蓝图可以帮助我们实现模块化应用的功能。")]),s._v(" "),t("p",[s._v("Flask 中的蓝图为这些情况设计:")]),s._v(" "),t("ul",[t("li",[s._v("把一个应用分解为一个蓝图的集合。这对大型应用是理想的。一个项目可以实例化一个应用对象, 初始化几个扩展, 并注册一集合的蓝图。")]),s._v(" "),t("li",[s._v("以 URL 前缀和/或子域名, 在应用上注册一个蓝图。 URL 前缀/子域名中的参数即成为这个蓝图下的所有视图函数的共同的视图参数(默认情况下)。")]),s._v(" "),t("li",[s._v("在一个应用中用不同的 URL 规则多次注册一个蓝图。")]),s._v(" "),t("li",[s._v("通过蓝图提供模板过滤器、静态文件、模板和其它功能。一个蓝图不一定要实现应用或者视图函数。")]),s._v(" "),t("li",[s._v("初始化一个 Flask 扩展时, 在这些情况中注册一个蓝图。")])]),s._v(" "),t("h2",{attrs:{id:"url-for-redirect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-for-redirect"}},[s._v("#")]),s._v(" url_for && redirect")]),s._v(" "),t("p",[s._v("反转函数url_for与重定向redirect")]),s._v(" "),t("p",[s._v("url_for, 简单来说, 这个函数接受视图函数的名字(字符串形式)作为参数, 返回视图函数对应的url, 例如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@app.route('/')\ndef hello_world():\n    print(url_for('index'))  # 返回index视图的URL  此处会打印/index/  有参数则以key=value的形式写在后面 print(url_for('hello',name='harp'))\n    return 'Hello World'\n\n@app.route('/index/')\ndef index():\n    return 'index'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("redirect则更简单, 功能就是跳转到指定的url, 大部分情况下, 我们都是和url_for一起使用的, 例如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@app.route('/')\ndef hello_world():\n    return 'Hello World'\n\n\n@app.route('/<name>/')\ndef hello(name):\n    if name == 'Harp':\n        return 'Hello %s' % name\n    else:\n        return redirect(url_for('hello_world'))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在hello这个视图函数中, 如果url传入的参数是Harp(即请求的网址是http://127.0.0.1:5000/Harp/), 则返回'Hello Harp', 其他情况则重定向到hello_world这个视图函数对应的网址'/'。")]),s._v(" "),t("h2",{attrs:{id:"werkzeug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#werkzeug"}},[s._v("#")]),s._v(" Werkzeug")]),s._v(" "),t("h3",{attrs:{id:"是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[s._v("#")]),s._v(" 是什么")]),s._v(" "),t("p",[s._v("不是一个web服务器, 也不是一个web框架, 而是一个工具包, 官方的介绍说是一个 WSGI 工具包, 它可以作为一个 Web 框架的底层库, 因为它封装好了很多 Web 框架的东西, 例如 Request, Response 等等。")]),s._v(" "),t("p",[s._v("什么又是WSGI呢？WSGI的全称是Web Server Gateway Interface, 它是用来定义web服务器接口的一个规范。简单地讲, 就是定义http服务器应该长什么样子, 能处理哪些事情。")]),s._v(" "),t("h3",{attrs:{id:"包含哪些内容的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包含哪些内容的实现"}},[s._v("#")]),s._v(" 包含哪些内容的实现")]),s._v(" "),t("ul",[t("li",[s._v("HTTP头的解析")]),s._v(" "),t("li",[s._v("易用使用的request和response对象")]),s._v(" "),t("li",[s._v("基于交互风格的JavaScript脚本语言的浏览器调试器")]),s._v(" "),t("li",[s._v("与 WSGI 1.0 规范100%兼容")]),s._v(" "),t("li",[s._v("支持Python 2.6, 2.7和3.3")]),s._v(" "),t("li",[s._v("Unicode支持")]),s._v(" "),t("li",[s._v("HTTP Session和签名Cookie支持")]),s._v(" "),t("li",[s._v("URI和IRI处理函数, 包含对Unicode的支持")]),s._v(" "),t("li",[s._v("内置兼容一些非标准的WSGI服务器和浏览器")]),s._v(" "),t("li",[s._v("集成了URLs路由功能")])]),s._v(" "),t("h2",{attrs:{id:"flask-vs-django"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flask-vs-django"}},[s._v("#")]),s._v(" flask vs django")]),s._v(" "),t("blockquote",[t("p",[s._v("Flask 怎么定位自己的？\n将自己定位为微框架。啥叫微框架, 就是毛坯房的意思。给你个毛胚房, 你自己装修去。")])]),s._v(" "),t("blockquote",[t("p",[s._v("Django 怎么定位标榜自己的？\n划重点 The web framework for perfectionists with deadlines. 完美主义者的 Deadline 终结框架")])])])}),[],!1,null,null,null);a.default=n.exports}}]);