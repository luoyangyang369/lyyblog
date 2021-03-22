module.exports = {
    title: '标题',
    description: '描述',
    // 网页 header
    head: [
        ['link', { rel: 'icon', href: '' }]
    ],
    logo: '/imgs/header_image.jpg',
    // 博客主题 选用 reco
    theme: 'reco',
    // 主题配置 参考官方文档和选用主题的文档
    themeConfig: {
        type: 'blog',
        smoothScroll: true,
        author: '',
        authorAvatar: '',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: '' },
            ]
        },
        // 顶部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '归档', link: '/timeline/', icon: 'reco-date' },
        ],
        // 评论系统
        valineConfig: {
            appId: '',
            appKey: ''
        },
        subSidebar: 'auto',
        sidebar: 'auto',
        // Git 仓库和编辑链接
        repo: '', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本
        lastUpdated: '上次更新',
        // 项目开始时间，只填写年份
        startYear: '2019'
    },
    plugins: [
        // pwa 插件
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        // 自动生成 sitemap
        ['sitemap', {
            hostname: ''
        }],
        // 自动生成侧边栏
        ["vuepress-plugin-auto-sidebar", {}],
        // live2d
        ['vuepress-plugin-helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'koharu',
                display: {
                    position: "left", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 10, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 1 // 模型透明度(default: 0.8)
                }
            }
        }]
    ]
}