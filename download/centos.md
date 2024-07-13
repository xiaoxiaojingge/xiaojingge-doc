## 说明

1. [CentOS Vault Mirror](https://vault.centos.org/)

2. CentOS 7 历史版本下载

   | 系统     | 下载地址                                       | 下载地址                                                      |
   | -------- | ---------------------------------------------- | ------------------------------------------------------------- |
   | 7.9.2207 | https://vault.centos.org/7.9.2009/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.9.2009/isos/x86_64/ |
   | 7.9.2009 | https://vault.centos.org/7.9.2009/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.9.2009/isos/x86_64/ |
   | 7.8.2003 | https://vault.centos.org/7.8.2003/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.8.2003/isos/x86_64/ |
   | 7.7.1908 | https://vault.centos.org/7.7.1908/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.7.1908/isos/x86_64/ |
   | 7.6.1810 | https://vault.centos.org/7.6.1810/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.6.1810/isos/x86_64/ |
   | 7.5.1804 | https://vault.centos.org/7.5.1804/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.5.1804/isos/x86_64/ |
   | 7.4.1708 | https://vault.centos.org/7.4.1708/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.4.1708/isos/x86_64/ |
   | 7.3.1611 | https://vault.centos.org/7.3.1611/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.3.1611/isos/x86_64/ |
   | 7.2.1511 | https://vault.centos.org/7.2.1511/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.2.1511/isos/x86_64/ |
   | 7.1.1503 | https://vault.centos.org/7.1.1503/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.1.1503/isos/x86_64/ |
   | 7.0.1406 | https://vault.centos.org/7.0.1406/isos/x86_64/ | https://archive.kernel.org/centos-vault/7.0.1406/isos/x86_64/ |

3. CentOS 8 历史版本下载

   | 系统     | 下载地址                                       | 下载地址                                                      |
   | -------- | ---------------------------------------------- | ------------------------------------------------------------- |
   | 8.5.2111 | https://vault.centos.org/8.5.2111/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.5.2111/isos/x86_64/ |
   | 8.4.2105 | https://vault.centos.org/8.4.2105/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.4.2105/isos/x86_64/ |
   | 8.3.2011 | https://vault.centos.org/8.3.2011/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.3.2011/isos/x86_64/ |
   | 8.2.2004 | https://vault.centos.org/8.2.2004/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.2.2004/isos/x86_64/ |
   | 8.1.1911 | https://vault.centos.org/8.1.1911/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.1.1911/isos/x86_64/ |
   | 8.0.1905 | https://vault.centos.org/8.0.1905/isos/x86_64/ | https://archive.kernel.org/centos-vault/8.0.1905/isos/x86_64/ |

4. CentOS 8 Stream 版本下载

   | 系统     | 下载地址                                       |
   | -------- | ---------------------------------------------- |
   | 8.5.2111 | https://vault.centos.org/8-stream/isos/x86_64/ |

5. 阿里云下载

   | 系统     | 下载地址                                                |
   | -------- | ------------------------------------------------------- |
   | 7.9.2207 | https://mirrors.aliyun.com/centos/7.9.2009/isos/x86_64/ |
   | 7.9.2009 | https://mirrors.aliyun.com/centos/7.9.2009/isos/x86_64/ |
   | 8.5.2111 | https://mirrors.aliyun.com/centos/8.5.2111/isos/x86_64/ |

6. 版本说明

   1. 前面两个数字：代表版本号
   2. 后面四位数字：代表年份和月份

7. **身为一个程序员一定要对 URL 敏感**

   1. NetInstall 网络安装版
   2. Minimal 最小化版
      1. 常用
   3. DVD DVD 版
      1. 常用
   4. Everything
      1. 最全版

## CentOS Stream 8系统配置阿里云YUM源

### 系统环境

CentOS  Stream 8/9都适用

### 修改yum文件

主要修改 `CentOS-Stream-AppStream.repo、CentOS-Stream-Extras.repo、CentOS-Stream-BaseOS.repo`，其他文件默认都是禁用的，修不修改无所谓。

`CentOS-Stream-AppStream.repo`

```properties
[appstream]
name=CentOS Stream $releasever - AppStream
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/AppStream/$basearch/os/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
```

`CentOS-Stream-BaseOS.repo`

```properties
[baseos]
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/BaseOS/$basearch/os/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
```

`CentOS-Stream-Extras.repo`

```properties
[extras]
name=CentOS Stream $releasever - Extras
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/extras/$basearch/os/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
```

如果觉得修改三个配置文件太麻烦，可以将/etc/yum.repos.d/目录里的文件备份移走，新建一个文件

```properties
[baseos]
name=CentOS Stream $releasever - BaseOS
baseurl=https://mirrors.aliyun.com/centos-vault$stream/BaseOS/$basearch/os/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
countme=1
enabled=1

[baseos-debug]
name=CentOS Stream $releasever - BaseOS - Debug
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/BaseOS/$basearch/debug/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0

[baseos-source]
name=CentOS Stream $releasever - BaseOS - Source
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/BaseOS/source/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0

[appstream]
name=CentOS Stream $releasever - AppStream
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/AppStream/$basearch/os/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
countme=1
enabled=1

[appstream-debug]
name=CentOS Stream $releasever - AppStream - Debug
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/AppStream/$basearch/debug/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0

[appstream-source]
name=CentOS Stream $releasever - AppStream - Source
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/AppStream/$basearch/debug/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0

[crb]
name=CentOS Stream $releasever - CRB
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/CRB/$basearch/os/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
countme=1
enabled=0

[crb-debug]
name=CentOS Stream $releasever - CRB - Debug
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/CRB/$basearch/debug/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0

[crb-source]
name=CentOS Stream $releasever - CRB - Source
baseurl=https://mirrors.aliyun.com/centos-vault/$stream/CRB/source/tree/
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
gpgcheck=1
repo_gpgcheck=0
metadata_expire=6h
enabled=0
```

如果想要启用其他源，修改文件配置 `enabled=1`

### 国内源链接

[阿里云yum源](https://developer.aliyun.com/mirror/?serviceType=&tag=&keyword=centos)

[华为云yum源](https://repo.huaweicloud.com/centos/)

[移动云yum源](https://mirrors.cmecloud.cn/)

[清华云yum源](https://mirrors.tuna.tsinghua.edu.cn/centos/)
