# Anaconda

[Anaconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

[Miniconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

Miniconda是 Anaconda 分发版的一个更精简的版本。

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

清华大学开源软件镜像站：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云开源镜像站：https://mirrors.aliyun.com/pypi/simple/

豆瓣：https://pypi.douban.com/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

# CUDA下载

https://developer.nvidia.com/cuda-toolkit-archive