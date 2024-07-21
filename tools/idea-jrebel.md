## 运行反代理工具

### 自己搭建

```
docker run -d --name jrebel -p 8888:8888 registry.cn-hangzhou.aliyuncs.com/zhengqing/jrebel
```

默认反代`idea.lanyus.com`, 运行起来后

1. 激活地址： `ip地址:8888/UUID` -> 注：UUID可以自己生成，并且必须是UUID才能通过验证 -> [UUID在线生成](http://www.uuid.online/)
2. 邮箱随意填写

### 使用别人打包好的

首先在如下网址中下载一个exe文件：https://github.com/ilanyu/ReverseProxy/releases

文件为

![](https://image.xiaojingge.com/img/2020062814431830.png)

然后双击运行该文件，在idea的Help下选择JRebel，Activation

输入 `http://127.0.0.1:8888/GUID`

[UUID在线生成1](http://www.uuid.online/)

[UUID在线生成2](https://www.guidgen.com/)

邮箱随便填，然后勾选下方同意协议，点击注册，最后完成后将JRebel 改为 work offine。



### 使用 WinSW 将其注册为服务

```xml
<!--
  配置示例：https://github.com/winsw/winsw/blob/master/examples/sample-allOptions.xml
  需要使用管理员身份运行
  注册服务：WinSW-x64.exe install
  卸载服务：WinSW-x64.exe uninstall
  查看状态：sc query xxx
  启动服务：sc start xxx、net start xxx
  停止服务：sc stop xxx、net stop xxx
  如果 xxx 服务在运行时，卸载了 xxx 服务，xxx 服务在 Windows 服务列表中不会消失，消失时间为服务停止后
-->
<service>
    <!-- Windows 服务名 -->
    <id>ReverseProxy</id>
    <!-- 名称 -->
    <name>ReverseProxy</name>
    <!-- 描述 -->
    <description>Jrebel本地代理服务</description>
    <!-- 执行命令 -->
    <executable>"D:\workspace_coding\environment\Jrebel-ReverseProxy\ReverseProxy.exe"</executable>
    <!-- 执行参数 -->
    <arguments></arguments>
    <!--
        选项：日志路径
        为服务包装器生成的所有日志设置自定义日志记录目录
        默认值：目录，包含执行者
    -->
    <logpath>%BASE%\logs</logpath>
    <!-- 控制日志-->
    <log mode="roll-by-size">
        <!-- 一个日志文件大小 20480k（20M），单位是k-->
        <sizeThreshold>20480</sizeThreshold>
        <!-- 一共有 10 个日志文件，-->
        <keepFiles>10</keepFiles>
    </log>
</service>
```

