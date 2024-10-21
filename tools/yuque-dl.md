## 介绍

yuque-dl 可以用来下载语雀知识库文档

Github：https://github.com/gxr404/yuque-dl

## 前置条件

- Node.js 18.4 or later

## 安装

```bash
npm i -g yuque-dl
```

## 使用

```bash
$ yuque-dl --help

  Usage:
    $ yuque-dl <url>

  Commands:
    <url>                语雀知识库url
    server <serverPath>  启动web服务

  For more info, run any command with the `--help` flag:
    $ yuque-dl --help
    $ yuque-dl server --help

  Options:
    -d, --dist-dir <dir>  下载的目录 eg: -d download (default: download)
    -i, --ignore-img      忽略图片不下载 (default: false)
    -k, --key <key>       语雀的cookie key， 默认是 "_yuque_session"， 在某些企业版本中 key 不一样 
    -t, --token <token>   语雀的cookie key 对应的值 
    --toc                 是否输出文档toc目录 (default: false)
    -h, --help            Display this message 
    -v, --version         Display version number 
```

开始

```bash
# url 为对应需要的知识库地址
yuque-dl "https://www.yuque.com/yuque/thyzgp"
```

## 其他场景

### 私有知识库

通过别人私有知识库 分享的链接，需使用-t添加token（cookie中_yuque_session的值，可以打开f12调试查看）才能下载

```bash
yuque-dl "https://www.yuque.com/yuque/thyzgp" -t "abcd..."
```

### 企业私有服务

企业服务有自己的域名(黄色语雀logo)，非`yuque.com`结尾, 如`https://yuque.antfin.com/r/zone`

这种情况 token的key不唯一, 不一定是为`_yuque_session` 需用户使用 `-k` 指定 token的key,`-t` 指定 token的值。

至于`key`具体是什么只能靠用户自己在 `浏览器Devtools-> Application -> Cookies` 里找了🤔

### 公开密码访问的知识库

⚠️ 公开密码访问的知识库两种情况:

- 已经登录语雀，访问需要密码的知识库 输入密码后使用`_yuque_session`这个cookie

  ```bash
  yuque-dl "url" -t "_yuque_session的值"
  ```

- 未登录语雀，访问需要密码的知识库 输入密码后需要使用`verified_books`/`verified_docs`这个cookie

  ```bash
  yuque-dl "url" -k "verified_books" -t "verified_books的值"
  ```

## 内置启动web服务可快速预览

使用[`vitepress`](https://vitepress.dev/)快速启动一个web服务提供可预览下载的内容

```bash
yuque-dl server ./download/知识库/

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## 常见错误

1、由于token可能含有 特殊字符导致参数识别错误

```bash
yuque-dl "https://www.yuque.com/yuque/thyzgp" -t "-a123"
yuque-dl [ERROR]: Unknown option `-1`
```

解决方案

```bash
yuque-dl "https://www.yuque.com/yuque/thyzgp" -t="-a123"
```

2、附件下载失败，需设置登录token

附件文件下载需要用户登录token，即使是完全公开的知识库，下载附件也可能需要
