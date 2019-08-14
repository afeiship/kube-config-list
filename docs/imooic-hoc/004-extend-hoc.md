# extend hoc


## feature
- 操作 prop
- 操作 生命周期函数

## example
```js
export default () => WrappedComponent => class extends WrappedComponent{
    redner(){
        const { user,...props } = this.props;
        // 这里可以直接 = ？
        this.props  = props;
        return super.render();
    }
}
```

