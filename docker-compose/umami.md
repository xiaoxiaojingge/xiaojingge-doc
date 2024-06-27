```yaml
version: '3'
services:
  umami:
    image: ghcr.dockerproxy.com/umami-software/umami:postgresql-latest
    ports:
      - '3000:3000'
    environment:
      # postgresql://: 这是告诉应用程序使用 PostgreSQL 数据库的协议。
      # umami: 这是数据库用户名，用于连接到 PostgreSQL 数据库。
      # xxxxxx: 这是数据库用户的密码，用于验证连接。
      # @umami-db: 这是 PostgreSQL 服务器的主机名或 IP 地址，指示应用程序连接的数据库服务器。(下面的容器名)
      # :5432: 这是 PostgreSQL 服务器的端口号。默认情况下，PostgreSQL 使用 5432 端口。
      # /umami: 这是要连接的数据库的名称。在这种情况下，应用程序将连接到名为 “umami” 的数据库。
      DATABASE_URL: postgresql://umami:xxxxxx@umami-db:5432/umami
      DATABASE_TYPE: postgresql
      APP_SECRET: replace-me-with-a-random-string
    depends_on:
      umami-db:
        condition: service_healthy
    restart: always
  umami-db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: xxxxxx
    volumes:
      - ./umami-db-data:/var/lib/postgresql/data
    restart: always
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}']
      interval: 5s
      timeout: 5s
      retries: 5
volumes:
  umami-db-data:
```
