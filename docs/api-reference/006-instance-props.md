# instance properties
> 实例属性。


## props
- this.props 包括被该组件调用者定义的 props。欲了解 props 的详细介绍，请参阅组件 & Props。
- 需特别注意，this.props.children 是一个特殊的 prop，通常由 JSX 表达式中的子组件组成，而非组件本身定义。

## state
- 组件中的 state 包含了随时可能发生变化的数据。state 由用户自定义，它是一个普通 JavaScript 对象。
- 如果某些值未用于渲染或数据流（例如，计时器 ID），则不必将其设置为 state。此类值可以在组件实例上定义。
- 欲了解关于 state 的更多信息，请参阅 State & 生命周期。
- 永远不要直接改变 this.state，因为后续调用的 setState() 可能会替换掉你的改变。
- 请把 this.state 看作是不可变的。