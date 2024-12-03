## 解决mysql模糊搜索时当搜索关键词是emoji时搜索结果错误

搜索的时候因为搜索的内容含有 Emoji，当 搜索关键词也使用Emoji会搜到很多非逾期的结果。

`解决方案：`

采用二进制比较，在 WHERE 条件前加 BINARY。

```mysql
SELECT * FROM user WHERE BINARY signature LIKE '%🐱%';
```
