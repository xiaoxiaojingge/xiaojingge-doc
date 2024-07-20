```yaml
version: '3'
services:
  nginx:
    image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.0
    container_name: nginx_1_27_0
    restart: always
    volumes:
      # 提前创建好文件
      - './nginx/conf/nginx.conf:/etc/nginx/nginx.conf'
      # 提前创建好文件
      - './nginx/conf/conf.d/default.conf:/etc/nginx/conf.d/default.conf'
      - './nginx/html:/usr/share/nginx/html'
      - './nginx/log:/var/log/nginx'
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
    ports:
      - '80:80'
```

`default.conf`

```properties
server {
  listen       80;
  server_name  localhost;

  #charset koi8-r;
  #access_log  /var/log/nginx/host.access.log  main;

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
  }

  #error_page  404              /404.html;

  # redirect server error pages to the static page /50x.html
  #
  error_page   500 502 503 504  /50x.html;
  location = /50x.html {
    root   /usr/share/nginx/html;
  }

  # proxy the PHP scripts to Apache listening on 127.0.0.1:80
  #
  #location ~ \.php$ {
  #    proxy_pass   http://127.0.0.1;
  #}

  # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
  #
  #location ~ \.php$ {
  #    root           html;
  #    fastcgi_pass   127.0.0.1:9000;
  #    fastcgi_index  index.php;
  #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
  #    include        fastcgi_params;
  #}

  # deny access to .htaccess files, if Apache's document root
  # concurs with nginx's one
  #
  #location ~ /\.ht {
  #    deny  all;
  #}
}

```

`nginx.conf`

```properties

user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    # include /etc/nginx/conf.d/*.conf;

    server {
        listen       80;
        server_name  localhost; # 服务器地址或绑定域名

        #charset koi8-r;
        #access_log  /var/log/nginx/host.access.log  main;



        # =========================================================
        # ================== ↓↓↓↓↓↓ start ↓↓↓↓↓↓ ==================
        # =========================================================

        location / {
            root   /usr/share/nginx/html;
            #try_files $uri $uri/ @router;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html; # 解决页面刷新 404 问题
        }

        # =========================================================
        # ================== ↑↑↑↑↑↑ end ↑↑↑↑↑↑ ==================
        # =========================================================


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }

    }
}

```
