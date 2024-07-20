```yaml
version: '3'

services:
  mysql:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mysql:8.0.36
    container_name: mysql_8_0_36
    restart: always
    volumes:
      # 提前创建好配置文件
      - './mysql/config/my.cnf:/etc/my.cnf'
      - './mysql/data:/var/lib/mysql'
      - './mysql/mysql-files:/var/lib/mysql-files'
      - './mysql/log:/var/log/mysql'
      - /etc/localtime:/etc/localtime:ro
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
      MYSQL_ROOT_PASSWORD: xxxxxx
      MYSQL_USER: xiaojingge # 创建专用用户
      MYSQL_PASSWORD: 'xxxxxx' # 设置专用用户密码
      MYSQL_DATABASE: xxxxxx # 自动创建数据库
    privileged: true
    ports:
      - '3306:3306'
```

`my.cnf`

```properties
[mysqld]
skip-host-cache
skip-name-resolve
# 指定运行 MySQL 服务器的用户
user = mysql

# 指定 MySQL 数据目录的路径
datadir=/var/lib/mysql
socket=/var/run/mysqld/mysqld.sock
secure-file-priv=/var/lib/mysql-files

pid-file=/var/run/mysqld/mysqld.pid

# 监听的 IP 地址，0.0.0.0 表示监听所有地址
bind-address = 0.0.0.0

# MySQL X Plugin 监听的 IP 地址
mysqlx-bind-address = 127.0.0.1

# 关键缓冲区大小，用于 MyISAM 存储引擎索引的缓存
key_buffer_size = 128M

# 定义客户端和服务器之间传输的最大数据包大小
max_allowed_packet = 1073741824

# 为每个线程分配的栈空间大小
thread_stack = 2M

# 线程缓存的大小，用于重用线程减少创建新线程的开销
thread_cache_size = 64

# MyISAM 存储引擎在崩溃后进行恢复的选项
myisam-recover-options = BACKUP

# 允许的最大并发连接数
max_connections = 5000

# 允许的最大连接错误数
max_connect_errors = 1000

# 允许的最大打开文件数
open_files_limit = 10000

# 表缓存的大小，用于存储打开的表的信息
table_open_cache = 4745

# 通用查询日志文件的路径
general_log_file = /var/log/mysql/query.log

# 错误日志文件的路径
log_error = /var/log/mysql/error.log

# 慢查询日志文件的路径
slow_query_log_file = /var/log/mysql/mysql-slow.log

# 用于复制和二进制日志的服务器标识
server-id = 201

# 二进制日志文件的路径
log_bin = /var/log/mysql/mysql-bin.log

# 二进制日志文件自动过期的时间
binlog_expire_logs_seconds = 2592000

# 服务器默认的字符集
character-set-server = utf8mb4

# 服务器默认的校对规则
collation-server = utf8mb4_general_ci

# 连接建立时执行的初始 SQL 语句
init_connect = 'SET NAMES utf8mb4'

# 默认的存储引擎
default-storage-engine = InnoDB

# 批量插入缓冲区的大小
bulk_insert_buffer_size = 512M

# 无活动连接关闭的时间
wait_timeout = 288000

# 排序缓冲区的大小
sort_buffer_size = 512M

# 读缓冲区的大小
read_buffer_size = 512M

# 随机读缓冲区的大小
read_rnd_buffer_size = 512M

# MyISAM 表排序的最大文件大小（根据服务器可用大小设置，否则启动不成功）
myisam_max_sort_file_size = 20G

# MyISAM 表排序缓冲区的大小
myisam_sort_buffer_size = 32M

# InnoDB 缓冲池的大小（根据服务器可用大小设置，否则启动不成功）
innodb_buffer_pool_size = 20G

# 控制每次事务日志写入磁盘的行为
# 正常1，设置为0或2，可以减少日志写入磁盘的次数，从而提高插入速度
innodb_flush_log_at_trx_commit = 1

# InnoDB 数据文件自动扩展的增量
innodb_autoextend_increment = 1000

# InnoDB 日志缓冲区的大小
innodb_log_buffer_size = 512M

# InnoDB 重做日志的容量（根据服务器可用大小设置，否则启动不成功）
innodb_redo_log_capacity = 20G

# InnoDB 写 I/O 线程的数量
innodb_write_io_threads = 64

# InnoDB 读 I/O 线程的数量
innodb_read_io_threads = 64

# InnoDB I/O 容量的限制
innodb_io_capacity = 20000

# InnoDB I/O 最大容量的限制
innodb_io_capacity_max = 200000

# 控制表名大小写敏感性的设置，1 表示不敏感
lower_case_table_names = 1

[client]
socket=/var/run/mysqld/mysqld.sock

```
