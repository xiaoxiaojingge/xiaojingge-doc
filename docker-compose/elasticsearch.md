## 编排

`docker-compose.yml`

```yaml
version: '3'
# 网桥es -> 方便相互通讯
networks:
  es:

services:
  elasticsearch:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/elasticsearch:7.17.14
    container_name: elasticsearch
    restart: always
    volumes:
      - "./data:/usr/share/elasticsearch/data"
      - "./logs:/usr/share/elasticsearch/logs"
      - "./config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml"
      - "./plugins/ik:/usr/share/elasticsearch/plugins/ik" # IK中文分词插件
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
      TAKE_FILE_OWNERSHIP: "true"  # 权限
      discovery.type: single-node
      ES_JAVA_OPTS: "-Xmx512m -Xms512m"
      ELASTIC_PASSWORD: "123456" # elastic账号密码
    ports:
      - "9200:9200"
      - "9300:9300"
    networks:
      - es
  kibana:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kibana:7.17.14
    container_name: kibana
    restart: always
    volumes:
      - ./kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch
    links:
      - elasticsearch
    networks:
      - es
```

`./config/elasticsearch.yml`

```yaml
cluster.name: "docker-cluster"
network.host: 0.0.0.0
http.port: 9200
# 开启es跨域
http.cors.enabled: true
http.cors.allow-origin: "*"
http.cors.allow-headers: Authorization
# 开启安全控制
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
```

`./kibana/config/kibana.yml`

```yaml
#
# ** THIS IS AN AUTO-GENERATED FILE **
#

# Default Kibana configuration for docker target

server.name: kibana
server.host: "0.0.0.0"
server.publicBaseUrl: "http://kibana:5601"  # 这里地址改为你访问kibana的地址，不能以 / 结尾
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true
elasticsearch.username: "elastic"  # es账号
elasticsearch.password: "123456"   # es密码
i18n.locale: zh-CN # 中文
```

`./plugins/ik` 

[下载对应版本](https://release.infinilabs.com/analysis-ik/stable/)

## 访问

ES访问地址：[`ip地址:9200`](http://www.zhengqingya.com:9200) ，默认账号密码：`elastic/123456`

kibana访问地址：[`ip地址:5601/app/dev_tools#/console`](http://www.zhengqingya.com:5601/app/dev_tools#/console) ，默认账号密码：`elastic/123456`