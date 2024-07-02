```yaml
version: '3'

# https://github.com/NginxProxyManager/nginx-proxy-manager
# 默认邮箱：admin@example.com
# 默认密码：changeme
services:
  proxy-manager:
    image: 'chishin/nginx-proxy-manager-zh:release'
    restart: always
    ports:
      - '80:80'
      - '443:443'
      - '8881:81'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```
