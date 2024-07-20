# sonatype/nexus3 镜像 {id=nexus}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `sonatype/nexus3` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/r/sonatype/nexus3)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/sonatype/nexus-public/-/pipelines
- 部署镜像流水线：https://gitlab.xuxiaowei.com.cn/docker-compose/nexus/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- 镜像部署脚本

::: details docker-compose.yml 脚本

::: code-group

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

:::

| 镜像                                                            | 说明           |
|---------------------------------------------------------------|--------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.70.1 | 3.70.1 代表版本号 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.70.0 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.69.0 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.68.1 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.67.1 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.66.0 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.60.0 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.59.0 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.58.1 |              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.38.1 |              |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr td:nth-child(1) {
    min-width: 455px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr td:nth-child(2) {
    min-width: 135px;
}

</style>