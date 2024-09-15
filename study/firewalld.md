# CentOS Firewalld 防火墙 {id=firewalld}

[[toc]]

1. `firewalld` 是 CentOS 系列操作系统的防火墙
2. CentOS 系列操作系统包括：
    1. [Anolis OS](https://openanolis.cn/)：阿里云龙蜥操作系统

## 防火墙服务 {id=service}

| 命令                                       | 介绍          |
|------------------------------------------|-------------|
| `systemctl status firewalld.service`     | 查看防火墙状态     |
| `systemctl start firewalld.service`      | 启动防火墙       |
| `systemctl stop firewalld.service`       | 停止防火墙       |
| `systemctl restart firewalld.service`    | 重启防火墙       |
| `systemctl is-enabled firewalld.service` | 查看防火墙开启自启状态 |
| `systemctl enable firewalld.service`     | 打开防火墙开启自启   |
| `systemctl disable firewalld.service`    | 关闭防火墙开启自启   |

1. 若关闭防火墙服务，将允许所有 `端口/协议` 访问（系统存在对应端口的服务）

## 防火墙命令 {id=command}

| 命令                                                                                                        | 介绍                                       | 说明                 |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------|--------------------|
| `firewall-cmd --add-port=80/tcp --permanent`                                                              | 添加 `80` 端口的 `tcp` 协议 允许访问                | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --add-port=30000-32767/tcp --permanent`                                                     | 添加 `30000` 到 `32767` 端口的 `tcp` 协议 允许访问   | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --remove-port=80/tcp --permanent`                                                           | 删除 `80` 端口的 `tcp` 协议 允许访问                | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --remove-port=30000-32767/tcp --permanent`                                                  | 删除 `30000` 到 `32767` 端口的 `tcp` 协议 允许访问   | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --add-service=http --permanent`                                                             | 添加 `http` 服务 允许访问                        | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --remove-service=http --permanent`                                                          | 删除 `http` 服务 允许访问                        | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --zone=trusted --add-source=172.25.25.220 --permanent`                                      | 将 IP `172.25.25.220` 添加到信任区中             | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --zone=trusted --remove-source=172.25.25.220 --permanent`                                   | 将 IP `172.25.25.220` 从信任区中删除             | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --add-rich-rule='rule family="ipv6" port protocol="tcp" port="6500" accept' --permanent`    | 添加 `IPv6` 网络 `6500` 端口的 `tcp` 协议 允许访问 规则 | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --remove-rich-rule='rule family="ipv6" port protocol="tcp" port="6500" accept' --permanent` | 删除 `IPv6` 网络 `6500` 端口的 `tcp` 协议 允许访问 规则 | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --add-rich-rule='rule family="ipv6" port protocol="tcp" port="6500" reject' --permanent`    | 添加 `IPv6` 网络 `6500` 端口的 `tcp` 协议 拒绝访问 规则 | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --remove-rich-rule='rule family="ipv6" port protocol="tcp" port="6500" reject' --permanent` | 删除 `IPv6` 网络 `6500` 端口的 `tcp` 协议 拒绝访问 规则 | 需要重新加载/重启防火墙之后才能生效 |
| `firewall-cmd --reload`                                                                                   | 重新加载防火墙                                  | 用于加载修改的配置          |
| `firewall-cmd --list-ports`                                                                               | 查看端口配置                                   |                    |
| `firewall-cmd --list-services`                                                                            | 查看服务配置                                   |                    |
| `firewall-cmd --list-all`                                                                                 | 查看所有配置：端口、服务                             |                    |
| `firewall-cmd --list-all-zones`                                                                           | 查看所有区的配置：端口、服务                           |                    |

1. `--zone=public`：指定防火墙配置的分区，如果不指定，默认：`public` 公共区
2. `--permanent`：永久添加到防火墙配置中

<style>


._blog_firewalld #service + table  tr th:nth-child(1), 
._blog_firewalld #service + table tr td:nth-child(1) {
    min-width: 290px;
}

._blog_firewalld #service + table tr th:nth-child(2), 
._blog_firewalld #service + table tr td:nth-child(2) {
    min-width: 175px;
}

._blog_firewalld #command + table tr th:nth-child(1), 
._blog_firewalld #command + table tr td:nth-child(1) {
    min-width: 725px;
}

._blog_firewalld #command + table tr th:nth-child(2), 
._blog_firewalld #command + table tr td:nth-child(2) {
    min-width: 375px;
}

._blog_firewalld #command + table tr th:nth-child(3), 
._blog_firewalld #command + table tr td:nth-child(3) {
    min-width: 265px;
}
</style>