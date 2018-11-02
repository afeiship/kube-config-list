# render 方法新增返回类型

在 React 16 中，render 方法支持直接返回 string, number, boolean, null, portal, 以及 fragments(带有 key 属性的数组)，这可以在一定程度上减少页面的 DOM 层级。

```jsx
//string
render(){
    return 'hello,world'
}

//number
render(){
    return 12345
}

//boolean
render(){
    return isTrue?true:false
}

//null
render(){
    return null
}

//fragments，未加key标识符，控制台会出现warning
render(){
    return [
        <div>hello</div>,
        <span>world</span>,
        <p>oh</p>
    ]
}
```

以上各种类型现在均可以直接在 render 中返回，不需要再在外层包裹一层容器元素，不过在返回的数组类型中，需要在每个元素上加一个唯一且不变的 key 值，否则控制台会报一个 warning。

作者：弧度里的微笑
链接：https://www.jianshu.com/p/af0ae26eac18
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
