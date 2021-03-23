(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{516:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("搭建远程 code-server\n")]),s._v(" "),n("h2",{attrs:{id:"docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" docker-compose")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("code-server")]),s._v(" 镜像构建")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\nservices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  xy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    container_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" xy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server\n    image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" codercom/code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取 codercom/code-server 镜像")]),s._v("\n    ports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n    volumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/luoyangyang:/home/coder/project"')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前面的目录即为你远程打开的目录")]),s._v("\n    environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      PASSWORD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 123456  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# code-server 首页登录密码")]),s._v("\n    restart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    networks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      nginx_net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        aliases"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" xy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建局域网的别名  其他应用可以通过这个名字访问, 比如nginx")]),s._v("\n\nnetworks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  nginx_net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里与 nginx_net 做关联与 nginx 通信")]),s._v("\n    external"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"方法一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),n("p",[s._v("修改 "),n("code",[s._v("docker-compose.yml")]),s._v(" => "),n("code",[s._v('ports: - "8081: 8080"')])]),s._v(" "),n("blockquote",[n("p",[s._v("docker-compose up # 启动即可在 localhost:8081 访问到 code-server")])]),s._v(" "),n("h3",{attrs:{id:"方法二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),n("p",[s._v("配合 "),n("code",[s._v("nginx")]),s._v(" 转发")]),s._v(" "),n("p",[s._v("详情见 "),n("RouterLink",{attrs:{to:"/posts/docker/nginx_docker.html"}},[s._v("nginx docker 搭建应用")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);