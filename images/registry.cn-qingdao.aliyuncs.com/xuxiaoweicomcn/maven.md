# Maven 镜像 {id=maven}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `maven` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/maven)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/carlossg/docker-maven/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                          | 说明                                  |
|-----------------------------------------------------------------------------|-------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8           | 3.6.3 代表 Maven 版本号，jdk-8 代表 JDK 版本号 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8-slim      |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17      |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17-slim |                                     |

::: code-group

```shell [maven:3.6.3-jdk-8]
sudo docker run \
  -itd \
  --restart always \
  --name maven-3.6.3-jdk-8 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8 \
  sleep infinity
```

```shell [maven:3.6.3-openjdk-17]
sudo docker run \
  -itd \
  --restart always \
  --name maven-3.6.3-openjdk-17 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17 \
  sleep infinity
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr td:nth-child(1) {
    min-width: 560px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr td:nth-child(2) {
    min-width: 335px;
}

</style>