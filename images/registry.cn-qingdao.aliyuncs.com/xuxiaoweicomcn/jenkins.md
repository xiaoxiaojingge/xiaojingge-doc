# Jenkins 镜像 {id=jenkins}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `xuxiaoweicomcn/jenkins` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins`
- 基于 `jenkins/jenkins` 镜像，增加了 docker 客户端程序，
  [Dockerfile](https://gitlab.com/xuxiaowei-com-cn/jenkins/-/blob/main/Dockerfile)
- [docker hub 镜像](https://hub.docker.com/r/xuxiaoweicomcn/jenkins)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/gitlab.com/xuxiaowei-com-cn/jenkins/-/pipelines
- 部署镜像流水线：https://gitlab.xuxiaowei.com.cn/docker-compose/jenkins/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- [Weekly](https://www.jenkins.io/download/weekly/) - 频繁发布，包括所有新功能、改进和错误修复。
    - [更新日志](https://www.jenkins.io/changelog/)
- [Long-Term Support (LTS)](https://www.jenkins.io/download/lts/) - 较旧的发布行，通过bug修复后台端口定期更新。
    - [更新日志](https://www.jenkins.io/changelog-stable/)
- 镜像部署网站：https://jenkins.xuxiaowei.com.cn
- 镜像部署脚本

::: details docker-compose.yml 脚本

::: code-group

```yaml
# mkdir -p        /srv/jenkins/jenkins-data
# chmod -R a+rw   /srv/jenkins/jenkins-data
#
#
# export JENKINS_HOME=/srv/jenkins  && echo $JENKINS_HOME && docker compose up -d
# export JENKINS_HOME=`pwd`         && echo $JENKINS_HOME && docker compose up -d
#
services:
  jenkins-blueocean:
    # image: 'xuxiaoweicomcn/jenkins:2.452.1-jdk17'
    image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.452.1-jdk17'
    restart: always
    hostname: 'jenkins'
    ports:
      - '8080:8080'
      - '50000:50000'
    environment:
      TZ: Asia/Shanghai
      DOCKER_HOST: tcp://docker:2376
      DOCKER_CERT_PATH: /certs/client
      DOCKER_TLS_VERIFY: 1
    volumes:
      - '/etc/localtime:/etc/localtime:ro'
      - '$JENKINS_HOME/jenkins-data:/var/jenkins_home'
      - '$JENKINS_HOME/jenkins-root/.m2:/root/.m2'
      - '$JENKINS_HOME/jenkins-docker-certs:/certs/client:ro'
    container_name: jenkins-blueocean
    networks:
      jenkins:
        ipv4_address: 172.26.26.2

  jenkins-docker:
    # image: 'docker:26.1.3-dind'
    image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.3-dind'
    restart: always
    privileged: true
    hostname: 'docker'
    environment:
      DOCKER_TLS_CERTDIR: /certs
    volumes:
      - '/etc/localtime:/etc/localtime:ro'
      - '$JENKINS_HOME/jenkins-docker-certs:/certs/client'
      - '$JENKINS_HOME/jenkins-data:/var/jenkins_home'
      - '$JENKINS_HOME/jenkins-docker-overlay2:/var/lib/docker/overlay2'
      - '$JENKINS_HOME/jenkins-docker-image:/var/lib/docker/image'
      - '$JENKINS_HOME/jenkins-root/.m2:/root/.m2'
    command: [ "--storage-driver", "overlay2" ]
    container_name: jenkins-docker
    networks:
      jenkins:
        ipv4_address: 172.26.26.3

networks:
  jenkins:
    driver: bridge
    name: jenkins
    ipam:
      config:
        - subnet: 172.26.26.0/24
          gateway: 172.26.26.1
```

:::

| 镜像                                                                    | 说明                      |
|-----------------------------------------------------------------------|-------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.468-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.467-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.466-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.464-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.463-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.462-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.461-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.460-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.459-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.458-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.457-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.456-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.455-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.454-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.453-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.452.3-jdk17 | Long-Term Support (LTS) |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.452.2-jdk17 | Long-Term Support (LTS) |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.452.1-jdk17 | Long-Term Support (LTS) |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.449-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.440.3-jdk17 | Weekly                  |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr td:nth-child(1) {
    min-width: 505px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr td:nth-child(2) {
    min-width: 190px;
}

</style>