## 清空所有以 prefix_ 开头的表

你可以使用下面的 SQL 语句来生成并清空所有以 prefix_ 开头的表：

```sql
SET @prefix = 'prefix_'; -- 替换为你的表前缀
SET @schema = 'your_database_name';
-- 替换为你的数据库名

-- 生成 TRUNCATE TABLE 语句
SELECT CONCAT('TRUNCATE TABLE `', @schema, '`.`', table_name, '`;') AS truncate_stmt
FROM information_schema.tables
WHERE table_schema = @schema
  AND table_name LIKE CONCAT(@prefix, '%');
```
将生成的 TRUNCATE TABLE 语句复制并执行。