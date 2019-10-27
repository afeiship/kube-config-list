# class properties

## defaultProps
- defaultProps 可以为 Class 组件添加默认 props。
- 这一般用于 props 未赋值，但又不能为 null 的情况。

## displayName
- displayName 字符串多用于调试消息。
- 通常，你不需要设置它，因为它可以根据函数组件或 class 组件的名称推断出来。
- 如果调试时需要显示不同的名称或创建高阶组件，请参阅使用 displayname 轻松进行调试了解更多。