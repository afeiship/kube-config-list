# component

React 的组件可以定义为 class 或函数的形式。

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- 子类中有个必须定义的 render() 函数
- 我们强烈建议你不要创建自己的组件基类
- 在 React 组件中，代码 `重用的主要方式是组合而不是继承`





