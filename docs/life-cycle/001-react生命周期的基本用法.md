# react 生命周期的基本用法

## 各种基本的生命周期

```jsx
import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      //定义state
    };
  }
  // react16发布还新加了处理错误信息的生命周期 componentDidCatch（打个标记 还未使用过，下次深入研究）
  componentDidCatch() {}
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    return <div />;
  }
  componentWillUnmount() {}
}
```


### constructor
constructor参数接受两个参数 `props,context`
可以获取到父组件传下来的的 `props,context` ,如果你想在 `constructor` 构造函数内部(注意是内部哦，在组件其他地方是可以直接接收的)使用 `props或context` ,则需要传入，并传入super对象。
```js
constructor(props,context) {
  super(props,context)
  console.log(this.props,this.context) // 在内部可以使用props和context
}
```
当然如果你只需要在构造函数内使用props或者context，那么只传入一个参数即可，如果都不可以，就都不传。

#### 关于ES6的class constructor和super
只要组件存在constructor,就必要要写super,否则this指向会错误
```js
constructor() {
  console.log(this) // 报错，this指向错误
}
```

### componentWillMount
1. 组件刚经历constructor,初始完数据
2. 组件还未进入render，组件还未渲染完成，dom还未渲染

componentWillMount 一般用的比较少，更多的是用在服务端渲染，（我还未使用过react服务端渲染哈，所以也写不了很多）
但是这里有一个问题

ajax请求能写在willmount里吗？
：答案是不推荐，别这么写

1. 虽然有些情况下并不会出错，但是如果ajax请求过来的数据是空，那么会影响页面的渲染，可能看到的就是空白。
2. 不利于服务端渲染，在同构的情况下，生命周期会到componentwillmount，这样使用ajax就会出错

### componentDidMount 组件渲染完成
组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

