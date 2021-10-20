(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{536:function(_,v,e){"use strict";e.r(v);var t=e(6),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[_._v("#")]),_._v(" 网络")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247484005&idx=1&sn=cb07ee1c891a7bdd0af3859543190202&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("TCP 三次握手和四次挥手面试题"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://github.com/allentofight/easy-cs/tree/main/%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"}},[_._v("网络"),e("OutboundLink")],1)]),_._v(" "),e("ol",[e("li",[_._v("OSI 与 TCP/IP 各层的结构与功能,都有哪些协议?为什么网络要分层？")]),_._v(" "),e("li",[_._v("计算机网络的一些常见状态码")]),_._v(" "),e("li",[_._v("ping 所使用的协议")]),_._v(" "),e("li",[_._v("TCP 的三次握手与四次挥手的内容？ TCP 为什么连接是三次握手而断开是四次握手？")]),_._v(" "),e("li",[_._v("TCP 与 UDP 的区别及使用场景")]),_._v(" "),e("li",[_._v("TCP 是如何保证传输的可靠性？")]),_._v(" "),e("li",[_._v("一次完整的 HTTP 请求所经的步骤")]),_._v(" "),e("li",[_._v("HTTP 协议了解么？HTTP 是基于 TCP 还是 UDP 的？")]),_._v(" "),e("li",[_._v("HTTP 报文的内容简单说一下！ HTTP 请求报文和响应报文中有哪些数据？")]),_._v(" "),e("li",[_._v("HTTP 和 HTTPS 的区别了解么？")]),_._v(" "),e("li",[_._v("HTTP 请求有哪些常见的状态码？")]),_._v(" "),e("li",[_._v("HTTP 长连接和短连接了解么？")]),_._v(" "),e("li",[_._v("Cookie 和 Session 的关系")]),_._v(" "),e("li",[_._v("URI 和 URL 的区别是什么?")])]),_._v(" "),e("h3",{attrs:{id:"http-的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-的特点"}},[_._v("#")]),_._v(" HTTP 的特点")]),_._v(" "),e("ol",[e("li",[_._v("灵活可扩展: 这可以说是 HTTP 最重要的特点，也是 HTTP 能大行其道并碾压其他协议称霸于世的根本原因！它只规定了报文的基本格式，用空格分隔单词，用换行分隔字段，「header+body」等基本语义，但在语法层面并不做限制，它并没有强制规定 header 里应该传什么，也没有限制它底层应该用什么传输，这也为 HTTPS 添加 SSL/TLS 层来加密传输，HTTP2 使用帧，流来进行多路复用，HTTP 3 使用 UDP 彻底解决解决队头阻塞问题提供了可能！后续如果又出现了牛逼的协议，底层也随时可以替换")]),_._v(" "),e("li",[_._v("可靠传输: 不管底层是 TCP 还是 QUIC（底层使用 UDP），它们的传输都是可靠的，都能保证应用层请求响应的可靠传输，这一点很重要，不然传输过程中缺胳膊少腿，应用层就无法解析了。")]),_._v(" "),e("li",[_._v("应用层协议: HTTP 是一个协议，很多人把 HTTP 和 TCP 混在了一起， 就像前文所述，TCP 相当于高速公路，为我们提供了可靠的传输通道，HTTP 规定货物的表现形式（header + 空行+ body），货物是否可从中间站运回（缓存机制）高速公路是否应该关闭（连接控制），至于货物如何可靠传输到目的地，那是 TCP 的事，与 HTTP 无关，这一点也是不少人经常搞混的。")]),_._v(" "),e("li",[_._v("请求应答模式: HTTP 需要请求方发起请示，然后应答方对此作出响应，应答方不会无缘无故地发响应给请求方，另外请求和应答方的角色是可以互换的，比如 HTTP 2 中 server 是可以主动 push 给 client 的，这种情况下 server 即为请求方，cilent 即为应答方")]),_._v(" "),e("li",[_._v("无状态: HTTP 的每个请求-应答都是无关的，即每次的收发报文都是完全独立，没有任何联系的，服务器收到每个请求响应后，不会记录这个请求的任何信息，有人说不对啊，为啥我添加多次购物车，购物车列表还能保留我之前加过的商品呢？这就要简单地了解一下 Session 和 Cookie 了，Session 可以认为是 Server 用来追踪每个用户行为的一个会话，server 会给每个用户分配一个这个 Session 的 session，通过 Cookie 这个头字段返回给 client，之后 client 每次请求都会在 Cookie 里带上这个 sessionId，server 拿到 sessionId 之后就知道是哪个用户发起的了")])]),_._v(" "),e("h3",{attrs:{id:"tcp-和-udp-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-和-udp-区别"}},[_._v("#")]),_._v(" TCP 和 UDP 区别：")]),_._v(" "),e("p",[_._v("TCP向上层提供面向连接的可靠服务 ，UDP向上层提供无连接不可靠服务。虽然 UDP 并没有 TCP 传输来的准确，但是也能在很多实时性要求高的地方有所作为 对数据准确性要求高，速度可以相对较慢的，可以选用TCP")]),_._v(" "),e("ol",[e("li",[_._v("连接\n"),e("ul",[e("li",[_._v("TCP 是面向连接的传输层协议，传输数据前先要建立连接。")]),_._v(" "),e("li",[_._v("UDP 是不需要连接，即刻传输数据。")])])]),_._v(" "),e("li",[_._v("服务对象\n"),e("ul",[e("li",[_._v("TCP 是一对一的两点服务，即一条连接只有两个端点。")]),_._v(" "),e("li",[_._v("UDP 支持一对一、一对多、多对多的交互通信")])])]),_._v(" "),e("li",[_._v("可靠性\n"),e("ul",[e("li",[_._v("TCP 是可靠交付数据的，数据可以无差错、不丢失、不重复、按需到达。")]),_._v(" "),e("li",[_._v("UDP 是尽最大努力交付，不保证可靠交付数据。")])])]),_._v(" "),e("li",[_._v("拥塞控制、流量控制\n"),e("ul",[e("li",[_._v("TCP 有拥塞控制和流量控制机制，保证数据传输的安全性。")]),_._v(" "),e("li",[_._v("UDP 则没有，即使网络非常拥堵了，也不会影响 UDP 的发送速率。")])])]),_._v(" "),e("li",[_._v("首部开销\n"),e("ul",[e("li",[_._v("TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字段时是 20 个字节，如果使用了「选项」字段则会变长的。")]),_._v(" "),e("li",[_._v("UDP 首部只有 8 个字节，并且是固定不变的，开销较小。")])])])]),_._v(" "),e("h3",{attrs:{id:"三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),e("ul",[e("li",[_._v("TCP 第三次握手是可以携带数据的，前两次握手是不可以携带数据的。")]),_._v(" "),e("li",[_._v("TCP 超时重传： 就是在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 ACK 确认应答报文，就会重发该数据。\n"),e("ul",[e("li",[_._v("数据包丢失")]),_._v(" "),e("li",[_._v("确认应答丢失")])])]),_._v(" "),e("li",[_._v("TCP 快速重传： 三次同样的 ACK 则触发重传机制。")])]),_._v(" "),e("h4",{attrs:{id:"为什么要进行第三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行第三次握手"}},[_._v("#")]),_._v(" 为什么要进行第三次握手")]),_._v(" "),e("p",[_._v("为了防止服务器端开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文段突然又传送到了服务端")]),_._v(" "),e("h3",{attrs:{id:"tcp四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[_._v("#")]),_._v(" TCP四次挥手")]),_._v(" "),e("ol",[e("li",[_._v("客户端发送终止命令FIN")]),_._v(" "),e("li",[_._v("服务端收到后回复ACK，处于close_wait状态")]),_._v(" "),e("li",[_._v("服务器将关闭前需要发送信息发送给客户端后处于last_ack状态")]),_._v(" "),e("li",[_._v("客户端收到FIN后发送ack后处于tim-wait而后进入close状态")])]),_._v(" "),e("h3",{attrs:{id:"在浏览器输入-url-回车之后发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器输入-url-回车之后发生了什么"}},[_._v("#")]),_._v(" 在浏览器输入 URL 回车之后发生了什么")]),_._v(" "),e("p",[_._v("-"),e("a",{attrs:{href:"http://git.dev.mypscloud.com/projects/PSC3/repos/pscloud3/pull-requests/13656/overview",target:"_blank",rel:"noopener noreferrer"}},[_._v("在浏览器输入 URL 回车之后发生了什么（流程图，超详细版）"),e("OutboundLink")],1)]),_._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://www.cyc2018.xyz/%E5%85%B6%E5%AE%83/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80.html#%E4%B8%80%E3%80%81%E6%80%A7%E8%83%BD",target:"_blank",rel:"noopener noreferrer"}},[_._v("性能指标参数"),e("OutboundLink")],1)])]),_._v(" "),e("li",[e("p",[_._v("伸缩性")])])]),_._v(" "),e("p",[_._v("指不断向集群中添加服务器来缓解不断上升的用户并发访问压力和不断增长的数据存储需求。")]),_._v(" "),e("ul",[e("li",[_._v("扩展性")])]),_._v(" "),e("p",[_._v("指的是添加新功能时对现有系统的其它应用无影响，这就要求不同应用具备低耦合的特点。")]),_._v(" "),e("p",[_._v("实现可扩展主要有两种方式：")]),_._v(" "),e("ol",[e("li",[_._v("使用消息队列进行解耦，应用之间通过消息传递进行通信；")]),_._v(" "),e("li",[_._v("使用分布式服务将业务和可复用的服务分离开来，业务使用分布式服务框架调用可复用的服务。新增的产品可以通过调用可复用的服务来实现业务逻辑，对其它产品没有影响。")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("可用性")])]),_._v(" "),e("li",[e("p",[_._v("冗余")])])]),_._v(" "),e("p",[_._v("保证高可用的主要手段是使用冗余，当某个服务器故障时就请求其它服务器。")]),_._v(" "),e("p",[_._v("应用服务器的冗余比较容易实现，只要保证应用服务器不具有状态，那么某个应用服务器故障时，负载均衡器将该应用服务器原先的用户请求转发到另一个应用服务器上，不会对用户有任何影响。")]),_._v(" "),e("p",[_._v("存储服务器的冗余需要使用主从复制来实现，当主服务器故障时，需要提升从服务器为主服务器，这个过程称为切换。")])])}),[],!1,null,null,null);v.default=l.exports}}]);