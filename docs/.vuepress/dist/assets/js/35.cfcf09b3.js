(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{532:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("git  工作常用命令\n")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png",target:"_blank",rel:"noopener noreferrer"}},[s._v("图解git"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/nrsc272420199/article/details/85555911",target:"_blank",rel:"noopener noreferrer"}},[s._v("git rebase"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/4a8f4af4e803",target:"_blank",rel:"noopener noreferrer"}},[s._v("rebase 用法小结"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/73767731",target:"_blank",rel:"noopener noreferrer"}},[s._v("git rebase VS git merge？ 更优雅的 git 合并方式值得拥有"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"工作常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作常用"}},[s._v("#")]),s._v(" 工作常用")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[a("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git pull <远程主机名> <远程分支名>:<本地分支名>  # 合并至当前本地分支, 则  :和  :后可以省略")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git push origin(远程仓库名字 默认是origin) dev_lyy(本地):dev_lyy(远程)  # 推送至远程分支, 没有则新建远程分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token command"}},[s._v("$ git remote"),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v(" -v")]),s._v("  # 查看远程分支的情况")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("回退已经 push 上去的代码")])]),s._v(" "),a("ol",[a("li",[s._v("git log 查到想回退的 commit ID")]),s._v(" "),a("li",[s._v("git reset --soft 上面的ID")])]),s._v(" "),a("blockquote",[a("p",[s._v("git reset 有三种参数 soft-回到 index 区 mixed-工作区 hard-直接丢弃掉代码")])]),s._v(" "),a("p",[s._v("想要撤回中间某次commit，可以使用命令")]),s._v(" "),a("blockquote",[a("p",[s._v("git revert commit_id  # 和reset区别是 revert只撤销某一个commit， 而reset是撤销至某个commit的代码")])]),s._v(" "),a("h2",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),a("h3",{attrs:{id:"方法1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1"}},[s._v("#")]),s._v(" 方法1")]),s._v(" "),a("blockquote",[a("p",[s._v("先将仓库 clone 到本地, 修改后再 push 到 git 仓库")])]),s._v(" "),a("p",[a("code",[s._v("$ git clone https://github.com/用户个性地址/helloWorld.git # 将远程仓库克隆到本地")])]),s._v(" "),a("p",[s._v("在克隆过程中, 如果仓库是一个私有仓库, 将会要求用户输入 git 的账号和密码。按照提示输入即可。")]),s._v(" "),a("p",[s._v("当然, 用户也可以通过配置本地的git配置信息, 执行git config命令预先配置好相关的用户信息, 配置执行如下:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的名字或昵称"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改代码后, 在仓库目录下执行下面命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前目录所有文件添加到git暂存区")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my first commit"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交并备注提交信息")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将本地提交推送到远程仓库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"方法2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2"}},[s._v("#")]),s._v(" 方法2")]),s._v(" "),a("blockquote",[a("p",[s._v("本地初始化一个仓库, 设置远程仓库地址后再做push\n和方法1的差别, 在于先创建仓库。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/用户个性地址/helloWorld.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样就完成了版本的一次初始化。\n接下去, 进入你已经初始化好的或者克隆仓库的目录,然后执行:")]),s._v(" "),a("p",[a("code",[s._v("$ git pull origin master")]),s._v("\n修改/添加文件, 否则与原文件相比就没有变动。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第一次提交"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master -f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f 表示强制覆盖 需要保留线上文件则需要 pull 下代码")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可能需要在上一步之前执行")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后如果需要账号密码的话就输入账号密码, 这样就完成了一次提交。此时, 你可以在你的个人面板、仓库主页查看到你的提交记录。")]),s._v(" "),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),a("h3",{attrs:{id:"分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支合并"}},[s._v("#")]),s._v(" 分支合并")]),s._v(" "),a("p",[s._v("当master领先自己本地一个分支时, 即其他同事合并了代码, 而我本地也做了修改\ngit:(dev) git rebase master")]),s._v(" "),a("p",[s._v("git 所做操作:首先, git 会把 dev 分支里面的每个 commit 取消掉;\n其次, 把上面的操作临时保存成 patch 文件, 存在 .git/rebase 目录下;\n然后, 把 dev 分支更新到最新的 master 分支;\n最后, 把上面保存的 patch 文件应用到 dev 分支上;")]),s._v(" "),a("p",[a("strong",[s._v("提醒")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在 rebase 的过程中, 也许会出现冲突 conflict。在这种情况, git 会停止 rebase 并会让你去解决冲突。在解决完冲突后, 用 git add 命令去更新这些内容。\n[注意]此步骤你无需执行 git-commit, 只要执行 continue\ngit rebase --continue\n这样 git 会继续应用余下的 patch 补丁文件。\n当然, 在任何时候, 我们都可以用 --abort 参数来终止 rebase 的行动, 并且分支会回到 rebase 开始前的状态。\ngit rebase —abort\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"基本知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本知识"}},[s._v("#")]),s._v(" 基本知识")]),s._v(" "),a("p",[s._v("Git 使用 SHA-1 算法计算数据的校验和, 通过对文件的内容或目录的结构计算出一个 SHA-1哈希值, 作为指纹字符串。\n该字串由 40个十六进制字符(0-9及 a-f)组成, 看起来就像是:24b9da6552252987aa493b52f8696cd6d3b00373\nGit 的工作完全依赖于这类指纹字串, 所以你会经常看到这样的哈希值。实际上, 所有保存在 Git数据库中的东西都是用此哈希值来作索引的, 而不是靠文件名。")]),s._v(" "),a("p",[s._v("Git 管理项目时, 文件流转的三个工作区域:")]),s._v(" "),a("ul",[a("li",[s._v("Git 的工作目录")]),s._v(" "),a("li",[s._v("暂存区域")]),s._v(" "),a("li",[s._v("以及本地仓库")])]),s._v(" "),a("h3",{attrs:{id:"分支相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支相关"}},[s._v("#")]),s._v(" 分支相关")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin/test "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("  与远程分支建立连接\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch:不加参数 列出本地\n    -r                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出远程分支")]),s._v("\n    -a                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# all")]),s._v("\n    -name                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建分支")]),s._v("\n    -track                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地/远程(创建分支并且关联远程)")]),s._v("\n    -v                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# verbose详细信息")]),s._v("\n    -d/-D name              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定分支")]),s._v("\n    -m old_name new_name    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改分支名")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete branch_name "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程分支")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b branch_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch/commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并切换分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"git在工作中正确的使用方式-git-rebase篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git在工作中正确的使用方式-git-rebase篇"}},[s._v("#")]),s._v(" git在工作中正确的使用方式- git rebase篇")]),s._v(" "),a("p",[s._v("git rebase master----\x3e解决冲突---\x3egit rebase --continue")]),s._v(" "),a("h3",{attrs:{id:"本地开发分支可以灵活管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发分支可以灵活管理"}},[s._v("#")]),s._v(" 本地开发分支可以灵活管理")]),s._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git checkout master\ngit pull\ngit checkout local\ngit rebase -i HEAD~2  //合并提交 --- 2表示合并两个\ngit rebase master----\x3e解决冲突---\x3egit rebase --continue\ngit checkout master\ngit merge local\ngit push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[s._v("git checkout 13.0\ngit pull\ngit checkout studio-dev-lyy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 studio-dev-lyy 分支后,  就是修改代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改完了,  就正常提交代码 ------- git commit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有多次 studio-dev-lyy 分支的提交, 就合并, 只有一次可以不合并")]),s._v("\ngit rebase -i HEAD~2  // 合并提交 --- 2表示合并两个\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 13.0 内容合并到 studio-dev-lyy")]),s._v("\ngit rebase 13.0----\x3e解决冲突---\x3egit rebase --continue\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再起切换到 13.0 或其他目标分支")]),s._v("\ngit checkout 13.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 studio-dev-lyy 合并到 13.0")]),s._v("\ngit merge studio-dev-lyy\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到远程仓库")]),s._v("\ngit push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他操作"}},[s._v("#")]),s._v(" 其他操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" name git_address   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关联远程库")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 储藏当前工作, 接着到另一分支处理问题")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看储藏栈")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提取最新工作并从栈删除")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以理解为”挑拣”提交, 它会获取某一个分支的单笔提交, 并作为一个新的提交引入到你当前分支上。")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" 具体修改了那些地方 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("对比远程分支\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote:管理主机名\n    不带参数 -列出所有远程主机\n    -v 参看远程主机的网址\n    -show "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("查看详细信息\n忽略文件:创建一个名为 .gitignore的文件, 列出要忽略的文件模式。\n如:*.a       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#忽略所有 .a 结尾的文件    !lib.a    #但 lib.a 除外")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"常见误操作处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见误操作处理方法"}},[s._v("#")]),s._v(" 常见误操作处理方法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("撤销 add:git reset HEAD\n合并 commit:\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 追加至上一个 commit :git commit --amend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("commit 的时间是不会变的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("可加上--no-edit\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 合并多个:git rebase -i commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-i 后参数可写commitHSAH值即你想合并至哪一个commit\n        或者-i HEAD~n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD将它看做 你的上一次提交 的别名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("HEAD~1 上个版本 HEAD~n 上n个版本"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        - 紧接着进入vim界面:pick为保留, s或者squash为删除commit\n        - 又另一个vim界面:commit msg 保留自己需要的或者修改, 用"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除别的commit msg")]),s._v("\n\n如何重置某个文件到未修改的状态？  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git checkout -- <filepath>")]),s._v("\n如何重置所有文件到未修改的状态？  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git reset --hard")]),s._v("\n如何重置到某个 commit？          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git reset <commit SHA>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset用于撤销未被提交到remote的改动, 即撤销local的修改。除了移动当前分支的HEAD, \n还可以更改workspace和index:\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft HEAD^上一个commit, 想撤回俩个用HEAD~2:\n    --soft:修改HEAD, 不修改index和workspace。\n    --mixed:修改HEAD和index, 不修改workspace。默认行为。\n    --hard:修改HEAD、index、workspace。把index和workspace的修改全部撤销。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"常见错误处理方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误处理方法"}},[s._v("#")]),s._v(" 常见错误处理方法")]),s._v(" "),a("blockquote",[a("p",[s._v("git pull or push报错:fatal: refusing to merge unrelated histories (拒绝合并不相关的历史)")])]),s._v(" "),a("p",[s._v("则在 pull 命令后紧接着使用 "),a("code",[s._v("--allow-unrelated-history")]),s._v(" 选项来解决问题(该选项可以合并两个独立启动仓库的历史)")])])}),[],!1,null,null,null);t.default=e.exports}}]);