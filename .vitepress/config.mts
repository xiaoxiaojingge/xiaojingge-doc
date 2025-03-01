import {defineConfig} from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml',
    'mjx-container',
    'mjx-assistive-mml',
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: '筱晶哥哥',
    description: '花有重开日，人无再少年',
    lang: 'zh-CN',
    ignoreDeadLinks: true,
    base: '/',
    head: [
        [
            'script',
            {id: 'baidu'},
            `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1da3ac34d67e4132de65ce914d2067ec";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
        ],
        [
            'style',
            {},
            `
      td, th {
        padding: 8px !important;
      }
      @media only screen and (min-width: 1440px) {
        :root {
          --vp-layout-max-width: 100%;
        }
        .VPDoc.has-aside .content-container {
          max-width: 100% !important;
        }
      }
      `,
        ],
    ],
    lastUpdated: true,
    srcExclude: ['README'],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: '免责声明',
                link: '/免责声明',
                activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
            },
            {
                text: '个人简介',
                link: '/guide/intro',
                activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
            },
            {
                text: '其他',
                items: [
                    {
                        text: '筱晶哥主站',
                        link: 'https://www.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥IT知识库',
                        link: 'https://knowledge.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥yilia主题博客',
                        link: 'https://blog-yilia.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥next主题博客',
                        link: 'https://blog-next.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥butterfly主题博客',
                        link: 'https://blog-butterfly.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥大学时期的导航页',
                        link: 'https://nav.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥中文变量命名工具',
                        link: 'https://varbook.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥开发运维备忘手册',
                        link: 'https://cheatsheet.xiaojingge.com',
                    },
                    {
                        text: '筱晶哥哥 Linux 命令手册',
                        link: 'https://linux-cmd.xiaojingge.com',
                    },
                ],
            },
        ],
        logo: {src: '/favicon.ico', width: 24, height: 24},
        search: {
            provider: 'local',
        },
        sidebar: [
            {
                text: '导读',
                collapsed: false,
                // 由于下方链接使用了其他域名，所以此处不能使用基础地址
                // base: '/guide/',
                items: [
                    {text: '个人简介', link: '/guide/intro'},
                    {text: '个人网址', link: '/guide/website'},
                ],
            },
            {
                text: '项目',
                collapsed: false,
                base: '/project/',
                items: [{text: '个人项目', link: 'personal'}],
            },
            {
                text: '个人学习',
                collapsed: false,
                base: '/study/',
                items: [
                    {text: '学习记录', link: 'record'},
                    {text: '常用文档', link: 'document'},
                    {text: '常用软件', link: 'software'},
                    {text: '在线教程和文档', link: 'tutorial-doc'},
                    {text: '解决方案', link: 'solutions'},
                    {text: 'Github加速', link: 'fast-github'},
                    {text: 'IDEA插件', link: 'idea-plugin'},
                    {text: 'IDEA配置', link: 'idea-config'},
                    {text: 'Chrome插件', link: 'chrome-plugin'},
                    {text: 'Docker', link: 'docker'},
                    {text: '算法相关', link: 'algorithm'},
                    {text: '正则相关', link: 'regular'},
                    {
                        text: 'Python相关',
                        base: '/study/python/',
                        items: [
                            {text: '环境', link: 'environment'},
                            {text: '命令', link: 'command'},
                            {text: '笔记', link: 'notes'},
                        ],
                    },
                    {text: 'MySQL相关', link: 'mysql'},
                    {text: 'YUM', link: 'yum'},
                    {text: 'CentOS Firewalld 防火墙', link: 'firewalld'},
                    {text: 'JDK版本与字节码版本对应关系', link: 'jdk-major'},
                ],
            },
            {
                text: '参考文档',
                collapsed: false,
                base: '/reference/',
                items: [
                    {text: '十二要素宣言', link: '12factor'},
                    {text: '中国独立开发者项目列表', link: 'chinese-independent-developer'},
                ],
            },
            {
                text: '工具',
                collapsed: false,
                base: '/tools/',
                items: [
                    {text: 'Git命令速查表', link: 'git'},
                    {text: 'Idea命令速查表', link: 'idea'},
                    {text: '常用工具集', link: 'toolset'},
                    {text: '科技lion一键脚本', link: 'kejilion'},
                    {text: 'Windows curl.exe', link: 'windows-curl'},
                    {text: 'Windows tail.exe', link: 'windows-tail'},
                    {text: 'Windows tcping.exe', link: 'windows-tcping'},
                    {text: 'Windows cports.exe', link: 'windows-cports'},
                    {text: 'Windows winsw.exe', link: 'windows-winsw'},
                    {text: 'Windows激活', link: 'window-activate'},
                    {text: '内网穿透', link: 'internal-network-penetration'},
                    {text: 'Idea-Jrebel热部署', link: 'idea-jrebel'},
                    {text: '批量重命名工具renamer', link: 'renamer'},
                    {text: 'yuque-dl 语雀知识库下载', link: 'yuque-dl'},
                    {text: 'Docker镜像加速', link: 'docker-accelerate'},
                    {text: 'JDK 版本与字节码', link: 'jdk-major'},
                ],
            },
            {
                text: '人工智能',
                collapsed: false,
                base: '/ai/',
                items: [
                    {text: '手记', link: 'notes'},
                    {text: '资源记录', link: 'resource'},
                    {text: '开源相关', link: 'opensource'},
                ],
            },
            {
                text: 'docker-compose编排组件',
                collapsed: false,
                base: '/docker-compose/',
                items: [
                    {text: '手记', link: 'index'},
                    {text: 'MySQL', link: 'mysql'},
                    {text: 'Redis', link: 'redis'},
                    {text: 'Nginx', link: 'nginx'},
                    {text: 'Minio', link: 'minio'},
                    {text: 'sonatype/nexus3', link: 'nexus3'},
                    {text: 'nacos/nacos-server ', link: 'nacos'},
                    {text: 'nginx-proxy-manager', link: 'nginx-proxy-manager'},
                    {text: 'nginx-web-ui', link: 'nginx-web-ui'},
                    {text: 'umami', link: 'umami'},
                    {text: 'uptime-kuma', link: 'uptime-kuma'},
                    {text: 'cloud-canal', link: 'cloud-canal'},
                    {text: 'gitlab', link: 'gitlab'},
                    {text: 'xxl-job', link: 'xxl-job'},
                    {text: 'dpanel', link: 'dpanel'},
                    {text: 'elasticsearch', link: 'elasticsearch'},
                ],
            },
            {
                text: '实用网站',
                collapsed: false,
                base: '/websites/',
                items: [
                    {text: '程序开发常用网址', link: 'common-website'},
                    {text: '大佬博客', link: 'excellent-blog'},
                    {text: '开源镜像站点', link: 'mirror-site'},
                    {text: 'Api平台', link: 'api'},
                    {text: '杂用', link: 'miscellaneous'},
                    {text: 'ai相关', link: 'ai'},
                ],
            },
            {
                text: '文章手记',
                collapsed: false,
                base: '/notes/',
                items: [
                    {text: '晶哥常用', link: 'common-use'},
                    {text: '开源项目收集', link: 'opensource'},
                    {text: '所见所闻', link: 'heard'},
                    {text: '工具资源', link: 'tools'},
                    {text: '晶哥哥的Vagrant配置', link: 'vagrant'},
                    {text: '资源记录', link: 'resource'},
                    {text: '图床', link: 'draw-bed'},
                    {text: 'ChatGPT', link: 'gpt'},
                    {
                        text: '前端', collapsed: false, base: '/notes/front/', items: [
                            {text: '常用网站', link: 'common-sites'},
                            {text: 'npm镜像', link: 'npm-mirror'},
                            {text: 'nvm管理node版本', link: 'nvm'},
                            {text: '实用项目&库', link: 'practical-projects'},
                            {text: 'echarts图表', link: 'echarts'},
                            {text: '符号&图标', link: 'icon'},
                            {text: 'ElementPlus离线文档搭建', link: 'element-plus'},
                            {text: 'Vue表格拖拽排序', link: 'vue-table-sort'},
                            {text: 'Vue中与子iframe的html交互', link: 'vue-iframe'},
                            {text: 'Svg转Image', link: 'svg-to-image'},
                        ]
                    },
                    {text: '🐔场', link: 'vpn'},
                    {text: '游戏娱乐', link: 'game'},
                ],
            },
            {
                text: '下载',
                collapsed: false,
                base: '/download/',
                items: [
                    {text: 'CentOS下载', link: 'centos'},
                    {text: 'Ubuntu下载', link: 'ubuntu'},
                ],
            },
            {
                text: '镜像',
                collapsed: false,
                base: '/images/',
                items: [
                    {text: 'jarboot', link: 'jarboot'},
                    {text: 'dragonwell', link: 'dragonwell'},
                    {text: 'varbook', link: 'varbook'},
                    {
                        text: 'registry.cn-qingdao.aliyuncs.com',
                        base: '/images/registry.cn-qingdao.aliyuncs.com/',
                        items: [
                            {
                                text: 'xuxiaoweicomcn',
                                base: '/images/registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/',
                                items: [
                                    {text: 'apache-kafka', link: 'apache-kafka'},
                                    {text: 'elasticsearch', link: 'elasticsearch'},
                                    {text: 'filebeat', link: 'filebeat'},
                                    {text: 'gitlab', link: 'gitlab'},
                                    {text: 'gitlab-runner', link: 'gitlab-runner'},
                                    {text: 'jenkins', link: 'jenkins'},
                                    {text: 'gcr.io/kaniko-project/executor', link: 'kaniko-project-executor'},
                                    {text: 'kibana', link: 'kibana'},
                                    {text: 'logstash', link: 'logstash'},
                                    {text: 'maven', link: 'maven'},
                                    {text: 'minio', link: 'minio'},
                                    {text: 'mysql', link: 'mysql'},
                                    {text: 'nacos-server', link: 'nacos-server'},
                                    {text: 'nexus3', link: 'nexus3'},
                                    {text: 'nginx', link: 'nginx'},
                                    {text: 'redis', link: 'redis'},
                                ]
                            },
                        ]
                    },
                ],
            },
            {
                text: '运维',
                collapsed: false,
                base: '/operation-and-maintenance/',
                items: [
                    {text: '常用命令', link: 'common-command'},
                    {text: '网站', link: 'website'},
                    {
                        text: 'Docker',
                        base: '/operation-and-maintenance/docker/',
                        items: [{text: 'Docker安装', link: 'docker-install'}],
                    },
                    {
                        text: 'Shell',
                        base: '/operation-and-maintenance/shell/',
                        items: [
                            {text: 'Jdk安装', link: 'jdk-install'},
                            {text: 'MySQL安装', link: 'mysql-install'},
                            {text: 'Nginx安装', link: 'nginx-install'},
                            {text: 'Redis安装', link: 'redis-install'},
                        ],
                    },
                    {
                        text: 'Kubernetes',
                        base: '/operation-and-maintenance/kubernetes/',
                        items: [
                            {text: '常用', link: 'common-use'},
                        ],
                    },
                ],
            },
            {
                text: 'SSL/TLS/HTTPS 证书',
                collapsed: false,
                base: '/ssl/',
                items: [
                    {text: '使用 acme.sh 生成证书', link: 'acme.sh'},
                    {text: 'httpsok', link: 'httpsok'},
                    {text: 'certimate', link: 'certimate'}
                ],
            },
            {
                text: '🚩面试',
                collapsed: false,
                base: '/interview/',
                items: [
                    {text: '🚨声明', link: '声明'},
                    {text: '✅面试前必须要准备哪些内容？', link: '面试前必须要准备哪些内容'},
                    {text: '✅项目介绍如何准备', link: '项目介绍如何准备'},
                    {text: '✅简历指导', link: '简历指导'},
                    {
                        text: '🎉场景题目',
                        base: '/interview/scene/',
                        items: [{text: '✅订单到期关闭如何实现', link: '订单到期关闭如何实现'}],
                    },
                    {
                        text: '🎉项目难点&亮点',
                        base: '/interview/project-difficulties/',
                        items: [
                            {
                                text: '✅你的项目有哪些难点&亮点？',
                                link: '项目难点和亮点'
                            },
                            {
                                text: '✅引入分布式锁解决并发问题',
                                link: '引入分布式锁解决并发问题',
                            },
                            {
                                text: '✅使用CompletableFuture完成并发编排，提升接口性能',
                                link: '使用CompletableFuture完成并发编排，提升接口性能',
                            },
                            {
                                text: '✅基于SpringEvent，实现同步转异步，解决定时任务扫表导致数据库连接池不够的问题',
                                link: '基于SpringEvent，实现同步转异步，解决定时任务扫表导致数据库连接池不够的问题',
                            },
                            {
                                text: '✅通过采用“一锁二判三更新”方式设计接口幂等，解决支付单重复支付的问题',
                                link: '通过采用“一锁二判三更新”方式设计接口幂等，解决支付单重复支付的问题',
                            },
                            {
                                text: '✅基于TTL 解决线程池中 ThreadLocal 线程无法共享的问题',
                                link: '基于TTL解决线程池中ThreadLocal线程无法共享的问题',
                            },
                            {
                                text: '✅基于Redis的zset实现秒级排行榜',
                                link: '基于Redis的zset实现秒级排行榜',
                            },
                            {
                                text: '✅通过热点数据预热、多级缓存、异步化编程等方式解决热门数据接口耗时长问题',
                                link: '通过热点数据预热、多级缓存、异步化编程等方式解决热门数据接口耗时长问题',
                            },
                        ],
                    },
                    {
                        text: '🎉Java基础',
                        base: '/interview/java-base/',
                        items: [{text: '✅面向对象的五大基本原则', link: '面向对象的五大基本原则'}],
                    },
                    {
                        text: '🎉Java并发',
                        base: '/interview/java-concurrency/',
                        items: [{text: '✅什么是多线程中的上下文切换', link: '什么是多线程中的上下文切换'}],
                    },
                ],
            },

        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/xiaoxiaojingge',
            },
            {
                link: 'https://gitee.com/xiaojinggege',
                icon: {
                    svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711680016792" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5075" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="5076"></path></svg>',
                },
            },
        ],

        editLink: {
            text: '在 Gitee 上编辑此页面',
            pattern: ({filePath}) => {
                return `https://gitee.com/xiaojinggege/xiaojingge-doc/edit/main/${filePath}`
            },
        },

        footer: {
            copyright:
                'Copyright © 2024-present 筱晶哥哥 <a href="mailto:2427259171@qq.com">2427259171@qq.com</a><br>' +
                '<a id="beian-miit-gov-cn" target="_blank" href="https://beian.miit.gov.cn/">苏ICP备2021004632号</a>',
        },
    },
    markdown: {
        config: (md) => {
            md.use(mathjax3)
        },
    },
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElements.includes(tag),
            },
        },
    },
})
