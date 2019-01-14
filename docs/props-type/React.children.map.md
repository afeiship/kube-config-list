# React.children.map
> 遍历props.children可以获取子组件实例，然后clone子组件进行操作，可以添加修改子组件的props如：
```js
React.Children.map(this.props.children, (child) => {
   return React.cloneElement(child, {
       className: 'xxx',
   });
})

React.Children.map(this.props.children, (child, index) => {
    if(child.props.active) {
       return child;
    }
})
```

## 注意： 
> `使用this.props.children.map进行遍历如果children是函数/单个react元素/对象等将会抛出错误`，但是使用React.Children.map就不会
