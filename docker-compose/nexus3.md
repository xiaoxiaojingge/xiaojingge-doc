```yaml
#
# mkdir -p /srv/nexus
#
# export NEXUS_HOME=/srv/nexus  && chown -R 200 $NEXUS_HOME && docker compose up -d
# export NEXUS_HOME=`pwd`       && chown -R 200 $NEXUS_HOME && echo $NEXUS_HOME && docker compose up -d
#
services:
  nexus:
    # image: 'sonatype/nexus3:3.70.1'
    image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.70.1'
    restart: always
    ports:
      - '48081:8081'
      - '48443:8443'
      - '48500-48550:48500-48550'
    volumes:
      - '$NEXUS_HOME/nexus-data:/nexus-data'
    container_name: nexus
```