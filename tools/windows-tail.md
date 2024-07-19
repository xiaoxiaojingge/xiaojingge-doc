在 Linux 系统中，经常用到这样一个命令 `tail`，tail 命令可用于查看文件的内容，有一个常用的参数 `-f` 常用于查阅正在改变的日志文件。

`tail -f filename` 会把 filename 文件里的最尾部的内容显示在屏幕上，并且不断刷新，只要 filename 更新就可以看到最新的文件内容。

在 windows 中我也想使用这个命令怎么办？下面介绍如何在 windows 中安装使用 tail。

在 windows 中搭配 xshell 查看日志文件的内容也是挺香的。

<!--more-->

1、下载文件：[点我下载](https://image.xiaojingge.com/tools/tail.exe)

2、将 tail.exe 放入 C:\Windows 或 C:\Windows\System32 或 C:\Windows\SysWOW64 文件夹

3、直接运行

```bash
tail -10 xxx.log # 查看后10行
tail -f xxx.log # 实时查看
```
