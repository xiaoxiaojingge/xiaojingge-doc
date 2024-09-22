## 文件头注释

java

```java
/**
 *  ${TODO}
 *
 * @author lijing
 * @date ${YEAR}-${MONTH}-${DAY}
 */
```

python

```python
# -*- coding: utf-8 -*-
"""
---------------------------------------
@Time    : ${YEAR}-${MONTH}-${DAY} ${TIME}
@Author  : lijing
@File    : ${NAME}.py
@Description: 
---------------------------------------
"""

```

## 配置同步

通过 `Settings Sync` 插件

比如你在两台电脑上都安装了Idea，你想在另一台电脑上同步主电脑的Idea配置信息

> 注意：确保两台机器使用同一`Jetbrains Account`账户
>
> ![](https://image.xiaojingge.com/img/image-20240404212810103.png)

![](https://image.xiaojingge.com/img/image-20240404212527942.png)

使用：

先 `Disable Setting Sync`，再 `Enable Setting Sync`

![](https://image.xiaojingge.com/img/image-20240404213012387.png)

选择需要推送配置还是拉取配置（`Idea重启会自动拉取配置`）。

是通过Git进行管理的，如果两边配置不统一可能会推送失败，可以将 `C:\Users\xxxx\AppData\Roaming\JetBrains\IntelliJIdea2023.2\settingsSync` 删除，然后重新拉取以同步配置，再推送配置。

其他问题自己视情况解决。