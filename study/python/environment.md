# Anaconda

[Anaconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

[Miniconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

Miniconda是 Anaconda 分发版的一个更精简的版本。

## 安装Miniconda

下载：https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/

双击安装。

配置环境变量：

```bash
# 比如我的安装路径为：D:\workspace_coding\environment\miniconda3

# 在系统Path变量添加
D:\workspace_coding\environment\miniconda3
D:\workspace_coding\environment\miniconda3\Library\bin
D:\workspace_coding\environment\miniconda3\Scripts
```

## Conda配置清华镜像源

### 查看镜像源

```bash
conda config --show channels
```

### 删除添加源，恢复默认源

```bash
conda config --remove-key channels
```

### 添加清华镜像源

```bash
# 添加镜像源
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud//pytorch/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
# 终端显示包从哪个channel下载，以及下载地址是什么
conda config --set show_channel_urls yes
```

# Pip

## Pip配置清华镜像源

### 临时使用清华镜像源

命令如下（示例）：

```bash
# some-package代表你需要安装的包
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

下面这种方式也是一样的

```bash
pip install some-package -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 永久配置

命令如下（示例）：

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

Window系统中配置永久镜像源

进入我的电脑输入`%APPDATA%`按下回车，自动转到一个文件夹在这里，我们新建一个文件夹，命名为pip 在这个文件夹里，新建pip.ini文件

Window系统用户都是在用户目录下修改 `~/pip/pip.ini` 文件，如果不存在则创建相关的文件或目录。

`.pip/pip.ini`配置文件的内容

```ini
[global]
time-out = 60
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/

[install]
trusted-host = tsinghua.edu.cn
```

# 国内常用的镜像源

[参考地址](https://www.jianshu.com/p/e22fe65530bb)

清华大学开源软件镜像站：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云开源镜像站：https://mirrors.aliyun.com/pypi/simple/

豆瓣：https://pypi.douban.com/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

上海交通大学： https://mirror.sjtu.edu.cn

校园网联合镜像站：https://mirrors.cernet.edu.cn/list

北京大学：https://mirrors.pku.edu.cn/Mirrors

南阳理工学院开源软件镜像站：https://mirror.nyist.edu.cn/

齐鲁工业大学开源软件镜像站：https://mirrors.qlu.edu.cn/

南大：https://mirrors.nju.edu.cn/

西安交通大学软件镜像站：https://mirrors.xjtu.edu.cn/

浙江大学开源软件镜像站：https://mirrors.zju.edu.cn/

南方科技大学开源镜像站：https://mirrors.sustech.edu.cn/

淘宝 CNPM Binaries Mirror：https://registry.npmmirror.com/binary.html

ISCAS 中国科学院软件研究所：https://mirror.iscas.ac.cn/

网易开源镜像站：https://mirrors.163.com/

山东大学镜像站：https://mirrors.sdu.edu.cn/index.html#/mirror

重庆大学开源软件镜像站：https://mirrors.cqu.edu.cn/#/

# CUDA和cuDNN安装

https://blog.csdn.net/qq_37638909/article/details/139468713

## CUDA下载

https://developer.nvidia.com/cuda-toolkit-archive

## cuDNN下载

https://developer.download.nvidia.cn/compute/cudnn/redist/cudnn/windows-x86_64/