```yaml
# 参考文档： https://www.xuxueli.com/xxl-job
# https://github.com/xuxueli/xxl-job
# sql: https://github.com/xuxueli/xxl-job/blob/master/doc/db/tables_xxl_job.sql
# 默认登录账号密码：`admin/123456`
version: "3"
services:
  xxl-job-admin:
    image: registry.cn-hangzhou.aliyuncs.com/zhengqing/xxl-job-admin:2.4.1 # 原镜像`xuxueli/xxl-job-admin:2.4.1`
    container_name: xxl-job-admin
    environment:
      # TODO 根据自己的配置修改，配置项参考源码文件：/xxl-job/xxl-job-admin/src/main/resources/application.properties
      PARAMS: "--spring.datasource.url=jdbc:mysql://xxx.xxx.x.xxx:3306/xxl_job?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF8&zeroDateTimeBehavior=convertToNull&useSSL=false
               --spring.datasource.username=root
               --spring.datasource.password=root
               --server.servlet.context-path=/xxl-job-admin
               --spring.mail.host=smtp.qq.com
               --spring.mail.port=25
               --spring.mail.username=xxx@qq.com
               --spring.mail.from=xxx@qq.com
               --spring.mail.password=xxx
               --xxl.job.accessToken="
    ports:
      - "9003:8080"
```