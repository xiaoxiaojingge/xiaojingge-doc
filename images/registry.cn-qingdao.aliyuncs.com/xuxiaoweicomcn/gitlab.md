# GitLab 镜像 {id=gitlab}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `gitlab/gitlab-ce`、`gitlab/gitlab-ee` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab`
- 未修改镜像内容
- [社区版 docker hub 镜像](https://hub.docker.com/r/gitlab/gitlab-ce)
- [企业版 docker hub 镜像](https://hub.docker.com/r/gitlab/gitlab-ee)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/gitlab.com/gitlab-org/gitlab/-/pipelines
- 部署镜像流水线：https://gitlab.xuxiaowei.com.cn/docker-compose/gitlab/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- 镜像部署网站：https://gitlab.xuxiaowei.com.cn
    - 使用的是 `极狐 GitLab` 镜像
- 镜像部署脚本
    - 使用的是 `极狐 GitLab` 镜像

::: details docker-compose.yml 脚本

::: code-group

```yaml
# 中文文档：https://docs.gitlab.cn/jh/install/docker.html
# 英文文档：https://docs.gitlab.com/ee/install/docker.html
# NGINX 配置：https://docs.gitlab.cn/omnibus/settings/nginx.html
# SMTP 配置：https://docs.gitlab.cn/omnibus/settings/smtp.html
# SSL 配置：https://docs.gitlab.cn/omnibus/settings/ssl/index.html

#
# https://jihulab.com/gitlab-cn/gitlab
# https://gitlab.com/gitlab-org/gitlab
#
# cat /srv/gitlab/config/initial_root_password
#
# export GITLAB_HOME=/srv/gitlab && docker compose up -d
#
services:
  gitlab:
    image: 'registry.gitlab.cn/omnibus/gitlab-jh:17.0.1'
    restart: always
    # hostname: 'gitlab.xuxiaowei.cn'
    # 更新证书 并 启动 gitlab
    entrypoint: /bin/bash -c "update-ca-certificates && /assets/wrapper"
    #healthcheck:
    #  # 用于定义健康检查的命令，这里使用的是curl命令来测试指定URL的可访问性。
    #  test: ["CMD", "curl", "-k", "https://gitlab.xuxiaowei.cn/-/liveness?token=FFWoGWuYJih1Jp9e3zby"]
    #  # 定义了健康检查之间的间隔时间。这个字段可能需要补充完整，以确定健康检查之间的间隔时间。
    #  interval: 5s
    #  # 定义了在判定失败之前尝试健康检查的次数。这个字段可能需要补充完整，以确定允许的重试次数。
    #  retries: 5
    #  # 定义了每次健康检查的超时时间。这个字段可能需要补充完整，以确定每次健康检查的超时时间。
    #  timeout: 5s
    #  # 定义了容器启动后开始进行健康检查之前的等待时间。这个字段可能需要补充完整，以确定健康检查开始之前的等待时间。
    #  start_period: 180s
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://gitlab.xuxiaowei.cn'
        # Add any other gitlab.rb configuration here, each on its own line

        # 时区
        gitlab_rails['time_zone'] = 'Asia/Shanghai'

        # http 重定向到 https
        nginx['redirect_http_to_https'] = true
        nginx['redirect_http_to_https_port'] = 80
        # 监听的 IP
        nginx['listen_addresses'] = ['172.26.11.2']

        # 容器镜像库
        registry_external_url 'https://registry.xuxiaowei.cn'
        # 容器镜像库：http 重定向到 https
        registry_nginx['redirect_http_to_https'] = true
        registry_nginx['redirect_http_to_https_port'] = 80
        # 容器镜像库：监听的 IP
        registry_nginx['listen_addresses'] = ['172.26.12.2']

        # Pages
        pages_external_url 'https://pages.xuxiaowei.cn'
        pages_nginx['enable'] = false
        # Pages：http 重定向到 https
        pages_nginx['redirect_http_to_https'] = true
        gitlab_pages['redirect_http'] = true
        # Pages：监听的 IP
        gitlab_pages['external_http'] = ['172.26.13.2:80']
        gitlab_pages['external_https'] = ['172.26.13.2:443']

        # 配置第三方登陆
        # 注意：如果要配置多个第三方登陆，需要合并下列配置
        # 钉钉 配置
        # gitlab_rails['omniauth_providers'] = [{ name: "dingtalk", app_id: "", app_secret: "" }]
        # GitHub 配置
        # gitlab_rails['omniauth_providers'] = [{ name: "github", app_id: "", app_secret: "", args: { scope: "user:email" } }]
        # GitLab 配置
        # gitlab_rails['omniauth_providers'] = [{ name: "gitlab", app_id: "", app_secret: "", args: { scope: "read_user" } }]

        # 邮箱
        gitlab_rails['smtp_enable'] = true
        gitlab_rails['smtp_address'] = 'smtp.office365.com'
        gitlab_rails['smtp_port'] = 587
        gitlab_rails['smtp_user_name'] = 'xuxiaowei-test@xuxiaowei.com.cn'
        # 邮箱：配置密码，在容器内的 /etc/gitlab/gitlab.rb 中配置
        # gitlab_rails['smtp_password'] = ''
        gitlab_rails['smtp_domain'] = 'xuxiaowei.com.cn'
        gitlab_rails['smtp_authentication'] = 'login'
        gitlab_rails['smtp_enable_starttls_auto'] = true
        gitlab_rails['smtp_openssl_verify_mode'] = 'peer'
        gitlab_rails['gitlab_email_from'] = 'xuxiaowei-test@xuxiaowei.com.cn'

    ports:
      - '80:80'
      - '443:443'
      - '2222:22'
    volumes:
      - '$GITLAB_HOME/config:/etc/gitlab'
      # 挂载证书，启动容器时进行信任
      - '$GITLAB_HOME/config/ssl:/usr/local/share/ca-certificates'
      - '$GITLAB_HOME/logs:/var/log/gitlab'
      - '$GITLAB_HOME/data:/var/opt/gitlab'
    shm_size: '256m'
    container_name: gitlab
    extra_hosts:
      - "gitlab.xuxiaowei.cn:172.26.11.2"
    networks:
      instance:
        ipv4_address: 172.26.11.2
      registry:
        ipv4_address: 172.26.12.2
      pages:
        ipv4_address: 172.26.13.2

  gitlab-runner:
    # image: 'gitlab/gitlab-runner:v17.0.0'
    # image: 'gitlab/gitlab-runner:alpine3.19-v17.0.0'
    image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab-runner:v17.0.0'
    # image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab-runner:alpine3.19-v17.0.0'
    volumes:
      - '$GITLAB_HOME/gitlab-runner/config:/etc/gitlab-runner'
      - '$GITLAB_HOME/config/ssl:/etc/gitlab-runner/certs'
      - '/run/docker.sock:/run/docker.sock'
    container_name: gitlab-runner
    extra_hosts:
      - "gitlab.xuxiaowei.cn:172.26.11.2"
    #depends_on:
    #  gitlab:
    #    condition: service_healthy
    networks:
      instance:
        ipv4_address: 172.26.11.3

networks:
  instance:
    driver: bridge
    name: gitlab-instance
    ipam:
      config:
        - subnet: 172.26.11.0/24
          gateway: 172.26.11.1
  registry:
    driver: bridge
    name: gitlab-registry
    ipam:
      config:
        - subnet: 172.26.12.0/24
          gateway: 172.26.12.1
  pages:
    driver: bridge
    name: gitlab-pages
    ipam:
      config:
        - subnet: 172.26.13.0/24
          gateway: 172.26.13.1
```

:::

| 镜像                                                                  | 说明                    |
|---------------------------------------------------------------------|-----------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.2.0-ce.0  | 17.2.0 代表版本号，ce 代表社区版 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.2.0-ee.0  | 17.2.0 代表版本号，ee 代表企业版 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.2-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.2-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.1-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.1-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.0-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.1.1-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.0.2-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.0.2-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.0.1-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:17.0.1-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:16.2.4-ce.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:16.2.4-ee.0  |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:16.11.2-ce.0 |                       |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab:16.11.2-ee.0 |                       |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gitlab table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gitlab table tr td:nth-child(1) {
    min-width: 485px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gitlab table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gitlab table tr td:nth-child(2) {
    min-width: 235px;
}

</style>