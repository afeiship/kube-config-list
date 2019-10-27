# lifecycle
> 组件的生命周期.

## mount
> 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
- constructor
- static getDerivedStateFromProps
- render 
- componentDidMount

~~~
下述生命周期方法即将过时，在新代码中应该避免使用它们：
UNSAFE_componentWillMount()
~~~



## update
> 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

~~~
注意:
下述方法即将过时，在新代码中应该避免使用它们：

UNSAFE_componentWillUpdate()
UNSAFE_componentWillReceiveProps()
~~~

## unmount
> 当组件从 DOM 中移除时会调用如下方法：
- componentWillUnmount()

## error
> 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
- static getDerivedStateFromError()
- componentDidCatch()


## resources
- https://zh-hans.reactjs.org/docs/react-component.html
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


