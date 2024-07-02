```yaml
version: '3.2'

# https://github.com/cym1102/nginxWebUI
services:
  nginx-web-ui:
    image: cym1102/nginxwebui:latest
    volumes:
      - type: bind
        source: './data'
        target: '/home/nginxWebUI'
      - type: bind
        source: './usr/local/website'
        target: '/usr/local/website'
    environment:
      BOOT_OPTIONS: '--server.port=8888'
    privileged: true
    network_mode: 'host'
```
