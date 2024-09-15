# Yum

[[toc]]

## CentOS 切换 yum 源 {id=centos-switch-repo}

### 备份 yum 源 {id=centos-switch-repo-backup}

```shell
cd /etc/yum.repos.d/
ll
rename '.repo' '.repo.bak' CentOS*.repo
```

### 切换阿里 yum 源 {id=centos-switch-repo-aliyun}

::: code-group

```shell [CentOS 7]
sudo curl -o /etc/yum.repos.d/Centos-7.repo https://mirrors.aliyun.com/repo/Centos-7.repo
sudo yum clean all
sudo yum makecache
```

```shell [CentOS 8]
sudo curl -o /etc/yum.repos.d/Centos-8.repo https://mirrors.aliyun.com/repo/Centos-8.repo
sudo yum clean all
sudo yum makecache
```

```shell [CentOS vault 8.5.2111]
sudo curl -o /etc/yum.repos.d/Centos-vault-8.5.2111.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
sudo yum clean all
sudo yum makecache
```

```shell [epel 7]
sudo curl -o /etc/yum.repos.d/epel-7.repo https://mirrors.aliyun.com/repo/epel-7.repo
sudo yum clean all
sudo yum makecache
```

:::