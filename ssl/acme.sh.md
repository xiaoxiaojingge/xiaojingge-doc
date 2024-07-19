# 使用 acme.sh 生成证书

## 说明

1. [GitHub 原始仓库](https://github.com/acmesh-official/acme.sh)
2. [徐晓伟镜像仓库](https://framagit.org/xuxiaowei-com-cn/acme.sh)

## 安装 acme.sh

1. 以下是使用 `root` 用户执行，使用CentOS为例
2. 安装（使用镜像仓库）

   ```bash
   yum -y install git
   yum -y install socat
   yum -y install openssl
   ```

   ```bash
   git clone https://framagit.org/xuxiaowei-com-cn/acme.sh.git
   cd acme.sh
   # 换成自己的邮箱，便于接收邮件
   ./acme.sh --install -m my@example.com
   ```

   执行结果如下，从日志中可以看到：

   安装文件夹：`/root/.acme.sh`

   可执行文件：`/root/.acme.sh/acme.sh`

   刷新环境变量：`source /root/.bashrc` 后可直接执行 `acme.sh` 命令，或者使用绝对路径执行：`/root/.acme.sh/acme.sh`

   ```bash
   [Fri Jul 19 11:18:36 UTC 2024] Installing to /root/.acme.sh
   [Fri Jul 19 11:18:36 UTC 2024] Installed to /root/.acme.sh/acme.sh
   [Fri Jul 19 11:18:36 UTC 2024] Installing alias to '/root/.bashrc'
   [Fri Jul 19 11:18:36 UTC 2024] Close and reopen your terminal to start using acme.sh
   [Fri Jul 19 11:18:36 UTC 2024] Installing alias to '/root/.cshrc'
   [Fri Jul 19 11:18:36 UTC 2024] Installing alias to '/root/.tcshrc'
   [Fri Jul 19 11:18:36 UTC 2024] Installing cron job
   no crontab for root
   no crontab for root
   [Fri Jul 19 11:18:36 UTC 2024] bash has been found. Changing the shebang to use bash as preferred.
   [Fri Jul 19 11:18:38 UTC 2024] OK
   ```

3. 使用 自定义 DNS 记录，配置（泛）域名

   ```bash
   # --yes-I-know-dns-manual-mode-enough-go-ahead-please：
   # 手动 dns 方式, 手动在域名上添加一条 txt 解析记录, 验证域名所有权
   # 好处是，你不需要任何服务器, 不需要任何公网 ip, 只需要 dns 的解析记录即可完成验证.
   # 坏处是，如果不同时配置 Automatic DNS API，使用这种方式 acme.sh 将无法自动更新证书，每次都需要手动再次重新解析验证域名所有权。
   /root/.acme.sh/acme.sh --issue --dns -d "*.xiaojingge.com" --yes-I-know-dns-manual-mode-enough-go-ahead-please
   ```

   结果如下，根据结果可知：

   需要添加一个 DNS TXT 记录

   记录的名是：`_acme-challenge.xiaojingge.com`

   记录的值是：`FZ6S3Uw0MhzFu3iCboESLw7ci8WHbd3JdNZqQGLxJbk`

   ```bash
   [Fri Jul 19 11:20:06 UTC 2024] Using CA: https://acme.zerossl.com/v2/DV90
   [Fri Jul 19 11:20:06 UTC 2024] Account key creation OK.
   [Fri Jul 19 11:20:06 UTC 2024] No EAB credentials found for ZeroSSL, let's obtain them
   [Fri Jul 19 11:20:07 UTC 2024] Registering account: https://acme.zerossl.com/v2/DV90
   [Fri Jul 19 11:20:10 UTC 2024] Registered
   [Fri Jul 19 11:20:10 UTC 2024] ACCOUNT_THUMBPRINT='MrzCzwEH_CS-rbNRJOgfiZf8g-5kpsf89yT0UDemAC0'
   [Fri Jul 19 11:20:10 UTC 2024] Creating domain key
   [Fri Jul 19 11:20:10 UTC 2024] The domain key is here: /root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.key
   [Fri Jul 19 11:20:10 UTC 2024] Single domain='*.xiaojingge.com'
   [Fri Jul 19 11:20:13 UTC 2024] Getting webroot for domain='*.xiaojingge.com'
   [Fri Jul 19 11:20:13 UTC 2024] Add the following TXT record:
   [Fri Jul 19 11:20:13 UTC 2024] Domain: '_acme-challenge.xiaojingge.com'
   [Fri Jul 19 11:20:13 UTC 2024] TXT value: 'FZ6S3Uw0MhzFu3iCboESLw7ci8WHbd3JdNZqQGLxJbk'
   [Fri Jul 19 11:20:13 UTC 2024] Please make sure to prepend '_acme-challenge.' to your domain
   [Fri Jul 19 11:20:13 UTC 2024] so that the resulting subdomain is: _acme-challenge.xiaojingge.com
   [Fri Jul 19 11:20:13 UTC 2024] Please add the TXT records to the domains, and re-run with --renew.
   [Fri Jul 19 11:20:13 UTC 2024] Please add '--debug' or '--log' to see more information.
   [Fri Jul 19 11:20:13 UTC 2024] See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh
   ```
   
4. 添加 DNS 记录

   ![](https://image.xiaojingge.com/img/image-20240719192433885.png)

5. 检查 自定义 DNS 记录，生成（泛）域名

   ```bash
   /root/.acme.sh/acme.sh --renew -d "*.xiaojingge.com" --yes-I-know-dns-manual-mode-enough-go-ahead-please
   ```

   结果如下，根据结果可知：

   证书类型：ECC

   cert 证书：`/root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.cer`

   cert 证书 key：`/root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.key`

   中间 CA 证书：`/root/.acme.sh/*.xiaojingge.com_ecc/ca.cer`

   完整证书链：`/root/.acme.sh/*.xiaojingge.com_ecc/fullchain.cer`

   ```bash
   [Fri Jul 19 11:25:49 UTC 2024] The domain '*.xiaojingge.com' seems to already have an ECC cert, let's use it.
   [Fri Jul 19 11:25:49 UTC 2024] Renewing: '*.xiaojingge.com'
   [Fri Jul 19 11:25:49 UTC 2024] Renewing using Le_API=https://acme.zerossl.com/v2/DV90
   [Fri Jul 19 11:25:51 UTC 2024] Using CA: https://acme.zerossl.com/v2/DV90
   [Fri Jul 19 11:25:51 UTC 2024] Single domain='*.xiaojingge.com'
   [Fri Jul 19 11:25:51 UTC 2024] Verifying: *.xiaojingge.com
   [Fri Jul 19 11:25:55 UTC 2024] Processing. The CA is processing your order, please wait. (1/30)
   [Fri Jul 19 11:25:59 UTC 2024] Success
   [Fri Jul 19 11:25:59 UTC 2024] Verification finished, beginning signing.
   [Fri Jul 19 11:25:59 UTC 2024] Let's finalize the order.
   [Fri Jul 19 11:25:59 UTC 2024] Le_OrderFinalize='https://acme.zerossl.com/v2/DV90/order/9prrIGsOriz2O0EVn-PRbA/finalize'
   [Fri Jul 19 11:26:00 UTC 2024] Order status is 'processing', let's sleep and retry.
   [Fri Jul 19 11:26:00 UTC 2024] Sleeping for 15 seconds then retrying
   [Fri Jul 19 11:26:16 UTC 2024] Polling order status: https://acme.zerossl.com/v2/DV90/order/9prrIGsOriz2O0EVn-PRbA
   [Fri Jul 19 11:26:17 UTC 2024] Downloading cert.
   [Fri Jul 19 11:26:17 UTC 2024] Le_LinkCert='https://acme.zerossl.com/v2/DV90/cert/O3DR0fmwOr6yRLCqs6iJZQ'
   [Fri Jul 19 11:26:18 UTC 2024] Cert success.
   -----BEGIN CERTIFICATE-----
   MIIEAzCCA4mgAwIBAgIQU4QWlmIjS848DbyDcxyriTAKBggqhkjOPQQDAzBLMQsw
   xxx
   xxx
   xxx
   gIAonOT0iBO5cF4+6JBosSE7nmPB+bQ=
   -----END CERTIFICATE-----
   [Fri Jul 19 11:26:18 UTC 2024] Your cert is in: /root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.cer
   [Fri Jul 19 11:26:18 UTC 2024] Your cert key is in: /root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.key
   [Fri Jul 19 11:26:18 UTC 2024] The intermediate CA cert is in: /root/.acme.sh/*.xiaojingge.com_ecc/ca.cer
   [Fri Jul 19 11:26:18 UTC 2024] And the full-chain cert is in: /root/.acme.sh/*.xiaojingge.com_ecc/fullchain.cer
   ```

6. 查看证书

   ```bash
   /root/.acme.sh/acme.sh --info -d '*.xiaojingge.com'
   ```

   ```bash
   [Fri Jul 19 11:28:09 UTC 2024] The domain '*.xiaojingge.com' seems to already have an ECC cert, let's use it.
   DOMAIN_CONF=/root/.acme.sh/*.xiaojingge.com_ecc/*.xiaojingge.com.conf
   Le_Domain=*.xiaojingge.com
   Le_Alt=no
   Le_Webroot=dns
   Le_PreHook=
   Le_PostHook=
   Le_RenewHook=
   Le_API=https://acme.zerossl.com/v2/DV90
   Le_Keylength=ec-256
   Le_OrderFinalize=https://acme.zerossl.com/v2/DV90/order/9prrIGsOriz2O0EVn-PRbA/finalize
   Le_LinkOrder=https://acme.zerossl.com/v2/DV90/order/9prrIGsOriz2O0EVn-PRbA
   Le_LinkCert=https://acme.zerossl.com/v2/DV90/cert/O3DR0fmwOr6yRLCqs6iJZQ
   Le_CertCreateTime=1721388378
   Le_CertCreateTimeStr=2024-07-19T11:26:18Z
   Le_NextRenewTimeStr=2024-09-16T11:26:18Z
   Le_NextRenewTime=1726485978
   ```

7. 如果需要，可以生成其他类型的证书

   其他 `--keylength` 参数

   ```bash
   ec-256 (prime256v1, "ECDSA P-256", which is the default key type)
   ec-384 (secp384r1,  "ECDSA P-384")
   ec-521 (secp521r1,  "ECDSA P-521", which is not supported by Let's Encrypt yet.)
   2048   (RSA2048)
   3072   (RSA3072)
   4096   (RSA4096)
   ```

   ```bash
   /root/.acme.sh/acme.sh --issue --dns -d "*.xiaojingge.com" --yes-I-know-dns-manual-mode-enough-go-ahead-please --keylength 2048
   ```

   根据执行结果再次解析 DNS TXT 记录，然后生成证书，和上面流程一样。
