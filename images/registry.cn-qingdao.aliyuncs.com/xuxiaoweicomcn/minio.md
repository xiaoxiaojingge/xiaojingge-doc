# minio/minio 镜像 {id=minio}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `minio/minio` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/r/minio/minio)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/minio/minio/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                                 | 说明                                                                 |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2024-07-16T23-46-41Z |                                                                    |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2024-07-13T01-46-15Z |                                                                    |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2024-06-06T09-36-42Z | RELEASE.2024-06-06T09-36-42Z 代表版本号，支持：amd64、arm64、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2017-12-28T01-21-00Z |                                                                    |

```shell
# 设置管理员的用户名，默认值：minioadmin
MINIO_ROOT_USER=minioadmin
# 设置管理员的密码，默认值：minioadmin
MINIO_ROOT_PASSWORD=minioadmin

# 映射的端口：9000、9001

# 下方命令中，MinIO 数据已挂载到 /minio-data 路径

echo $MINIO_ROOT_USER
echo $MINIO_ROOT_PASSWORD

docker run \
  -itd \
  --restart always \
  -p 9000:9000 \
  -p 9001:9001 \
  -e MINIO_ROOT_USER=${MINIO_ROOT_USER} \
  -e MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD} \
  -v /minio-data:/data \
  --name minio-2024-07-16T23-46-41Z \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio:RELEASE.2024-07-16T23-46-41Z \
  server /data --console-address ":9001"
```

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_minio table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_minio table tr td:nth-child(1) {
    min-width: 635px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_minio table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_minio table tr td:nth-child(2) {
    min-width: 640px;
}

</style>