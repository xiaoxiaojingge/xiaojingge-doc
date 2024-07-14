科技 Lion 的 Shell 脚本工具是一款全能脚本工具箱，使用 shell 脚本编写。专为 Linux 服务器监控、测试和管理而设计。无论您是初学者还是经验丰富的用户，该工具都能为您提供便捷的解决方案。集成了独创的 Docker 管理功能，让您轻松管理容器化应用；LNMP 建站解决方案能帮助您快速搭建网站，站点优化，防御，备份还原迁移一应俱全；并且整合了各类系统工具面板的安装及使用，使系统维护变得更加简单。我们的目标是成为全网最优秀的 VPS 一键脚本工具，为用户提供高效、便捷的科技支持。

## 使用方法

### 安装基础组件

**Debian/Ubuntu**

```bash
apt update -y && apt install -y curl
```

**CentOS**

```bash
yum update && yum install -y curl
```

**Alpine Linux**

```bash
apk update && apk add curl
```

### 运行脚本

官网版

```bash
curl -sS -O https://kejilion.pro/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

GitHub 版、

```bash
curl -sS -O https://raw.githubusercontent.com/kejilion/sh/main/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

国内版

```bash
curl -sS -O https://raw.gitmirror.com/kejilion/sh/main/cn/kejilion.sh && chmod +x kejilion.sh && ./kejilion.sh
```

输入 `k` 可以快速启动脚本。
