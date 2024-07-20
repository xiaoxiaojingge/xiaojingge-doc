winsw 是一个通用的 Windows 服务包装器，可以将任何可执行文件（.exe，.bat 等）包装成 Windows 服务。

winsw 不需要安装，仅需将 winsw.exe 和配置文件复制到指定目录即可。

winsw 通过一个 XML 配置文件来定义服务的行为，可以轻松地安装，卸载，启动和停止自定义 Windows 服务。

<!--more-->

## 下载

https://github.com/winsw/winsw/releases

https://repo.jenkins-ci.org/releases/com/sun/winsw/winsw/

## 特点

1、轻量级：winsw 非常轻便，处理 Windows 服务所需的文件非常少，而且不需要安装任何东西，只需要将 winsw.exe 和配置文件复制到指定目录即可。

2、易配置：winsw 使用 XML 作为配置文件格式，配置文件非常易于阅读和编辑。winsw 支持命令行参数来替代配置文件中的某些选项，从而使服务的配置更加简单。

3、灵活性：winsw 可以轻易地将几个脚本或可执行文件捆绑到一个 Windows 服务中。winsw 通过提供许多不同的配置选项来适应各种服务需求。

4、可扩展性：winsw 提供了丰富的扩展点来处理 Windows 服务的各种方面，例如日志记录和事件通知。

## 使用

winsw 的使用非常简单，只需要将 WinSW-x64.exe 和配置文件复制到指定目录即可。

以下是一个基本的 winsw 配置文件示例，以 nacos 为例。

```xml
<!--
  配置示例：https://github.com/winsw/winsw/blob/master/examples/sample-allOptions.xml
  需要使用管理员身份运行
  注册服务：WinSW-x64.exe install
  卸载服务：WinSW-x64.exe uninstall
  查看状态：sc query nacos
  启动服务：sc start nacos、net start nacos
  停止服务：sc stop nacos、net stop nacos
  如果 nacos 服务在运行时，卸载了 nacos 服务，nacos 服务在 Windows 服务列表中不会消失，消失时间为服务停止后
-->
<service>
    <!-- Windows 服务名 -->
    <id>nacos</id>
    <!-- 名称，比如nacos -->
    <name>nacos-server-2.2.2</name>
    <!-- 描述 -->
    <description>nacos服务</description>
    <!-- 启动执行命令 -->
    <executable>"D:\workspace_coding\docker\k8s\nacos-server-2.2.2\bin\startup.cmd"</executable>
    <!-- 启动执行参数 -->
    <startarguments>-m standalone</startarguments>
    <!-- 停止执行命令 -->
    <stopexecutable>"D:\workspace_coding\docker\k8s\nacos-server-2.2.2\bin\shutdown.cmd"</stopexecutable>
    <!-- 停止执行参数 -->
    <stoparguments></stoparguments>
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

## 相关文章

[winsw 使用——将 Nginx 和 Jar 包注册到 WIN 服务](https://blog.csdn.net/worilb/article/details/131155022)
