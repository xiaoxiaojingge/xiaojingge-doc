Docker 可视化面板系统，提供完善的 docker 管理功能。

对比于 Portainer，Dpanel 更加倾向于国人。

```yaml
# https://github.com/donknap/dpanel
# 默认登录账号密码：`admin / admin`
version: "3"
services:
  xxl-job-admin:
    image: registry.cn-hangzhou.aliyuncs.com/dpanel/dpanel:latest
    container_name: dpanel
    restart: always
    volumes:
      - './dpanel:/dpanel
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      APP_NAME: "dpanel"
    ports:
      - "8807:8080"
      - "8808:80"
```