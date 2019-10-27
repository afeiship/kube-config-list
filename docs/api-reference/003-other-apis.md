# other apis
> 组件还提供了一些额外的 API：

## setState
> 将对组件 state 的更改排入队列，并通知 React 需要使用更新后的 state 重新渲染此组件及其子组件。

this._updaterQueue();

- 视为请求而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，然后通过一次传递更新多个组件
- React 并不会保证 state 的变更会立即生效
- setState() 并不总是立即更新组件，它会批量推迟更新

## 调用到最新的 state
- 请使用 componentDidUpdate
- setState 的回调函数（setState(updater, callback)），这两种方式都可以保证在应用更新后触发

```js
this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
```

~~~
stateChange 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：

this.setState({quantity: 2})
这种形式的 setState() 也是异步的，并且在同一周期内会对多个 setState 进行批处理。例如，如果在同一周期内多次设置商品数量增加，则相当于：

Object.assign(
  previousState,
  {quantity: state.quantity + 1},
  {quantity: state.quantity + 1},
  ...
)
后调用的 setState() 将覆盖同一周期内先调用 setState 的值，因此商品数仅增加一次。如果后续状态取决于当前状态，我们建议使用 updater 函数的形式代替：

this.setState((state) => {
  return {quantity: state.quantity + 1};
});
~~~

## forceUpdate
component.forceUpdate(callback)
> 通常你应该避免使用 forceUpdate()，尽量在 render() 中使用 this.props 和 this.state。

## resources
- https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973
- https://zh-hans.reactjs.org/docs/react-component.html#forceupdate