### 安装语句自动补全软件

```shell
yum -y install bash-completion
source /etc/profile
```

### Linux一键换源

https://linuxmirrors.cn/

命令：

```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

> 注意事项：
>
>  **需使用 `ROOT` 用户执行脚本**
>
> **建议使用 `SSH` 远程工具**
>
> **需要有`curl`命令**

### 安装Docker

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

