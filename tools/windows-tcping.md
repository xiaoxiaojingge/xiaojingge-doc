tcping.exe 是一个控制台应用程序，其操作类似于“ping”，但它在 tcp 端口上工作。

在 Windows 上要查看指定 IP、端口 是否连通，通常要使用 telnet，但是 telnet 需要安装，有时安装过程中有时还要重启。

使用 `tcping -t IP 端口` 即可测试端口，`-t` 代表连续测试，需要放在 tcping 与 IP 之间

<!--more-->

## 下载

[官网](https://elifulkerson.com/projects/tcping.php)

[tcping.exe](https://image.xiaojingge.com/tools/tcping.exe)

[tcping64.exe](https://image.xiaojingge.com/tools/tcping64.exe)

如果信任该应用的话，可以将其放入到 C:\Windows\ 文件夹中，方便随时调用

## 使用

```bash
C:\Users\xiaojingge>tcping64 -t baidu.com 80

** Pinging continuously.  Press control-c to stop **

Probing 39.156.66.10:80/tcp - Port is open - time=24.255ms
Probing 39.156.66.10:80/tcp - Port is open - time=26.552ms
Probing 39.156.66.10:80/tcp - Port is open - time=26.702ms
Probing 39.156.66.10:80/tcp - Port is open - time=31.220ms
Probing 39.156.66.10:80/tcp - Port is open - time=24.344ms
Probing 39.156.66.10:80/tcp - Port is open - time=29.309ms
Probing 39.156.66.10:80/tcp - Port is open - time=26.840ms
Control-C

Ping statistics for 39.156.66.10:80
     7 probes sent.
     7 successful, 0 failed.  (0.00% fail)
Approximate trip times in milli-seconds:
     Minimum = 24.255ms, Maximum = 31.220ms, Average = 27.032ms
```
