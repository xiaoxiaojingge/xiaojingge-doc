## nvm

### 介绍

node的版本管理器，可以方便地安装&切换不同版本的node。

### 下载

下载地址：[nvm github下载地址](https://github.com/coreybutler/nvm-windows/releases)

### 安装

> 把电脑上面的node环境先卸载干净
>
> 1. 开始 -> 设置 -> 应用，卸载 nodejs
>
> 2. 在文件目录中把node、npm相关文件都删掉
     >
     >    以下是我电脑中存在的目录：
     >
     >

- C:\Users\Administrator\AppData\Roaming

>
> 3. 将相关的环境变量都删掉
>
> 4. 双击 `安装文件`  进行安装，安装位置根据实际情况来
>
> 5. 一般安装好之后环境变量会自动设置好，但是NVM_SYMLINK下需要加一个空目录文件存放npm包
>
> 6. `nvm -v` ，查看nvm版本，判断是否安装成功

**可以通过以下命令，进行node版本的安装，替换**

```bash
nvm list     # 查看已安装的nodejs版本
nvm on       # 启用node.js版本管理
nvm off      # 禁用node.js版本管理(不卸载任何东西)
nvm install <version>       # 安装node.js的命名 version是版本号 例如：nvm install 8.12.0
nvm use <version>           # 使用某一version的nodejs
nvm uninstall <version>     # 卸载指定版本的nodejs

nvm list # 查看已经安装的版本
nvm list installed # 查看已经安装的版本
nvm list available # 查看网络可以安装的版本
nvm version # 查看当前的版本
nvm install # 安装最新版本
nvm use <version> # 切换使用指定的版本
nvm current # 显示当前版本
nvm alias <name> <version> # 给不同的版本号添加别名
nvm unalias <name> # 删除已定义的别名
nvm reinstall-packages <version> # 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on # 打开nodejs控制
nvm off # 关闭nodejs控制
nvm proxy # 查看设置与代理
nvm node_mirror [url] # 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 Index of /dist/
nvm npm_mirror [url] # 设置或者查看setting.txt中的npm_mirror，如果不设置的话默认的是： https://github.com/npm/npm/archive/
nvm uninstall <version> # 卸载制定的版本
nvm use [version] [arch] # 切换制定的node版本和位数
nvm root [path] # 设置和查看root路径
```

**在settings中加入两行代码，采用淘宝镜像**

```bash
node_mirror http://npmmirror.com/mirrors/node/
npm_mirror https://npmmirror.com/mirrors/npm/
```

### nvm可视化管理node版本工具

Node Version Manager Desktop

下载地址：https://github.com/1111mp/nvm-desktop/releases

![](https://image.xiaojingge.com/img/image-20241224095100589.png?imageslim)

![](https://image.xiaojingge.com/img/image-20241224095114804.png?imageslim)
