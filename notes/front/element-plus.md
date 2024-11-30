前端开发的时候，需要去寻找对应的三方开源组件，以ElementPlus为例，肯定要去他的官网，它有自己的国内地址，这没问题，如果你是内网开发，不能直接访问它的官网，这就很蛋疼了。

本文介绍如何在自己的服务器，或者（公司的）内网服务器，部署一份属于自己的ElementPlus离线文档。

## 开始

我们先打开ElementPlus官网 [https://element-plus.org/zh-CN/](https://element-plus.org/zh-CN/)

点击右上角 Github 图标，去Github上把项目克隆下来

![](https://image.xiaojingge.com/img/image-20241201124816762.png?imageslim)

地址：[https://github.com/element-plus/element-plus.git](https://github.com/element-plus/element-plus.git)

国内用户建议使用Gitee：[https://gitee.com/element-plus/element-plus.git](https://gitee.com/element-plus/element-plus.git)

项目有点大，克隆可能有点慢，需要耐心等待。

由于ElementPlus这个项目是Monorepo架构，我们可以看到它的配置 pnpm-workspace.yaml，因此需要使用pnpm下载依赖和启动项目。

打开项目：

![](https://image.xiaojingge.com/img/image-20241201130139308.png?imageslim)

> 我们大概介绍一下目录
>
> **packages/:**
>
> 这个目录通常用于存放多个子包或模块。每个子包可能有自己的 package.json 文件，定义其依赖和脚本。
>
> **play/:**
>
> 这个目录可能用于存放示例或演示代码，帮助开发者测试和展示项目功能。
>
> **docs/:**
>
> 这个目录通常用于存放项目的文档。可能包含文档的源文件和构建后的静态文件。
>
> **scripts/:**
>
> 这个目录通常用于存放自定义脚本，如构建、生成版本信息等。
>
> **internal/:**
>
> 这个目录可能用于存放内部工具或构建脚本，可能包括 build 和 metadata 子目录。
>
> **ssr-testing/:**
>
> 这个目录可能用于存放与服务端渲染（SSR）相关的测试配置。
>
> **patches/:**
>
> 这个目录可能用于存放对某些依赖包的补丁文件

那么根据目录的分析我们已经知道文档在docs

我们来观察一下docs目录，发现他使用的`vitepress`构建的

![](https://image.xiaojingge.com/img/image-20241201130426867.png?imageslim)

其次观察package.json文件运行启动命令，我们到 `docs` 目录执行

```shell
npm install pnpm -g
pnpm install 
pnpm run dev
```

![](https://image.xiaojingge.com/img/image-20241201134416498.png?imageslim)

我们启动了此项目然后发现居然不是中文的，切换语言处也没有中文，我们需要设置国际化中文。

他的国际化是基于 `crowdin` 实现的非常厉害的国际化插件

打开国际化插件对用ElementPlus 网址：[https://crowdin.com/project/element-plus](https://crowdin.com/project/element-plus)

需要先登录 crowdin ，可以用Github认证登录

选择中文：

![](https://image.xiaojingge.com/img/image-20241201135108414.png?imageslim)

![](https://image.xiaojingge.com/img/image-20241201135153393.png?imageslim)

把下载的压缩包打开解压，复制粘贴到到`docs`目录

![](https://image.xiaojingge.com/img/image-20241201135424040.png?imageslim)

最后重新启动即可。

![](https://image.xiaojingge.com/img/image-20241201135607611.png?imageslim)

可以看到，多了一个中文切换项，切换即可。

![](https://image.xiaojingge.com/img/image-20241201135705564.png?imageslim)