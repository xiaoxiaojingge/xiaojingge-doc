## 使用背景

我的博客中需要引入前端静态项目，我的博客是Vue做的，有个页面需要iframe引入那个静态项目。

静态项目中有个按钮，点击后，可以使得父Vue页面的路由跳转到首页。

## 子html页面向父Vue传值

`子页面`（由于引入的静态项目，非Vue，技术栈有点老），在iframe页面里触发事件，找到他的父级页面的dom元素，用postMessage传值，里面所有的都是参数，cmd是为了能在父级vue页面区分该操作的用途

```javascript
$('#homeBtn').click(e => {
    window.parent.postMessage({
        cmd: 'goHome',
    }, '*');
});
```

`父Vue页面`，在父级vue页面的周期函数mounted中监听iframe中发来的消息，传来的参数就在event.data里面。

```javascript
onMounted(() => {
  window.addEventListener('message', event => {
    let data = event.data;
    if (data.cmd === 'goHome') {
      router.push('/');
    }
  });
});
```

## 父Vue向子html页面传值

父Vue

```html
 <iframe ref="botRef" :src="botUIPath" class="responsive-iframe"></iframe>
```

```javascript
const initBot = (data) => {
  botRef.value.onload = () => {
    botRef.value.contentWindow.postMessage(data, '*');
  };
};
```

子html页面

```javascript
window.addEventListener('message', (e) => {
	console.log(e.data)    
});
```

