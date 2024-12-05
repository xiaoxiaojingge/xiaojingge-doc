## 前言

Sortable.js是一款优秀的js拖拽库，支持ie9及以上版本ie浏览器和现代浏览器，也可以运行在移动触摸设备中。不依赖jQuery。支持 Meteor、AngularJS、React、Vue、Knockout框架和任何CSS库，如Bootstrap、Element UI。你可以用来拖拽div、table等元素。

sortable.js中文文档 ：[https://sortablejs.com/](https://sortablejs.com/)

## 操作

### 安装

```bash
npm install sortablejs --save
```

### 实操

Vue页面引入组件

```shell
import Sortable from 'sortablejs';
```

el-table中只需要加一个 ( row-key="XX" ) 即可，row-key对应的必须是表格数据唯一键值（比如id）

![](https://image.xiaojingge.com/img/image-20241221095151428.png?imageslim)

使用sortablejs

> Sortable.create（参数1，参数2）
>
> `参数1：`可拖动的标签区域，（注意：是你拖拽元素的父级标签，要从解析过的浏览器里看，不能单纯从我们写的代码结构看，因为我们用的el-table是封装的组件。如果这个选择不对的话就拖动不了），不同的版本的组件这里的类名很有可能不一样，视情况修改，保证能定位到就行了
>
> ![](https://image.xiaojingge.com/img/image-20241221095652690.png?imageslim)
>
> `参数2：`SortableJs的配置对象，可参考上面SortableJs中文官网

我这里的使用为：

```javascript
onMounted(() => {
    getList();
    nextTick(() => {
        initDropTable();
    });
});

const initDropTable = () => {
    const sortable = Sortable.create(
        document.querySelector('.el-table__body-wrapper tbody'),
        {
            animation: 500,
            sort: true,
            // 拖拽结束后触发
            onEnd: (event) => {
                // 拖动前的索引
                let oldIndex = event.oldIndex;
                // 拖动后的索引
                let newIndex = event.newIndex;
                if (oldIndex === newIndex) {
                    return;
                }
                // 拖动项的id
                let moveItemId = pieceList.value[oldIndex].id;
                // 拖动项的原始排序
                let oldOrder = pieceList.value[oldIndex].sortNum;
                // 拖动的目标项的排序
                let newOrder = pieceList.value[newIndex].sortNum;
                // 构建要发送的数据
                const data = {
                    oldIndex: oldIndex,
                    newIndex: newIndex,
                    moveItemId: moveItemId,
                    oldOrder: oldOrder,
                    newOrder: newOrder,
                };
                // 发送请求到后端
                updatePieceOrder(data).then(response => {
                    // 重新获取列表以更新显示
                    getList();
                }).catch(error => {
                });
            },

        },
    );
};
```

Java后台

> 这里其实没必要传递这么多参数的，我传递这些是便于调试
>
> 具体逻辑就是判断是向上还是向下拖动，然后处理`新旧排序值之间`的那部分数据的排序值的变化，向上拖动那部分数据排序值+1，反之-1，只会影响新旧排序值之间的数据，其他的不会影响


```java
/**
 * 列表拖动排序
 *
 * @param updateOrder
 */
@Transactional
public void updatePieceOrder(UpdateOrderDTO updateOrder) {
    Integer moveItemId = updateOrder.getMoveItemId();
    Integer oldIndex = updateOrder.getOldIndex();
    Integer newIndex = updateOrder.getNewIndex();
    // 获取排序值
    Integer oldOrder = updateOrder.getOldOrder();
    Integer newOrder = updateOrder.getNewOrder();

    // 如果 oldIndex < newIndex，表示向下移动
    if (oldIndex < newIndex) {
        // 更新在 oldIndex 和 newIndex 之间的所有项的 sortOrder
        pieceMapper.decrementSortOrderInRange(oldOrder, newOrder);
    } else {
        // 如果 oldIndex > newIndex，表示向上移动
        pieceMapper.incrementSortOrderInRange(newOrder, oldOrder);
    }

    // 更新 oldId 的排序值
    pieceMapper.updateSortOrder(moveItemId, newOrder);
}
```
