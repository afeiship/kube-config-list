# Proxy-hoc

## feature
- 操作 prop
- 提取状态
- 访问 ref
- 包装组件

## example
```js
export default () => WrappedComponent => class extends React.Component{
    redner(){
        const { ...props } = this.props;
        return <WrappedComponent {...props}/>
    }
}
```

