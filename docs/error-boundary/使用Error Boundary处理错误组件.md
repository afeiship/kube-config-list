# 使用Error Boundary处理错误组件
之前，一旦某个组件发生错误，整个组件树将会从根节点被unmount下来。React 16修复了这一点，引入了Error Boundary的概念，中文译为“错误边界”，当某个组件发生错误时，我们可以通过Error Boundary捕获到错误并对错误做优雅处理，如使用Error Boundary提供的内容替代错误组件。Error Boundary可以看作是一种特殊的React组件，新增了componentDidCatch这个生命周期函数，它可以捕获自身及子树上的错误并对错误做优雅处理，包括上报错误日志、展示出错提示，而不是卸载整个组件树。（注：它并不能捕获runtime所有的错误，比如组件回调事件里的错误，可以把它想象成传统的try-catch语句）

```jsx
//最佳实践：将ErrorBoundary抽象为一个公用的组件类
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    componentDidCatch(err, info) {
        this.setState({ hasError: true })
        //sendErrorReport(err,info)
    }
    render(){
        if(this.state.hasError){
            return <div>Something went wrong!</div>
        }
        return this.props.children
    }
}
```
我们可以在容易出错的组件外使用ErrorBoundary将它包裹起来，如下
```jsx
//使用方式
render(){
    return (
        <div>
            <ErrorBoundary>
                <Profile user={this.state.user} />
            </ErrorBoundary>
            <button onClick={this.onClick}>Update</button>
        </div>
    )
}
```
如果Profile组件发生错误，将会使用ErrorBoundary提供的<div>Something went wrong</div>代替它，而不会引起整个组件树的卸载。

作者：弧度里的微笑
链接：https://www.jianshu.com/p/af0ae26eac18
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。