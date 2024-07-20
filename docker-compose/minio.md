```yaml
version: '3'
services:
  minio:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2024-07-16T23-46-41Z
    container_name: minio-2024-07-16T23-46-41Z
    restart: always
    volumes:
      - './minio-data:/data'
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
      MINIO_ROOT_USER: 'minio'
      MINIO_ROOT_PASSWORD: 'minio123456'
    command: server /data  --console-address ":9001"
    ports:
      - '9000:9000'
      - '9001:9001'
```
