import { defineConfig } from 'vitepress'
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
  base: '/',
  head: [
    [
      'script',
      { id: 'baidu' },
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
  srcExclude: ['README.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
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
        ],
      },
    ],
    logo: { src: '/favicon.ico', width: 24, height: 24 },
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
          { text: '个人简介', link: '/guide/intro' },
          { text: '个人网址', link: '/guide/website' },
          // 由于此处链接使用了其他域名，所以上方不能使用基础地址
          // {
          //   text: '赞助',
          //   link: '',
          // },
          // {
          //   text: '视频',
          //   link: '',
          // },
        ],
      },
      {
        text: '项目',
        collapsed: false,
        base: '/project/',
        items: [{ text: '个人项目', link: 'personal' }],
      },
      {
        text: '个人学习',
        collapsed: false,
        base: '/study/',
        items: [{ text: '学习记录', link: 'record' }],
      },
      {
        text: '工具',
        collapsed: false,
        base: '/tools/',
        items: [
          { text: 'Git命令速查表', link: 'git' },
          { text: 'Idea命令速查表', link: 'idea' },
        ],
      },
      {
        text: '人工智能',
        collapsed: false,
        base: '/ai/',
        items: [
          { text: '手记', link: 'notes' },
          { text: '资源记录', link: 'resource' },
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
      pattern: ({ filePath }) => {
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
