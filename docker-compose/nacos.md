```yaml
services:
  nacos:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nacos-server:v2.3.2
    container_name: nacos_v2_3_2
    restart: always
    ports:
      - "8848:8848"
      - "9848:9848"
    environment:
      MODE: standalone
      # 开启鉴权功能
      NACOS_AUTH_ENABLE: true
      # 设置Token的密钥，需大于32位字符串并转义成Base64编码
      NACOS_AUTH_TOKEN: "YWtkODkzNzY0ODk1Mzg3NDk4amtkaWV3a3Bsb2lkdWU="
      # 登录账号
      NACOS_AUTH_IDENTITY_KEY: "nacos"
      # 登录密码
      NACOS_AUTH_IDENTITY_VALUE: "nacos"
    volumes:
      - /etc/localtime:/etc/localtime
      - ./nacos/conf:/home/nacos/conf
      - ./nacos/data:/home/nacos/data
      - ./nacos/logs:/home/nacos/logs
```