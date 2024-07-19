在 Linux 中 curl 是一个利用 URL 规则在命令行下工作的文件传输工具，可以说是一款很强大的 http 命令行工具。它支持文件的上传和下载，是综合传输工具，但按传统，习惯称 url 为下载工具。

在 windows 中我也想使用这个命令怎么办？下面介绍如何在 windows 中安装使用 curl。

<!--more-->

1. GitHub 仓库：[点我跳转](https://github.com/curl/curl)
2. GitHub 仓库 Windows 版：[点我跳转](https://github.com/curl/curl-for-win)
3. 下载页面：[点我跳转](https://curl.se/download.html)
4. Windows 版下载页面：[点我跳转](https://curl.se/windows/)
   1. 支持 64 位，最新版下载链接：[点我跳转](https://curl.se/windows/latest.cgi?p=win64-mingw.zip)
   2. 支持 ARM 64 位，最新版下载链接：[点我跳转](https://curl.se/windows/latest.cgi?p=win64a-mingw.zip)
   3. 支持 32 位，最新版下载链接：[点我跳转](https://curl.se/windows/latest.cgi?p=win32-mingw.zip)
5. 解压
6. 将 curl.exe 文件直接放入 C:\Windows 或 C:\Windows\System32 或 C:\Windows\SysWOW64 文件夹
7. cmd 可直接运行 curl

```bash
C:\Users\xiaojingge>curl -V
curl 7.83.1 (Windows) libcurl/7.83.1 Schannel
Release-Date: 2022-05-13
Protocols: dict file ftp ftps http https imap imaps pop3 pop3s smtp smtps telnet tftp
Features: AsynchDNS HSTS IPv6 Kerberos Largefile NTLM SPNEGO SSL SSPI UnixSockets

C:\Users\xiaojingge>curl www.baidu.com
<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>

C:\Users\xiaojingge>
```
