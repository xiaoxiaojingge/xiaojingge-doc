# Anaconda

[Anaconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

[Miniconda下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

Miniconda是 Anaconda 分发版的一个更精简的版本。

## windows安装Miniconda

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

## Linux安装Miniconda

```bash
# 下载安装脚本，从此处获取：https://mirror.sjtu.edu.cn/
wget https://s3.jcloud.sjtu.edu.cn/899a892efef34b1b944a19981040f55b-oss01/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh
# 赋予执行权限
chmod +x Miniconda3-latest-Linux-x86_64.sh
# 执行
bash Miniconda3-latest-Linux-x86_64.sh
# 刷新环境变量
source ~/.bashrc
# 查看版本
conda --version
```

如果wget下载慢，使用阿里DNS

1. 编辑 `/etc/resolv.conf` 文件：

   ```bash
   sudo nano /etc/resolv.conf
   ```

2. 添加以下内容：

   ```bash
   nameserver 223.6.6.6
   nameserver 223.5.5.5
   ```

3. 保存并退出。

   > 保存文件
   >
   > 1. **按下 `Ctrl + O`**（字母 "O" 的大写），这会提示你确认保存文件。
   > 2. **按下 `Enter`** 键，确认文件名（通常默认是 `/etc/resolv.conf`）。
   >
   > 退出编辑器
   >
   > 1. **按下 `Ctrl + X`**，这将退出 `nano` 编辑器。

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

### 永久配置-windows

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

### 永久配置-linux

```bash
mkdir -p ~/.pip

vim ~/.pip/pip.conf

# 写入如下内容

[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn

# 验证
pip config list
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

# 国内开源镜像站点汇总

[参考地址](https://blog.csdn.net/hbwhypw/article/details/114657760)

## 站点版

### ① 企业站

网易：https://mirrors.163.com/

搜狐：http://mirrors.sohu.com/

阿里云：https://mirrors.aliyun.com

首都在线科技股份有限公司（英文名Capital Online Data Service）：http://mirrors.yun-idc.com/

华为云：https://mirrors.huaweicloud.com/

腾讯云：https://mirrors.cloud.tencent.com/

平安云：https://mirrors.pinganyun.com/

开源社/Azure中国：http://mirror.azure.cn/

OpenTuna/AWS中国：https://opentuna.cn/

### ② 教育站

中国科技大学：https://mirrors.ustc.edu.cn/

清华大学：https://mirrors.tuna.tsinghua.edu.cn/

北京外国语大学：http://mirrors.bfsu.edu.cn/

北京交通大学：https://mirror.bjtu.edu.cn/

兰州大学：http://mirror.lzu.edu.cn/

上海交通大学：http://ftp.sjtu.edu.cn/

大连东软信息学院：http://mirrors.neusoft.edu.cn/

浙江大学：http://mirrors.zju.edu.cn/

重庆大学：http://mirrors.cqu.edu.cn/

南阳理工学院：http://mirror.nyist.edu.cn/

中科院高能物理研究所：http://mirror.ihep.ac.cn/，http://mir-cern.ihep.ac.cn/

西北农林科技大学：https://mirrors.nwafu.edu.cn/，https://mirrors.nwsuaf.edu.cn/

大连理工大学：http://mirror.dlut.edu.cn/

山东女子学院：http://mirrors.sdwu.edu.cn/

西安交通大学：https://mirrors.xjtu.edu.cn/

上海交通大学SJTUG：https://mirrors.sjtug.sjtu.edu.cn/

南京邮电大学：http://mirrors.njupt.edu.cn/

南京大学：http://mirrors.nju.edu.cn/

同济大学：https://mirrors.tongji.edu.cn/

华南农业大学：https://mirrors.scau.edu.cn/

东莞理工学院：https://mirrors.dgut.edu.cn/

重庆邮电大学：http://mirrors.cqupt.edu.cn/  ，https://mirror.redrock.team/

云南大学：http://mirrors.ynuosa.org/index/（镜像站列表）,http://pypi.opensource.ynu.edu.cn/（收录pypi）

哈尔滨工业大学：https://mirrors.hit.edu.cn/

南方科技大学：https://mirrors.sustech.edu.cn/

# 配置镜像加速

```bash
# 查看配置文件所在路径
conda config --show-sources
```

![](https://image.xiaojingge.com/img/image-20241009205230625.png?imageslim)

### 方式一：命令行

```shell
# 查看配置
conda config --show channels

# 添加4个新的channels
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge 
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
# 显示包的安装来源
conda config --set show_channel_urls yes
# 包安装跳过【y/n】
conda config --set always_yes yes

# 如果不需要，配置错了，可进行移除操作
# conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
# 移除defaults
# conda config --remove channels defaults
```

### 方式二：配置文件 - 清华镜像

参考 https://mirrors.tuna.tsinghua.edu.cn/help/anaconda

修改配置文件 `C:\Users\xiaojingge\.condarc`

```yml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
# 包安装跳过【y/n】
always_yes: true
```

```shell
# 清除索引缓存，保证用的是镜像站提供的索引。
conda clean -i

# 测试
conda create -n my_env_name python=3.11
```