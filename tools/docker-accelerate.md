## Docker镜像加速器列表

|               镜像加速器地址                |      其他说明       |
|:------------------------------------:|:---------------:|
|        https://dockerpull.com        |  CF的workers来搭建  |
|        https://dockerproxy.cn        |  CF的workers来搭建  |
|      https://docker.1panel.live      | 1Panel 面板提供（推荐） |
|         https://hub.rat.dev/         |     耗子面板提供      |
| https://n2zg5mlq.mirror.aliyuncs.com |       阿里云       |

下面命令可直接执行~

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.1panel.live",
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

####  