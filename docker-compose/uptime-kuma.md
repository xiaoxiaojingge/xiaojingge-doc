```yaml
version: '3'

# https://github.com/louislam/uptime-kuma
# 服务器监控
services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma
    volumes:
      - ./data:/app/data
    ports:
      - 3001:3001
```
