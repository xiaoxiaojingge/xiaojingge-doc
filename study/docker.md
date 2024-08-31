# Docker {id=docker}

本文转自：[徐晓伟文档](https://xuxiaowei.com.cn/blog/docker.html)

[[toc]]

## 安装 Docker {id=install-docker}

### CentOS 安装 Docker {id=centos-install-docker}

::: code-group

```shell [腾讯源]
sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo docker info
sudo docker ps
sudo docker images
```

```shell [阿里源]
sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo docker info
sudo docker ps
sudo docker images
```

```shell [官方源]
sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo docker info
sudo docker ps
sudo docker images
```

:::

### 类 CentOS 安装 Docker {id=similar-centos-install-docker}

::: warning 警告

1. 如果需要安装 Docker 的操作系统不是 CentOS，而是 CentOS 系列的操作系统（比如：可以使用 yum 安装软件），
   可使用下方命令安装 Docker
2. 若操作系统基于 CentOS 7/8/9 发布，则可以选择下方对应的命令
3. 若无法确定操作系统基于 CentOS 几 发布，根据尝试下方的 3 个选择

:::

1. 基于 <strong><font color="red">CentOS 7</font></strong> 的系统

   ::: code-group

   ```shell [腾讯源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#7#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [阿里源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#7#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [官方源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#7#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   :::

2. 基于 <strong><font color="red">CentOS 8</font></strong> 的系统

   ::: code-group

   ```shell [腾讯源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#8#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [阿里源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#8#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [官方源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#8#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   :::

3. 基于 <strong><font color="red">CentOS 9</font></strong> 的系统

   ::: code-group

   ```shell [腾讯源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.cloud.tencent.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#9#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [阿里源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#9#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   ```shell [官方源]
   sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
   sudo yum install -y yum-utils
   sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
   sudo sed -i "s#\$releasever#9#" /etc/yum.repos.d/docker-ce.repo
   sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo docker info
   sudo docker ps
   sudo docker images
   ```

   :::

## Docker 命令 {id=command}

- 执行 Docker 命令存在多种方式，如：本机执行、远程调用等

### 执行优先级（从高到低） {id=order}

| 配置                                    | 介绍                | 说明                                                                      |
|---------------------------------------|-------------------|-------------------------------------------------------------------------|
| `docker --host 172.25.25.4:2375`      | 在命令中指定远程调用的端口     | 需要被调用 docker 服务开通远程调用端口，或者使用参数别名 `docker -H 172.25.25.4:2375`           |
| `DOCKER_HOST=tcp://172.25.25.61:2375` | 使用环境变量远程调用 docker | 需要被调用 docker 服务开通远程调用端口，也可以使用 `DOCKER_HOST=unix:///var/run/docker.sock` |
| `/run/docker.sock`                    | Linux 文件（目录）      | 本机安装时默认使用，也可在当前机器的 Docker-in-Docker 中挂载此目录使用                            |

::: warning 警告

1. 环境中存在 `DOCKER_TLS_VERIFY`、`DOCKER_CERT_PATH` 等环境变量时将启用 Docker TLS 验证
2. 如果不想使用 Docker TLS 进行 Docker 调用，
   请使用命令 `unset DOCKER_TLS_VERIFY`、`unset DOCKER_CERT_PATH` 删除环境变量后再运行 docker

:::

### 查看远端镜像支持的所有架构 {id=manifest-inspect}

```shell
docker manifest inspect ghcr.io/graalvm/jdk-community:22.0.2
```

### 构建 {id=build}

| 命令/参数                                                           | 是否必填 | 说明                                                                       |
|-----------------------------------------------------------------|------|--------------------------------------------------------------------------|
| `docker build`                                                  | 必填   | 构建 Docker 镜像的命令                                                          |
| `-t registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/test:0.0.1` | 必填   | 指定构建镜像标签。数组，可指定多个标签。完整参数：`--tag`                                         |
| `.`                                                             | 必填   | Dockerfile 所在上下文目录，这里代表当前目录                                              |
| `--build-arg A=123`                                             | 可选   | 构建时指定的参数。数组，可指定多个参数                                                      |
| `--no-cache`                                                    | 可选   | 构建过程中不使用缓存，默认：使用缓存。此参数可能会导致重复构建速度降低。查看完整日志时需要，常与 `--progress plain` 一起使用 |
| `--progress plain`                                              | 可选   | 构建过程中删除格式，`plain` 会让输出更详细，易于调试                                           |
| `--push`                                                        | 可选   | 构建完成后自动推送镜像                                                              |

```shell
docker build --build-arg A=123 -t registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/test:0.0.1 . --no-cache --progress plain --push
```

::: warning 警告

1. 使用 `--push` 参数前，需要先登录对应的 Docker 仓库

:::

### 保存/加载镜像 {id=save-load}

1. 用于备份/迁移镜像
2. 用于在网络不好/无网络/离线安装等环境下使用 Docker 镜像

```shell
# nginx-1.27.1.tar：导出到磁盘上的文件名
# nginx:1.27.1：镜像名称
docker save -o nginx-1.27.1.tar nginx:1.27.1
ls -lh
```

```shell
# nginx-1.27.1.tar：从磁盘导入的镜像文件名
docker load -i nginx-1.27.1.tar
docker images
```

### 导出/导入镜像 {id=export-import}

1. 将 Docker 容器导出为文件，常用于备份容器
2. 用于在不同机器间迁移 Docker 容器

```shell
docker export -o nginx_2024-08-27-10-19.tar nginx
```

```shell
docker import nginx_2024-08-27_10-19.tar nginx:2024-08-27-10-19
```

### 提交 {id=commit}

1. 将容器保存为一个 Docker 镜像

```shell
# <container_id>：容器名称/容器ID
# repository:tag：镜像名称
docker commit <container_id> repository:tag
```

## 信任/忽略证书验证 {id=certs}

### 文档

1. https://docs.docker.com/engine/security/certificates/
2. https://docker-docs.xuxiaowei.com.cn/engine/security/certificates/

### <font color="red">信任</font>证书 {id=trust-certs}

::: code-group

```shell [无端口]
# 要信任的 Docker 仓库域名
domain_name=registry.xuxiaowei.com.cn

mkdir -p /etc/docker/certs.d/$domain_name
openssl s_client -showcerts -connect $domain_name:443 -servername $domain_name < /dev/null 2>/dev/null | openssl x509 -outform PEM > /etc/docker/certs.d/$domain_name/ca.crt
echo | openssl s_client -CAfile /etc/docker/certs.d/$domain_name/ca.crt -connect $domain_name:443 -servername $domain_name
ls -lh /etc/docker/certs.d/$domain_name
```

```shell [有端口]
# 要信任的 Docker 仓库域名
domain_name=registry.xuxiaowei.com.cn
# 要信任的 Docker 仓库域名端口
port=443

mkdir -p /etc/docker/certs.d/$domain_name:$port
openssl s_client -showcerts -connect $domain_name:$port -servername $domain_name < /dev/null 2>/dev/null | openssl x509 -outform PEM > /etc/docker/certs.d/$domain_name:$port/ca.crt
echo | openssl s_client -CAfile /etc/docker/certs.d/$domain_name:$port/ca.crt -connect $domain_name:$port -servername $domain_name
ls -lh /etc/docker/certs.d/$domain_name:$port
```

:::

::: warning 警告

1. `registry.xuxiaowei.com.cn` 与 `registry.xuxiaowei.com.cn:443` 属于不同的配置
2. 缺点：虽然无需重启 docker 服务，但 Docker 仓库证书如果更新了，需要重新配置一遍
3. 优点：在完成证书信任配置`后`，无需担心 DNS 是否受到污染，信任机制来源于 `/etc/docker/certs.d/` 已配置的证书

:::

### <font color="red">忽略</font>证书验证 {id=ignore-certs}

```shell
vim /etc/docker/daemon.json
```

```json
{
  "insecure-registries": [
    "registry.xuxiaowei.com.cn:443",
    "registry.xuxiaowei.com.cn"
  ]
}
```

```shell
sudo systemctl restart docker
```

::: warning 警告

1. `registry.xuxiaowei.com.cn` 与 `registry.xuxiaowei.com.cn:443` 属于不同的配置
2. 缺点 1：需要重启 docker 服务
3. 缺点 2：如果 DNS 受到污染，拉取镜像将不可信

:::

## 开通远程调用的端口 {id=open-port}

::: danger 警告

1. 如果开通了远程调用的端口，所有能访问此端口的用户均有权限操作 docker，可能会受到攻击
2. 如果需要开通，请采取必要的安全措施，如：限制 IP 来源等

:::

```shell
vim /lib/systemd/system/docker.service
```

```shell
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
```

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 附录 {id=appendix}

### 帮助文档 {id=help}

::: details docker 帮助文档

```shell
[root@spring-boot-2 ~]# docker --help 

Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/root/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/root/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/root/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/root/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
```

:::

::: details docker 登录文档

```shell
[root@spring-boot-2 ~]# docker login --help 

Usage:  docker login [OPTIONS] [SERVER]

Log in to a registry.
If no server is specified, the default is defined by the daemon.

Options:
  -p, --password string   Password
      --password-stdin    Take the password from stdin
  -u, --username string   Username
```

:::

::: details docker 拉取镜像文档

```shell
[root@spring-boot-2 ~]# docker pull --help 

Usage:  docker pull [OPTIONS] NAME[:TAG|@DIGEST]

Download an image from a registry

Aliases:
  docker image pull, docker pull

Options:
  -a, --all-tags                Download all tagged images in the repository
      --disable-content-trust   Skip image verification (default true)
      --platform string         Set platform if server is multi-platform capable
  -q, --quiet                   Suppress verbose output
```

:::

::: details docker 推送镜像文档

```shell
[root@spring-boot-2 ~]# docker push --help 

Usage:  docker push [OPTIONS] NAME[:TAG]

Upload an image to a registry

Aliases:
  docker image push, docker push

Options:
  -a, --all-tags                Push all tags of an image to the repository
      --disable-content-trust   Skip image signing (default true)
  -q, --quiet                   Suppress verbose output
```

:::

::: details docker 保存文档

```shell
[root@spring-boot-2 ~]# docker save --help 

Usage:  docker save [OPTIONS] IMAGE [IMAGE...]

Save one or more images to a tar archive (streamed to STDOUT by default)

Aliases:
  docker image save, docker save

Options:
  -o, --output string   Write to a file, instead of STDOUT
```

:::

::: details docker 加载文档

```shell
[root@spring-boot-2 ~]# docker load --help 

Usage:  docker load [OPTIONS]

Load an image from a tar archive or STDIN

Aliases:
  docker image load, docker load

Options:
  -i, --input string   Read from tar archive file, instead of STDIN
  -q, --quiet          Suppress the load output
```

:::

::: details docker 导出文档

```shell
[root@spring-boot-2 ~]# docker export --help 

Usage:  docker export [OPTIONS] CONTAINER

Export a container's filesystem as a tar archive

Aliases:
  docker container export, docker export

Options:
  -o, --output string   Write to a file, instead of STDOUT
```

:::

::: details docker 导入文档

```shell
[root@spring-boot-2 ~]# docker import --help 

Usage:  docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]

Import the contents from a tarball to create a filesystem image

Aliases:
  docker image import, docker import

Options:
  -c, --change list       Apply Dockerfile instruction to the created image
  -m, --message string    Set commit message for imported image
      --platform string   Set platform if server is multi-platform capable
```

:::

::: details docker 提交文档

```shell
[root@spring-boot-2 ~]# docker commit --help 

Usage:  docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]

Create a new image from a container's changes

Aliases:
  docker container commit, docker commit

Options:
  -a, --author string    Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")
  -c, --change list      Apply Dockerfile instruction to the created image
  -m, --message string   Commit message
  -p, --pause            Pause container during commit (default true)
```

:::

::: details docker 信息

```shell
[root@spring-boot-2 ~]# docker info
Client: Docker Engine - Community
 Version:    26.1.3
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.14.0
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.27.0
    Path:     /usr/libexec/docker/cli-plugins/docker-compose

Server:
 Containers: 8
  Running: 4
  Paused: 0
  Stopped: 4
 Images: 24
 Server Version: 26.1.3
 Storage Driver: overlay2
  Backing Filesystem: xfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: false
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: systemd
 Cgroup Version: 2
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local splunk syslog
 Swarm: inactive
 Runtimes: runc io.containerd.runc.v2
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 8b3b7ca2e5ce38e8f31a34f35b2b68ceb8470d89
 runc version: v1.1.12-0-g51d5e94
 init version: de40ad0
 Security Options:
  seccomp
   Profile: builtin
  cgroupns
 Kernel Version: 6.6.25-2.1.an23.x86_64
 Operating System: Anolis OS 23
 OSType: linux
 Architecture: x86_64
 CPUs: 4
 Total Memory: 7.755GiB
 Name: spring-boot-2
 ID: 821a9498-61da-4784-b357-1e8fb314b6f2
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Experimental: false
 Insecure Registries:
  registry.xuxiaowei.com.cn
  registry.xuxiaowei.com.cn:443
  gitlab.xuxiaowei.com.cn:443
  127.0.0.0/8
 Live Restore Enabled: false

[DEPRECATION NOTICE]: API is accessible on http://0.0.0.0:2375 without encryption.
         Access to the remote API is equivalent to root access on the host. Refer
         to the 'Docker daemon attack surface' section in the documentation for
         more information: https://docs.docker.com/go/attack-surface/
In future versions this will be a hard failure preventing the daemon from starting! Learn more at: https://docs.docker.com/go/api-security/
```

:::

<style>

._blog_docker #order + table  tr th:nth-child(1), 
._blog_docker #order + table tr td:nth-child(1) {
    min-width: 270px;
}

._blog_docker #order + table tr th:nth-child(2), 
._blog_docker #order + table tr td:nth-child(2) {
    min-width: 210px;
}

._blog_docker #order + table tr th:nth-child(3), 
._blog_docker #order + table tr td:nth-child(3) {
    min-width: 645px;
}

._blog_docker #build + table  tr th:nth-child(1), 
._blog_docker #build + table tr td:nth-child(1) {
    min-width: 445px;
}

._blog_docker #build + table tr th:nth-child(2), 
._blog_docker #build + table tr td:nth-child(2) {
    min-width: 75px;
}

._blog_docker #build + table tr th:nth-child(3), 
._blog_docker #build + table tr td:nth-child(3) {
    min-width: 875px;
}
</style>